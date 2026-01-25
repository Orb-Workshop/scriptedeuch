export default class Vector2 {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    static Null: Vector2 = new Vector2(+Infinity, -Infinity);
    static Zero: Vector2 = new Vector2(0, 0);

    static Create(x: number = 0, y: number = 0): Vector2 {
        return new Vector2(x, y);
    }

    add(v: Vector2): Vector2 {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    sub(v: Vector2): Vector2 {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    scale(s: number): Vector2 {
        this.x *= s;
        this.y *= s;
        return this;
    }

    dot(v: Vector2): number {
        return this.x * v.x + this.y * v.y;
    }

    cross(v: Vector2): number {
        return (this.x * v.y - this.y * v.x);
    }

    magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize(): Vector2 {
        const len: number = this.magnitude();
        return len === 0 ? Vector2.Zero : this.scale(1 / len);
    }

    distance(v: Vector2): number {
        return this.sub(v).magnitude();
    }

    equals(v): boolean {
        return this.x === v.x && this.y === v.y;
    }

    toString(): string {
        return `( ${[this.x, this.y].join(", ")} )`;
    }
    
}
