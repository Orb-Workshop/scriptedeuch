import Point2 from "./Point2";

export default class LineSegment2 {
    a: Point2;
    b: Point2;
    
    constructor(point_a: Point2, point_b: Point2) {
        this.a = point_a;
        this.b = point_b;
    }

    midpoint(): Point2 {
        let m_x = (this.a.x + this.b.x) / 2;
        let m_y = (this.a.y + this.b.y) / 2;
        return new Point2(m_x, m_y);
    }

    distance(): number {
        let a = this.a;
        let b = this.b;
        let ab_x = b.x - a.x;
        let ab_y = b.y - a.y;
        return Math.hypot(ab_x, ab_y);
    }

    // Returns a unit/direction vector from point 'a' to 'b'
    // TODO: return a Vector2
    direction(): [number, number] {
        let a = this.a;
        let b = this.b;
        let ab_mag = this.distance();
        let ab_x = b.x - a.x;
        let ab_y = b.y - a.y;
        let unit_x = ab_x / ab_mag;
        let unit_y = ab_y / ab_mag;
        return [unit_x, unit_y];
    }

    // returns a Point between a and b based on a normalized value
    // between 0.0 and 1.0
    // ex. norm=0. --> return this.a
    //     norm=1. --> return this.b
    getNormalizedPoint(norm) {
        let a = this.a;
        let b = this.b;

        if (norm <= 0.) return a;
        if (norm >= 1.) return b;

        let point_distance = this.distance() * norm;
        let unit_vector = this.direction();
        let unit_x = unit_vector[0];
        let unit_y = unit_vector[1];
        return new Point2(a.x + unit_x * point_distance,
		          a.y + unit_y * point_distance);
    }
}
