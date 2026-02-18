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

    // Cross Product between Quaternions
    product(q): Quaternion {
        // qv1 * qv2
        let qv1 = Vector.From(this);
        let qv2 = Vector.From(q);
        let qv = Vector.From(qv2);
        let w = this.w * q.w - qv1.dot(qv2);
        qv = qv.scale(this.w);
        qv = qv.add(qv1.scale(q.w));
        qv = qv.add(qv1.cross(qv2));
        return new Quaternion(
            w,
            qv.x,
            qv.y,
            qv.z,
        );
    }
}
