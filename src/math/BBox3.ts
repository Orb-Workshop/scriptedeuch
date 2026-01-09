import Point3 from "./Point3";

// Bounding Box 3D
export default class BBox3 {
    x: number;
    y: number;
    z: number;
    // Dimensions
    w: number; // Width  (x)
    h: number; // Height (y)
    d: number; // Depth  (z)
    
    constructor(x: number = 0, y: number = 0, z: number = 0,
                w: number = 0, h: number = 0, d: number = 0,) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        this.h = h;
        this.d = d;
    }

    center(): Point3 {
        return new Point3(this.x+this.h/2.,
		          this.y+this.w/2.,
                          this.z+this.d/2.);
    }

    checkIntersection(bbox: BBox3): boolean {
        // Box A
        let a_min_x = this.x;
        let a_max_x = this.x + this.w;
        let a_min_y = this.y;
        let a_max_y = this.y + this.h;
        let a_min_z = this.z;
        let a_max_z = this.z + this.d;
        
        // Box B
        let b_min_x = bbox.x;
        let b_max_x = bbox.x + bbox.w;
        let b_min_y = bbox.y;
        let b_max_y = bbox.y + bbox.h;
        let b_min_z = bbox.z;
        let b_max_z = bbox.z + bbox.d;
        
        return !(a_max_x <= b_min_x ||
            a_min_x >= b_max_x ||
            a_max_y <= b_min_y ||
            a_min_y >= b_max_y ||
            a_max_z <= b_min_z ||
            a_min_z >= b_max_z);
    }

    checkInside(ibbox: BBox3): boolean {
        let inner_box: BBox3 = ibbox;
        let outer_box: BBox3 = this;

        if (inner_box.x >= outer_box.x &&
            inner_box.y >= outer_box.y &&
            inner_box.z >= outer_box.z &&
            (inner_box.x + inner_box.w) <= (outer_box.x + outer_box.w) &&
            (inner_box.y + inner_box.h) <= (outer_box.y + outer_box.h) &&
            (inner_box.z + inner_box.d) <= (outer_box.z + outer_box.d))
            return true;
        return false;
    }

    // Returns a new BBox3 expanded by xw*2 units on the x-axis and by
    // yh*2 units on the y-axis around the center;
    expand(xw: number, yh?: number, zd?: number): BBox3 {
        yh = yh ?? xw;
        zd = zd ?? xw;
        let x = this.x - xw;
        let y = this.y - yh;
        let z = this.z - zd;
        let w = this.w + xw * 2;
        let h = this.h + yh * 2;
        let d = this.d + zd * 2;
        return new BBox3(x, y, z, w, h, d);
    }

    // Returns a new BBox3 contracted by xw*2 units on the x-axis and by
    // yh*2 units on the y-axis around the center of the BBox.
    contract(xw: number, yh?: number, zd?: number): BBox3 {
        yh = yh ?? xw;
        zd = zd ?? xw;
        let x = this.x + xw;
        let y = this.y + yh;
        let z = this.z + zd;
        let w = this.w - xw * 2;
        let h = this.h - yh * 2;
        let d = this.d - zd * 2;
        return new BBox3(x, y, z, w, h, d);
    }

    // Return new BBox3 translated by (x, y) units.
    translate(x: number, y: number, z: number): BBox3 {
        x = this.x + x;
        y = this.y + y;
        z = this.z + z;
        let w = this.w;
        let h = this.h;
        let d = this.d;
        return new BBox3(x, y, z, w, h, d);
    }
    
    // Extend the top, right, bottom, left of the BBox3
    extendLeft(amt: number): BBox3 {
        let x = this.x - amt;
        let y = this.y;
        let z = this.z;
        let w = this.w + amt;
        let h = this.h;
        let d = this.d;
        return new BBox3(x, y, z, w, h, d);
    }

    extendRight(amt: number): BBox3 {
        let x = this.x;
        let y = this.y;
        let z = this.z;
        let w = this.w + amt;
        let h = this.h;
        let d = this.d;
        return new BBox3(x, y, z, w, h, d);
    }

    extendUp(amt: number): BBox3 {
        let x = this.x;
        let y = this.y - amt;
        let z = this.z;
        let w = this.w;
        let h = this.h + amt;
        let d = this.d;
        return new BBox3(x, y, z, w, h, d);
    }

    extendDown(amt: number): BBox3 {
        let x = this.x;
        let y = this.y;
        let z = this.z;
        let w = this.w;
        let h = this.h + amt;
        let d = this.d;
        return new BBox3(x, y, z, w, h, d);
    }

    extendTop(amt: number): BBox3 {
        let x = this.x;
        let y = this.y;
        let z = this.z;
        let w = this.w;
        let h = this.h;
        let d = this.d + amt;
        return new BBox3(x, y, z, w, h, d);
    }

    extendBottom(amt: number): BBox3 {
        let x = this.x;
        let y = this.y;
        let z = this.z;
        let w = this.w;
        let h = this.h;
        let d = this.d - amt;
        return new BBox3(x, y, z, w, h, d);
    }
}
