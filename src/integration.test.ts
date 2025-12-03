import { expect, test } from "bun:test";
import { Vector, QAngle } from "./index.ts";

test("Integration Test 1", () => {
    const v = Vector.create(6, 7, 0);
    const q = QAngle.create(0, 90, 0);

    expect(v.x).toBe(6);
    expect(v.y).toBe(7);
    expect(q.yaw).toBe(90);
});
