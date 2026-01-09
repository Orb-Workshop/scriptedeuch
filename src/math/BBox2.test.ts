import { expect, test } from "bun:test";
import BBox2 from "./BBox2";
import Point2 from "./Point2";

test("BBox2 Init 1", () => {
    let b = new BBox2(0, 0, 1, 1);
    expect(b.center()).toEqual(new Point2(0.5, 0.5));
});
