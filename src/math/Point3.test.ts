import { expect, test } from "bun:test";
import Point3 from "./Point3";

test("Point3 Test Init 1", () => {
    const p = new Point3();
    expect(p.x).toBe(0);
    expect(p.y).toBe(0);
    expect(p.z).toBe(0);
    const p2 = new Point3(1, 99, 67);
    expect(p2.x).toBe(1);
    expect(p2.y).toBe(99);
    expect(p2.z).toBe(67);
});
