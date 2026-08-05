/**
   Resembles a soft reference to a section of a Grid3D. Includes
   methods to easily navigate and compare between SubGrids.
*/
import { BBox3 } from "../math";
import GridLens from "./GridLens";
import GridError from "./GridError";
import type GridType from "./GridType";
import type Grid3D from "./Grid3D";

export default class SubGrid<T = number> implements GridType {
    parent: Grid3D;

    x: number;
    y: number;
    z: number;

    width: number;
    height: number;
    depth: number;

    constructor(obj = {}) {
        this.parent = obj.parent;
        this.x = obj.x;
        this.y = obj.y;
        this.z = obj.z ?? 0;
        this.width = obj.width ?? 1;
        this.height = obj.height ?? 1;
        this.depth = obj.depth ?? 1;
    }

    getAt(i: number, j: number, k: number = 0): T {
        return this.parent.getAt(i + this.x,
                                 j + this.y,
                                 k + this.z);
    }

    getAtIndex(idx: number): T {
        return this.parent.getAtIndex(idx);
    }

    setAt(i, j, k, value): void {
        this.parent.setAt(i + this.x,
                          j + this.y,
                          k + this.z,
			  value);
    }

    hasAt(i, j, k): bool {
	return this.parent.hasAt(i + this.x,
				 j + this.y,
				 k + this.z);
    }

    locateElement(i, j, k): T {
	return this.parent.locateElement(i + this.x,
					 j + this.y,
					 k + this.z);
    }

    size(): number {
        return this.width * this.height * this.depth;
    }

    index(i, j, k): number {
        return this.parent.index(
            i + this.x,
            j + this.y,
            k + this.z,
        );
    }

    // Represents the SubGrid Local Index.
    forEachIndex(f): void {
        for (let k = 0; k < this.depth; k++) {
            for (let j = 0; j < this.height; j++) {
                for (let i = 0; i < this.width; i++) {
                    f.bind(this)(i, j, k);
                }
            }
        }
    }

    subGrid(opts): SubGrid<T> {
	const {
	    x,
	    y,
	    z = 0,
	    width = 1,
	    height = 1,
	    depth = 1,
	} = opts;

	return this.parent.subGrid({
	    x: this.x + x,
	    y: this.y + y,
	    z: this.z + z,
	    width, height, depth,
	});
    }

    // Represents the Grid3D Global Index
    forEachGlobalIndex(f): void {
        this.forEachIndex((i, j, k) => {
            f.bind(this)(i+this.x, j+this.y, k+this.z);
        });
    }

    /*
       BBox3 Functionality between SubGrids.
    */
    toBBox3(): BBox3 {
	return new BBox3(this.x, this.y, this.z,
			 this.width, this.height, this.depth);
    }

    /*
      Returns a 'GridLens' instance. Useful for crawling/navigating the Grid3D space.
     */
    lens(x: number, y: number, z: number = 0): GridLens<T> {
	if (x < 0)
	    throw new GridError(`GridLens 'x' value is out of bounds (<). x = ${x}`);
	if (x > this.width-1)
	    throw new GridError(`GridLens 'x' value is out of bounds (>). x = ${x}`);
	if (y < 0)
	    throw new GridError(`GridLens 'y' value is out of bounds (<). y = ${y}`);
	if (y > this.height-1)
	    throw new GridError(`GridLens 'y' value is out of bounds (>). y = ${y}`);
	if (z < 0)
	    throw new GridError(`GridLens 'z' value is out of bounds (<). z = ${z}`);
	if (z > this.depth-1)
	    throw new GridError(`GridLens 'z' value is out of bounds (>). z = ${z}`);
	return new GridLens<T>(this, x, y, z);
    }

    lensFromIndex(idx: number): GridLens<T> {
	const w = this.width;
	const h = this.height;
	const d = this.depth;
	const v = Math.floor(idx);

	const t1 = Math.floor(idx / d);
	const z = idx % d;
	const t2 = Math.floor(t1 / h);
	const y = t1 % h;
	const x = t2;

	return this.lens(x, y, z);
    }

    /*
      Returns a 'SubView' instance based on the parent Grid3D. Useful
      for non-square datasets that exist in the Grid3D.
    */
    subView(): SubView<T> {
	return new SubView<T>(this.parent);
    }

}
