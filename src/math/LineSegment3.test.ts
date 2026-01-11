import { expect, test } from "bun:test";
import LineSegment3 from "./LineSegment3";
import Point3 from "./Point3";
import Vector3 from "./Vector3";

test("LineSegment3 Init 1", () => {
    const p1 = new Point3(0, 0, 0);
    const p2 = new Point3(3, 4, 0);
    const l = new LineSegment3(p1, p2);
    expect(l.distance()).toBe(5);
    expect(l.direction()).toEqual(new Vector3(0.6, 0.8, 0));
});
