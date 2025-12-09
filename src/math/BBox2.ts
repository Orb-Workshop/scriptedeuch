import Point2 from "./Point2.ts";

// Bounding Box 2D
export default class BBox2 {
    x: number;
    y: number;
    w: number;
    h: number;
    
    constructor(x: number = 0, y: number = 0, w: number = 0, h: number = 0) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    center(): Point2 {
        return new Point2(this.x+this.h/2.,
		          this.y+this.w/2.);
    }

    checkIntersection(bbox: BBox2): boolean {
        // Box A
        let a_min_x = this.x;
        let a_max_x = this.x + this.w;
        let a_min_y = this.y;
        let a_max_y = this.y + this.h;

        // Box B
        let b_min_x = bbox.x;
        let b_max_x = bbox.x + bbox.w;
        let b_min_y = bbox.y;
        let b_max_y = bbox.y + bbox.h;

        return !(a_max_x <= b_min_x || a_min_x >= b_max_x ||
	    a_max_y <= b_min_y || a_min_y >= b_max_y);
    }

    checkInside(ibbox: BBox2): boolean {
        let inner_box = ibbox;
        let outer_box = this;

        if (inner_box.x >= outer_box.x &&
            inner_box.y >= outer_box.y &&
            (inner_box.x + inner_box.w) <= (outer_box.x + outer_box.w) &&
            (inner_box.y + inner_box.h) <= (outer_box.y + outer_box.h))
            return true;
        return false;
    }

    // Returns a new BBox2 expanded by xw*2 units on the x-axis and by
    // yh*2 units on the y-axis around the center;
    expand(xw: number, yh?: number): BBox2 {
        yh = yh ?? xw;
        let x = this.x - xw;
        let y = this.y - yh;
        let w = this.w + xw * 2;
        let h = this.h + yh * 2;
        return new BBox2(x, y, w, h);
    }

    // Returns a new BBox2 contracted by xw*2 units on the x-axis and by
    // yh*2 units on the y-axis around the center of the BBox.
    contract(xw: number, yh?: number): BBox2 {
        yh = yz ?? xw;
        let x = this.x + xw;
        let y = this.y + yh;
        let w = this.w - xw * 2;
        let h = this.h - yh * 2;
        return new BBox2(x, y, w, h);
    }

    // Return new BBox2 translated by (x, y) units.
    translate(x: number, y: number): BBox2 {
        x = this.x + x;
        y = this.y + y;
        let w = this.w;
        let h = this.h;
        return new BBox2(x, y, w, h);
    }
    
    // Extend the top, right, bottom, left of the BBox2
    extendLeft(amt: number): BBox2 {
        let x = this.x - amt;
        let y = this.y;
        let w = this.w + amt;
        let h = this.h;
        return new BBox2(x, y, w, h);
    }

    extendRight(amt: number): BBox2 {
        let x = this.x;
        let y = this.y;
        let w = this.w + amt;
        let h = this.h;
        return new BBox2(x, y, w, h);
    }

    extendUp(amt: number): BBox2 {
        let x = this.x;
        let y = this.y - amt;
        let w = this.w;
        let h = this.h + amt;
        return new BBox2(x, y, w, h);
    }

    extendDown(amt: number): BBox2 {
        let x = this.x;
        let y = this.y;
        let w = this.w;
        let h = this.h + amt;
        return new BBox2(x, y, w, h);
    }
}
