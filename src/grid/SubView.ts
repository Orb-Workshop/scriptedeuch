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
}
