import { expect, test } from "bun:test";
import Point2 from "./Point2.ts";

test("Point2 Test Init 1", () => {
    const p = new Point2();
    expect(p.x).toBe(0);
    expect(p.y).toBe(0);
    const p2 = new Point2(1, 99);
    expect(p2.x).toBe(1);
    expect(p2.y).toBe(99);
});
