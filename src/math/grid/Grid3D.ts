/// Represents a grid of values

export default class Grid3D<T = number> {
    private data: Array<T> = [];

    private width: number;
    private height: number;
    private depth: number;

    constructor(obj = {}) {
	this.width = obj.width || 1;
	this.height = obj.height || 1;
	this.depth = obj.depth || 1;
	this.sentinel = obj.sentinel ?? null;
	this.forEachIndex((i, j, k) => {
	    this.data.push(this.sentinel);
	});
    }

    size(): number { return this.width * this.height * this.depth }

    index(x: number, y: number, z: number): number {
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

    getAt(i: number, j: number, k: number): T {
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
}
