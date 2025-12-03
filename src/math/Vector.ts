export default class Vector {
    static Null = { x: 16000, y: 16000, z: 16000 };
    static Zero = { x: 0, y: 0, z: 0 };

    static create(x = 0, y = 0, z = 0) {
        return { x, y, z };
    }

    static add(a, b) {
        return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
    }

    static sub(a, b) {
        return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
    }

    static scale(v, s) {
        return { x: v.x * s, y: v.y * s, z: v.z * s };
    }

    static dot(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }

    static cross(a, b) {
        return {
            x: a.y * b.z - a.z * b.y,
            y: a.z * b.x - a.x * b.z,
            z: a.x * b.y - a.y * b.x
        };
    }

    static magnitude(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    }

    static normalize(v) {
        const len = this.magnitude(v);
        return len === 0 ? this.zeroV : this.scale(v, 1 / len);
    }

    static distance(a, b) {
        return this.magnitude(this.sub(a, b));
    }

    static equals(a, b) {
        return a.x === b.x && a.y === b.y && a.z === b.z;
    }
}
