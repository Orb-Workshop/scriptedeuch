import { Vector as VectorType } from "cs_script/point_script";

export default class Vector3 implements VectorType {
    public x: number;
    public y: number;
    public z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    static Null: Vector3 = new Vector3(+Infinity, -Infinity, +Infinity);
    static Zero: Vector3 = new Vector3(0, 0, 0);

    /** Same as constructor */
    static Create(x: number = 0, y: number = 0, z: number = 0): Vector3 {
        return new Vector3(x, y, z);
    }

    /** Create Vector from CS Vector Interface */
    static From({x, y, z}: VectorType): Vector3 {
        return new Vector3(x, y, z);
    }

    /** Add two vectors and return a new `Vector3` */
    add(v: Vector3): Vector3 {
        return new Vector3(this.x + v.x,
                           this.y + v.y,
                           this.z + v.z);
    }

    /** Subtract two vectors and return a new `Vector3` */
    sub(v: Vector3): Vector3 {
        return new Vector3(this.x - v.x,
                           this.y - v.y,
                           this.z - v.z);
    }

    /** Return a scaled `Vector3`, scaled by `s`. */
    scale(s: number): Vector3 {
        return new Vector3(this.x * s,
                           this.y * s,
                           this.z * s);
    }

    /** Return dot product of this vector with `v` */
    dot(v: Vector3): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    cross(v: Vector3): Vector3 {
        const x = this.y * v.z - this.z * v.y;
        const y = this.z * v.x - this.x * v.z;
        const z = this.x * v.y - this.y * v.x;
        return new Vector3(x, y, z);
    }

    magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    normalize(): Vector3 {
        const len = this.magnitude();
        return len === 0 ? Vector3.Zero : this.scale(1 / len);
    }

    distance(v: Vector3): number {
        return this.sub(v).magnitude();
    }

    equals(v): boolean {
        return this.x === v.x && this.y === v.y && this.z === v.z;
    }
}
