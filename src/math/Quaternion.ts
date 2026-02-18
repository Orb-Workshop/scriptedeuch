/**
   Quaternion Implementation
*/
import { default as QAngle } from "./QAngle";
import { default as Vector } from "./Vector3";

export interface QuaternionType {
    w: number;
    x: number;
    y: number;
    z: number;
}

export default class Quaternion implements QuaternionType {
    w: number;
    x: number;
    y: number;
    z: number;
    constructor(w = 1, x = 0, y = 0, z = 0) {
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static Create(w = 1, x = 0, y = 0, z = 0): Quaternion {
        return new Quaternion(w, x, y, z);
    }

    static From(q: QuaternionType): Quaternion {
        return new Quaternion(q.w, q.x, q.y, q.z);
    }

    static FromAxisAngle(v: Vector, angle: number = 0): {
        v = v.normalize();
        const half_angle = angle / 2;
        return new Quaternion(
            Math.cos(half_angle),
            Math.sin(half_angle) * v.x,
            Math.sin(half_angle) * v.y,
            Math.sin(half_angle) * v.z,
        );
    }
    
    add(q: Quaternion): Quaternion {
        return new Quaternion(
            this.w + q.w,
            this.x + q.x,
            this.y + q.y,
            this.z + q.z,
        );
    }

    sub(q: Quaternion): Quaternion {
        return new Quaternion(
            this.w - q.w,
            this.x - q.x,
            this.y - q.y,
            this.z - q.z,
        );
    }

    conjugate(): Quaternion {
        return new Quaternion(
            this.w,
            this.x * -1,
            this.y * -1,
            this.z * -1,
        );
    }

    conj(): Quaternion {
        return this.conjugate();
    }

    scale(s: number): Quaternion {
        return new Quaternion (
            this.w * s,
            this.x * s,
            this.y * s,
            this.z * s,
        );
    }
    
    dot(q: Quaternion): Quaternion {
        let result = 0;
        
        result += this.w * q.w;
        result += this.x * q.x;
        result += this.y * q.y;
        result += this.z * q.z;
        
        return result;
    }
    
    magnitude(): number {
        return Math.hypot(this.w, this.x, this.y, this.z);
    }

    mag(): number {
        return this.magnitude();
    }
    
    normal(): Quaternion {
        const mag = this.magnitude();
        return new Quaternion(
            this.w * 1 / mag,
            this.x * 1 / mag,
            this.y * 1 / mag,
            this.z * 1 / mag,
        );
    }

    inverse(): Quaternion {
        const mag = this.magnitude();
        return this.conjugate().scale(1 / mag);
    }

    multiply(q: Quaternion): Quaternion {
        return new Quaternion(
            this.w * q.w - this.x * q.x - this.y * q.y - this.z * q.z,
            this.w * q.x + this.x * q.w + this.y * q.z - this.z * q.y,
            this.w * q.y - this.x * q.z + this.y * q.w + this.z * q.x,
            this.w * q.z + this.x * q.y - this.y * q.x + this.z * q.w,
        );
    }

    transform(v: Vector): Vector {
        const p = new Quaternion(0, v.x, v.y, v.z);
        const t = this.multiply(p).multiply(this.inverse());
        return new Vector(t.x, t.y, t.z);
    }
}
