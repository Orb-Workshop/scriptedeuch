import { expect, test } from "bun:test";
import { Math } from "./index.ts";

test("Integration Test 1", () => {
    const v = Math.Vector3.Create(6, 7, 0);
    const q = Math.QAngle.Create(0, 90, 0);

    expect(v.x).toBe(6);
    expect(v.y).toBe(7);
    expect(q.yaw).toBe(90);
});
