import Point3 from "./Point3";

export default class LineSegment3 {
    a: Point3;
    b: Point3;
    
    constructor(point_a: Point3, point_b: Point3) {
        this.a = point_a;
        this.b = point_b;
    }

    midpoint(): Point3 {
        let m_x = (this.a.x + this.b.x) / 2;
        let m_y = (this.a.y + this.b.y) / 2;
        return new Point3(m_x, m_y);
    }

    distance(): number {
        let a = this.a;
        let b = this.b;
        let ab_x = b.x - a.x;
        let ab_y = b.y - a.y;
        let ab_z = b.z - a.z;
        return Math.hypot(ab_x, ab_y, ab_z);
    }

    // Returns a unit/direction vector from point 'a' to 'b'
    // TODO: return a Vector3
    direction(): [number, number, number] {
        let a = this.a;
        let b = this.b;
        let ab_x = b.x - a.x;
        let ab_y = b.y - a.y;
        let ab_z = b.z - a.z;
        let ab_mag = this.distance();
        let unit_x = ab_x / ab_mag;
        let unit_y = ab_y / ab_mag;
        let unit_z = ab_z / ab_mag;
        return [unit_x, unit_y, unit_z];
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
        let unit_z = unit_vector[2];
        return new Point3(a.x + unit_x * point_distance,
		          a.y + unit_y * point_distance,
                          a.z + unit_z * point_distance);
    }
}
