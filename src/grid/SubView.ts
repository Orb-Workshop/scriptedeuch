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

export default class SubView<T = number> {
    grid: GridType<T>;
    element_mapping: Map<number, GridLens<T>> = new Map();

    constructor(grid: GridType<T>) {
	this.grid = grid;
    }

    set(gl: GridLens<T>): bool {
	const idx = this.grid.index(gl.x, gl.y, gl.z);
	this.element_mapping.set(idx, gl);
    }

    delete(gl: GridLens<T>): bool {
	const idx = this.grid.index(gl.x, gl.y, gl.z);
	return this.element_mapping.delete(idx);
    }

    has(x: number, y: number, z: number = 0): bool {
	const idx = this.grid.index(x, y, z);
	this.element_mapping.has(idx);
    }

    get(x: number, y: number, z: number = 0): GridLens<T>|null {
	const idx = this.grid.index(x, y, z);
	return this.element_mapping.get(idx) ?? null;
    }

    insertGrid(g: SubGrid<T>): void {
	g.forEachIndex((i, j, k) => {
	    const l = g.lens(i, j, k);
	    this.set(l);
	});
    }

    removeGrid(g: SubGrid<T>): void {
	g.forEachIndex((i, j, k) => {
	    const l = g.lens(i, j, k);
	    this.delete(l);
	});
    }

    forEachElement(f: (e: GridLens<T>) => void): void {
	this.element_mapping.forEach((value, key, m) => f(value));
    }
}
