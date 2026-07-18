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
   ```

   Notes:

   - Supports 1D/2D Functionality. Omitting the width and depth values
   upon construction are '1' by default.
*/

class GridError extends Error {
    constructor(message: string) {
	super(message);
	this.name = "GridError";
	Object.setPrototypeOf(this, GridError.prototype);
    }
}

export default class Grid3D<T = number> {
    private data: Array<T> = [];

    private width: number;
    private height: number;
    private depth: number;

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

    locateElement(x: number, y: number, z: number): T {
	x = (x >= 0) ? x : 0;
	x = (x <= this.width()-1) ? x : this.width()-1;
	x = Math.floor(x);

	y = (y >= 0) ? y : 0;
	y = (y <= this.height()-1) ? y : this.height()-1;
	y = Math.floor(y);

	z = (z !== undefined) ? z : 0;
	z = (z >= 0) ? z : 0;
	z = (z <= this.depth()-1) ? z : this.depth()-1;
	z = Math.floor(z);

	let element = this.getAt(x, y, z);
	return element;
    }

    subGrid(obj): SubGrid {
	const {
	    x,
	    y,
	    z = 0,
	    width = 1,
	    height = 1,
	    depth = 1,
	} = obj;
	return new SubGrid({
	    parent: this,
	    x, y, z,
	    width,
	    height,
	    depth,
	});
    }
}

/**
   Resembles a BBox3, but shares information with the original Grid3D.
 */
export class SubGrid<T = number> {
    private parent: Grid3D;

    private x: number;
    private y: number;
    private z: number;

    private width: number;
    private height: number;
    private depth: number;

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

    setAt(i, j, k, value): void {
	this.parent.setAt(i + this.x,
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

    /**
       SubGrid Lens Functions (1x1 Grid)
     */
    get(): T {
	return this.getAt(0, 0, 0);
    }

    set(v = null): void {
	this.setAt(0, 0, 0, v);
    }
}
