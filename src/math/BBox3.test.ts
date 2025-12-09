import { expect, test } from "bun:test";
import BBox3 from "./BBox3.ts";
import Point3 from "./Point3.ts";

test("BBox3 Init 1", () => {
    let b = new BBox3(0, 0, 0, 1, 1, 1);
    expect(b.center()).toEqual(new Point3(0.5, 0.5, 0.5));
});
