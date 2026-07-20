/**
   Resembles a soft reference to a section of a Grid3D. Includes
   methods to easily navigate and compare between SubGrids.
*/
import GridLens from "./GridLens";
import Grid3D from "./Grid3D";
import BBox3 from "../BBox3";

export default class SubGrid<T = number> {
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

    //TODO: use local index and convert to global index?
    getAtIndex(idx: number): T {
        return this.parent.getAtIndex(idx);
    }

    setAt(i, j, k, value): void {
        this.parent.setAt(i + this.x,
                          j + this.y,
                          k + this.z);
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

    //
    // SubGrid Specific
    //

    // Represents the Grid3D Global Index
    forEachGlobalIndex(f): void {
        this.forEachIndex((i, j, k) => {
            f.bind(this)(i+this.i, j+this.j, k+this.k);
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
      Returns a 'GridLens' instance. Useful for crawling/navigating the SubGrid space.
     */
    lens(x: number, y: number, z: number = 0): GridLens<T> {
	if (x < 0) throw new GridError("GridLens 'x' value is out of bounds.");
	if (x > this.width-1) throw new GridError("GridLens 'x' value is out of bounds.");
	if (y < 0) throw new GridError("GridLens 'y' value is out of bounds.");
	if (y > this.height-1) throw new GridError("GridLens 'y' value is out of bounds.");
	if (z < 0) throw new GridError("GridLens 'z' value is out of bounds.");
	if (z > this.depth-1) throw new GridError("GridLens 'z' value is out of bounds.");
	return new GridLens<T>(this, x, y, z);
    }

}
