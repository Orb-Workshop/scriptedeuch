/**
   Represents a 3d grid of values. The data is represented by Grid3D, and
   sections of it can be manipulated with `SubGrid`, which is invoked
   with `Grid3D.subGrid({ x, y, z, width, height, depth })`.

   Example:
   ```typescript
   // Create a 10x10x1 3D Grid of String values, with a sentinel of "0".
   let g = Grid3D<string>({width: 10, height: 10, sentinel: "0"});
   g.setAt(0, 0, "O");
   g.setAt(1, 0, "R");
   g.setAt(2, 0, "B");

   // Display in Console
   for (let j = g.height-1; j >= 0; j--) {
     let line = "";
     for (let i = 0; i < g.width; i++) {
       line += " ";
       line += g.getAt(i, j);
     }
     console.log(line);
   }
   ```

   Notes:

   - Supports 1D/2D Functionality. Omitting the height and depth values
   upon construction are '1' by default.
*/
import BBox3 from "../BBox3";
import SubGrid from "./SubGrid";
import GridLens from "./GridLens";
import GridError from "./GridError";


export default class Grid3D<T = number> {
    private data: Array<T> = [];

    width: number;
    height: number;
    depth: number;

    constructor(obj = {}) {
        this.width = obj.width ?? 1;
        this.height = obj.height ?? 1;
        this.depth = obj.depth ?? 1;
        this.sentinel = obj.sentinel ?? null;
        this.forEachIndex((i, j, k) => {
            this.data.push(this.sentinel);
        });

        if (this.width < 1) throw new GridError("Width cannot be less than 1");
        if (this.height < 1) throw new GridError("Height cannot be less than 1");
        if (this.depth < 1) throw new GridError("Depth cannot be less than 1");
    }

    clone(): Grid3D<T> {
        let g = new Grid3D({
            width: this.width,
            height: this.height,
            depth: this.depth,
            sentinel: this.sentinel,
        });
        this.forEachIndex((i, j, k) => {
            const v = this.getAt(i, j, k);
            g.setAt(i, j, k, v);
        });
        return g;
    }

    size(): number {
        return this.width * this.height * this.depth;
    }

    index(x: number, y: number, z: number = 0): number {
        let array_index = this.width * (this.height * z + y) + x;
        return array_index;
    }

    forEachIndex(f): void {
        for (let k = 0; k < this.depth; k++) {
            for (let j = 0; j < this.height; j++) {
                for (let i = 0; i < this.width; i++) {
                    f.bind(this)(i, j, k);
                }
            }
        }
    }

    getAt(i: number, j: number, k: number = 0): T {
        if (i < 0) throw new GridError("'i' index is out of bounds. i < 0.");
        if (i >= this.width) throw new GridError("'i' index is out of bounds. i >= depth");
        if (j < 0) throw new GridError("'j' index is out of bounds. j < 0.");
        if (j >= this.height) throw new GridError("'j' index is out of bounds. j >= height");
        if (k < 0) throw new GridError("'k' index is out of bounds. k < 0.");
        if (k >= this.depth) throw new GridError("'k' index is out of bounds. k >= depth");
        return this.data[this.index(i, j, k)];
    }

    getAtIndex(idx: number): T {
        return this.data[idx];
    }

    setAt(i: number, j: number, k: number, value: T): void {
        this.data[this.index(i, j, k)] = value;
    }

    hasAt(i: number, j: number, k: number): bool {
	if (i < 0) return false;
        if (i >= this.width) return false;
        if (j < 0) return false;
        if (j >= this.height) return false;
        if (k < 0) return false;
        if (k >= this.depth) return false;
	return true;
    }

    /**
       Will return an element of the Grid approximately within bounds
       of the provided `x`, `y`, and/or `z`.

       Note:

       - Sanitizes the input for out-of-bounds number values to the
         closest coordinates.

       - Errors for non-number values
     */
    locateElement(x: number, y: number, z: number = 0): T {
	if (typeof x !== "number") throw new GridError("Locate Element 'x' value is not a number");
	if (typeof y !== "number") throw new GridError("Locate Element 'y' value is not a number");
	if (typeof z !== "number") throw new GridError("Locate Element 'z' value is not a number");

        x = (x >= 0) ? x : 0;
        x = (x <= this.width-1) ? x : this.width-1;
        x = Math.floor(x);

        y = (y >= 0) ? y : 0;
        y = (y <= this.height-1) ? y : this.height-1;
        y = Math.floor(y);

        z = (z !== undefined) ? z : 0;
        z = (z >= 0) ? z : 0;
        z = (z <= this.depth-1) ? z : this.depth-1;
        z = Math.floor(z);

        let element = this.getAt(x, y, z);
        return element;
    }

    /**
       Returns a 'SubGrid' of the current Grid3D. Representing a
       fraction of the original Grid3D.

       Notes:

       - Can be used with PathFinding and Procgen as a traditional
       Grid3D.

       - SubGrids can also be converted into a BBox3, to check
         intersections, between grids.
     */
    subGrid(opts): SubGrid<T> {
        const {
            x,
            y,
            z = 0,
            width = 1,
            height = 1,
            depth = 1,
        } = opts;
	if (x < 0) throw new GridError("SubGrid 'x' offset is out of bounds.");
	if (x > this.width-1) throw new GridError("SubGrid 'x' offset is out of bounds.");
	if (y < 0) throw new GridError("SubGrid 'y' offset is out of bounds.");
	if (y > this.height-1) throw new GridError("SubGrid 'y' offset is out of bounds.");
	if (z < 0) throw new GridError("SubGrid 'z' offset is out of bounds.");
	if (z > this.depth-1) throw new GridError("SubGrid 'z' offset is out of bounds.");

	if (x + width > this.width)
	    throw new GridError("SubGrid 'width' dimension is out of bounds.");
	if (y + height > this.height)
	    throw new GridError("SubGrid 'height' dimension is out of bounds.");
	if (z + depth > this.depth)
	    throw new GridError("SubGrid 'depth' dimension is out of bounds.");

        return new SubGrid<T>({
            parent: this,
            x, y, z,
            width,
            height,
            depth,
        });
    }

    /*
       BBox3 Functionality
    */
    toBBox3(): BBox3 {
	return new BBox3(this.x, this.y, this.z,
			 this.width, this.height, this.depth);
    }

    /*
      Returns a 'GridLens' instance. Useful for crawling/navigating the Grid3D space.
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
