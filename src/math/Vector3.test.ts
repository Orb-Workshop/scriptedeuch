import { expect, test } from "bun:test";
import Vector3 from "./Vector3";

test("Vector3.Create", () => {
    const v = Vector3.Create();
    expect(v.x).toBe(0.);
    expect(v.y).toBe(0.);
    expect(v.z).toBe(0.);
});
