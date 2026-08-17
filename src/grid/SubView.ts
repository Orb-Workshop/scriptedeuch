/**
   Represents a collection of elements contained within the referenced
   Grid3D.

   The collection of elements is stored as a map of `GridLens`
   instances, by index. A GridView can be queried for element
   presence.

   Elements can be added/removed solely as a `GridLens` with `set` and `delete`

   It can be queried and manipulated with `forEachElement`. Parts of
   the SubView can be removed and inserted from with SubGrid's.

   Applications of SubViews. SubView's can be used as filters. They
   can be used to define different layers of a Grid as a sparse set of
   elements. Especially useful if the dataset cannot be represented by
   a SubGrid.

   # Example

   ```typescript
   let g = new Grid3D({ width: 10, height: 10, sentinel, 0 });
   let sv = g.subView();
   sv.insertGrid(g.subGrid({
     x: 4, y: 1, width: 2, height: 8,
   }));
   sv.insertGrid(g.subGrid({
     x: 2, y: 5, width: 6, height: 2,
   }));
   sv.forEachElement((e) => e.set(1));
   Display2D(g)
   ```
*/
import Grid3D from "./Grid3D";
import SubGrid from "./SubGrid";
import GridLens from "./GridLens";
import type GridType from "./GridType";
import GridError from "./GridError";
import { Point3, BBox3 } from "../math";

export default class SubView<T> {
    grid: Grid3D<T>;
    element_set: Set<number> = new Set();  // Set of grid indexes.

    constructor(grid: Grid3D<T>) {
	this.grid = grid;
    }

    add(idx: number): void {
	this.element_set.add(idx);
    }

    set(gl: GridLens<T>): void {
	if (gl.parent !== this.grid) throw new GridError("Grids do not match.");
	const idx = this.grid.index(gl.x, gl.y, gl.z);
	this.add(idx);
    }

    delete(gl: GridLens<T>): void {
	if (gl.parent !== this.grid) throw new GridError("Grids do not match.");
	const idx = this.grid.index(gl.x, gl.y, gl.z);
	this.element_set.delete(idx);
    }

    has(x: number, y: number, z: number = 0): bool {
	const idx = this.grid.index(x, y, z);
	return this.element_set.has(idx);
    }

    get(x: number, y: number, z: number = 0): GridLens<T>|null {
	if (this.has(x, y, z))
	    return this.grid.lens(x, y, z);
	return null;
    }

    clone(): SubView<T> {
	let sv = this.grid.subView();
	this.forEachElement(e => sv.set(e));
	return sv;
    }

    insertGrid(g: SubGrid<T>): void {
	g.forEachGlobalIndex((i, j, k) => {
	    const l = this.grid.lens(i, j, k);
	    this.set(l);
	});
    }

    removeGrid(g: SubGrid<T>): void {
	g.forEachGlobalIndex((i, j, k) => {
	    const l = this.grid.lens(i, j, k);
	    this.delete(l);
	});
    }

    forEachElement(f: (e: GridLens<T>) => void): void {
	this.element_set.forEach((value, key, s) => f(this.grid.lensFromIndex(value)));
    }

    /**
       Returns the GridView with the given GridType as it's parent.
     */
    withOwner(g: GridType<T>): SubView<T> {
	const sv = g.subView();
	this.forEachElement((e) => {
	    sv.set(e.withOwner(g));
	});
	return sv;
    }

    translate(x: number, y: number, z: number = 0): SubView<T> {
	const sv = this.grid.subView();
	this.forEachElement((e) => {
	    const l = this.grid.lens(e.x + x, e.y + y, e.z + z);
	    sv.set(l);
	});
	return sv;
    }

    union(inn: SubView<T>): SubView<T> {
	const sv = this.withOwner(this.grid); // clone
	sv.element_set = sv.element_set.union(inn.element_set);
	return sv;
    }

    intersection(inn: SubView<T>): SubView<T> {
	const sv = this.withOwner(this.grid);
	sv.element_set = sv.element_set.intersection(inn.element_set);
	return sv;
    }

    difference(inn: SubView<T>): SubView<T> {
	const sv = this.withOwner(this.grid);
	sv.element_set = sv.element_set.difference(inn.element_set);
	return sv;
    }

    isDisjointFrom(inn: SubView<T>): bool {
	const sv = this.withOwner(this.grid);
	return sv.element_set.isDisjointFrom(inn.element_set);
    }

    isSubsetOf(inn: SubView<T>): bool {
	const sv = this.withOwner(this.grid);
	return sv.element_set.isSubsetOf(inn.element_set);
    }

    isSupersetOf(inn: SubView<T>): bool {
	const sv = this.withOwner(this.grid);
	return sv.element_set.isSupersetOf(inn.element_set);
    }

    symmetricDifference(inn: SubView<T>): SubView<T> {
	const sv = this.withOwner(this.grid);
	sv.element_set = sv.element_set.symmetricDifference(inn.element_set);
	return sv;
    }

