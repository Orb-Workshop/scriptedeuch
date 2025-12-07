import { expect, test } from "bun:test";
import Vector3 from "./Vector3.ts";

test("Vector3.create", () => {
    const v = Vector3.create();
    expect(v.x).toBe(0.);
    expect(v.y).toBe(0.);
    expect(v.z).toBe(0.);
});
