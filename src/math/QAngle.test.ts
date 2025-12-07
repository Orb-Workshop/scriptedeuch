import { expect, test } from "bun:test";
import QAngle from "./QAngle.ts";

test("QAngle.create", () => {
    const v = QAngle.create();
    expect(v.pitch).toBe(0.);
    expect(v.yaw).toBe(0.);
    expect(v.roll).toBe(0.);
});
