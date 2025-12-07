import { expect, test } from "bun:test";
import LineSegment2 from "./LineSegment2.ts";
import Point2 from "./Point2.ts";

test("LineSegment2 Init 1", () => {
    const p1 = new Point2(0, 0);
    const p2 = new Point2(3, 4);
    const l = new LineSegment2(p1, p2);
    expect(l.distance()).toBe(5);
    expect(l.direction()).toEqual([0.6, 0.8]);
});
