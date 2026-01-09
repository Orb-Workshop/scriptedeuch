import { expect, test } from "bun:test";
import Vector2 from "./Vector2";

test("Vector2.create", () => {
    const v = Vector2.Create();
    expect(v.x).toBe(0.);
    expect(v.y).toBe(0.);
});
