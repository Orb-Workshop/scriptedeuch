import Point3 from "./Point3";
import Vector3 from "./Vector3";

export default class LineSegment3 {
    a: Point3;
    b: Point3;
    
    constructor(point_a: Point3, point_b: Point3) {
        this.a = point_a;
        this.b = point_b;
    }

    midpoint(): Point3 {
        const m_x = (this.a.x + this.b.x) / 2;
        const m_y = (this.a.y + this.b.y) / 2;
        return new Point3(m_x, m_y);
    }

    distance(): number {
        const a = this.a;
        const b = this.b;
        const ab_x = b.x - a.x;
        const ab_y = b.y - a.y;
        const ab_z = b.z - a.z;
        return Math.hypot(ab_x, ab_y, ab_z);
    }

    /** @returns
        A unit/direction vector from point `this.a` to `this.b`.
    */
    direction(): Vector3 {
        const a = this.a;
        const b = this.b;
        const ab_x = b.x - a.x;
        const ab_y = b.y - a.y;
        const ab_z = b.z - a.z;
        const ab_mag = this.distance();
        const unit_x = ab_x / ab_mag;
        const unit_y = ab_y / ab_mag;
        const unit_z = ab_z / ab_mag;
        return new Vector3(unit_x, unit_y, unit_z);
    }

    /** @returns 
        A Point between `this.a` and `this.b` based on a normalized value
        between 0.0 and 1.0
        ex. norm = 0. --> `return this.a`
            norm = 1. --> `return this.b`
    */
    getNormalizedPoint(norm: number): Point3 {
        const a = this.a;
        const b = this.b;

        if (norm <= 0.) return a;
        if (norm >= 1.) return b;

        const point_distance = this.distance() * norm;
        const unit_vector = this.direction();
        const unit_x = unit_vector[0];
        const unit_y = unit_vector[1];
        const unit_z = unit_vector[2];
        return new Point3(a.x + unit_x * point_distance,
		          a.y + unit_y * point_distance,
                          a.z + unit_z * point_distance);
    }
}
