import { expect, test } from "bun:test";
import QAngle from "./QAngle";

test("QAngle.Create", () => {
    const v = QAngle.Create();
    expect(v.pitch).toBe(0.);
    expect(v.yaw).toBe(0.);
    expect(v.roll).toBe(0.);
});

