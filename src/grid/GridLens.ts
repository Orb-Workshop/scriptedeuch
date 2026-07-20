/**
   Used to crawl over a Grid3D or SubGrid.
*/
import type GridType from "./GridType";

export default class GridLens<T> {
    parent: GridType;

    x: number;
    y: number;
    z: number;

    constructor(parent, x, y, z) {
	this.parent = parent;

	this.x = x;
	this.y = y;
	this.z = z;
    }

    clone(): GridLens<T> {
	return new GridLens<T>(this.parent, this.x, this.y, this.z);
    }

    get(): T {
	return this.parent.getAt(this.x, this.y, this.z);
    }

    set(v: T): void {
	this.parent.setAt(this.x, this.y, this.z, v);
    }

    isEqual(o: GridLens<T>): bool {
	return (
	    this.parent === o?.parent &&
		this.x === o?.x &&
		this.y === o?.y &&
		this.z === o?.z);
    }

    top(): T|null {
	if (this.z >= this.parent.depth-1) return null;
	return new GridLens<T>(this.parent, this.x, this.y, this.z+1);
    }

    bottom(): T|null {
	if (this.z <= 1) return null;
	return new GridLens<T>(this.parent, this.x, this.y. this.z-1);
    }

    up(): T|null {
        if (this.y >= this.parent.height-1) return null;
        return new GridLens<T>(this.parent, this.x, this.y+1, this.z);
    }

    right(): T|null {
        if (this.x >= this.parent.width-1) return null;
        return new GridLens<T>(this.parent, this.x+1, this.y, this.z);
    }

    down(): T|null {
        if (this.y <= 1) return null;
        return new GridLens<T>(this.parent, this.x, this.y-1, this.z);
    }

    left(): T|null {
        if (this.x <= 1) return null;
        return new GridLens<T>(this.parent, this.x-1, this.y, this.z);
    }
}
