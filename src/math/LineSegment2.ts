import Point2 from "./Point2";
import Vector2 from "./Vector2";

export default class LineSegment2 {
    a: Point2;
    b: Point2;
    
    constructor(point_a: Point2, point_b: Point2) {
        this.a = point_a;
        this.b = point_b;
    }

    midpoint(): Point2 {
        const m_x = (this.a.x + this.b.x) / 2;
        const m_y = (this.a.y + this.b.y) / 2;
        return new Point2(m_x, m_y);
    }

    distance(): number {
        const a = this.a;
        const b = this.b;
        const ab_x = b.x - a.x;
        const ab_y = b.y - a.y;
        return Math.hypot(ab_x, ab_y);
    }

    /** @returns A unit/direction vector from point `this.a` to `this.b`. */
    direction(): Vector2 {
        const a = this.a;
        const b = this.b;
        const ab_mag = this.distance();
        const ab_x = b.x - a.x;
        const ab_y = b.y - a.y;
        const unit_x = ab_x / ab_mag;
        const unit_y = ab_y / ab_mag;
        return new Vector2(unit_x, unit_y);
    }

    /** @returns 
        A Point between `this.a` and `this.b` based on a normalized value
        between 0.0 and 1.0
        ex. norm = 0. --> `return this.a`
            norm = 1. --> `return this.b`
    */
    getNormalizedPoint(norm: number): Point2 {
        const a = this.a;
        const b = this.b;

        if (norm <= 0.) return a;
        if (norm >= 1.) return b;

        const point_distance = this.distance() * norm;
        const unit_vector = this.direction();
        const unit_x = unit_vector[0];
        const unit_y = unit_vector[1];
        return new Point2(a.x + unit_x * point_distance,
		          a.y + unit_y * point_distance);
    }
}