    /**
       Represents the center point of the subview indexes. It is based
       on the mean average of each coordinate axis.
     */
    centerPoint(): Point3 {
	let x_total = 0;
	let y_total = 0;
	let z_total = 0;
	let count = 0;
	this.forEachElement((e) => {
	    x_total += e.x;
	    y_total += e.y;
	    z_total += e.z;
	    count += 1;
	});
	const x = Math.floor(x_total / count);
	const y = Math.floor(y_total / count);
	const z = Math.floor(z_total / count);

	return new Point3(x, y, z);
    }

    /*
      Returns a BBox3 Bounding Box object, which has dimensions big
      enough to hold all elements of the SubView.
     */
    toBBox3(): BBox3 {
	let x_min = 0;
	let x_max = 0;
	let y_min = 0;
	let y_max = 0;
	let z_min = 0;
	let z_max = 0;
	this.forEachElement((e) => {
	    if (e.x < x_min) x_min = e.x;
	    if (e.x > x_max) x_max = e.x;

	    if (e.y < y_min) y_min = e.y;
	    if (e.y > y_max) y_max = e.y;

	    if (e.z < z_min) z_min = e.z;
	    if (e.z > z_max) z_max = e.z;
	});

	const x = x_min;
	const y = y_min;
	const z = z_min;
	const w = x_max - x_min + 1;
	const h = y_max - y_min + 1;
	const d = z_max - z_min + 1;

	return new BBox3(x, y, z, w, h, d);
    }

    /*
      Returns true if the given offset and dimension can be
      represented in the populated SubView
    */
    private fitsChunk(x, y, z, width, height, depth): bool {
	const sv = this.grid.subGrid({ x, y, z, width, height, depth }).toPopulatedSubView();
	return sv.isSubsetOf(this);
    }

    /*
      Attempts to find a vacant space in SubView that can hold a
      SubGrid with the given dimensions, or returns null.
    */
    private findChunk(width: number, height: number, depth: number): SubGrid | null {
	const sv_bb = this.toBBox3();

	// return null for obvious chunk sizes that don't fit
	if (width > sv_bb.w) return null;
	if (height > sv_bb.h) return null;
	if (depth > sv_bb.d) return null;

	const x_min = sv_bb.x;
	const x_max = sv_bb.x + sv_bb.w - width;
	const y_min = sv_bb.y;
	const y_max = sv_bb.y + sv_bb.h - height;
	const z_min = sv_bb.z;
	const z_max = sv_bb.z + sv_bb.d - depth;

	for (let k = z_min; k <= z_max; k++) {
	    for (let j = y_min; j <= y_max; j++) {
		for (let i = x_min; i <= x_max; i++) {
		    if (this.fitsChunk(i, j, k, width, height, depth))
			return new SubGrid(i, j, k, width, height, depth);
		}
	    }
	}
	return null;
    }

    /*
      Will return an array of SubGrids that fit within the SubView of elements.

      Defining the width, height or depth determines the constraints
      for how wide, long and tall the SubGrids can be. Unconstrained
      dimensions will attempt to fit the biggest possible SubGrids to
      populate the SubView.

      Notes:

      - For example, `sv.chunks({width: 1})` would return strips of
        SubGrids that have a width of 1, and varying unconstrained
        maxima heights and maxima depths. It will attempt to create
        the fewest number of subgrids to fill the subview within the
        given constraints.
     */
    chunks(opts: {width?: number, height?: number, depth?: number}): Array<SubGrid> {
	const width = opts.width ?? null;
	const height = opts.height ?? null;
	const depth = opts.depth ?? null;

	let sv = this.clone();
	const sv_bb = sv.toBBox3();

	// Generate the dimensional shapes that we'll be checking against the SubView
	const w_listing = (width === null) ? range(sv_bb.w, 1) : [ width ];
	const h_listing = (height === null) ? range(sv_bb.h, 1) : [ height ];
	const d_listing = (depth === null) ? range(sv_bb.d, 1) : [ depth ];

	// SubView Dimensional Bounds
	const x_min = sv_bb.x;
	const x_max = sv_bb.x + sv_bb.w;
	const y_min = sv_bb.y;
	const y_max = sv_bb.y + sv_bb.h;
	const z_min = sv_bb.z;
	const z_max = sv_bb.z + sv_bb.d;

	let chunk_listing = [];
	// Iterate over different dimensional shapes to iteratively try out over each section of subview
	d_listing.forEach((d) => {
	    h_listing.forEach((h) => {
		w_listing.forEach((w) => {
		    // For each offset of the dimensional shape that fits within the subview bounds
		    for (let k = z_min; k <= (z_max - d); k++) {
			for (let j = y_min; j <= (y_max - h); j++) {
			    for (let i = x_min; i <= (x_max - w); i++) {
				//
				const chunk = sv.findChunk(i, j, k, w, h, d);
				if (chunk !== null) {
				    chunk_listing.push(chunk);
				    sv.removeGrid(chunk);
				}
			    }
			}
		    }
		});
	    });
	});
	return chunk_listing;
    }
}

// Python range() function
function range(a, b) {
    const size = Math.abs(a - b ?? 0);
    let start_at = 0;
    if (b === undefined) {
	return [...Array(size).keys()];
    }
    else if (a < b) {
	start_at = a;
	return [...Array(size).keys()].map(i => i + start_at);
    }
    else {
	start_at = b;
	return [...Array(size).keys()].map(i => i + start_at).reverse();
    }
}
