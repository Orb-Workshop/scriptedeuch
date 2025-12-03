import { expect, test } from "bun:test";
import Vector from "./Vector.ts";

test("Vector.create", () => {
    const v = Vector.create();
    expect(v.x).toBe(0.);
    expect(v.y).toBe(0.);
    expect(v.z).toBe(0.);
});
