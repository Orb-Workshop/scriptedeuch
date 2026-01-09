import { expect, test } from "bun:test";
import SimplexNoise from "./SimplexNoise";

test("SimplexNoise Init 1", () => {
    let n1 = SimplexNoise.noise(0, 0);
    expect(n1).toBe(0);
    expect(SimplexNoise.noise(0.1, 0.1)).toBeCloseTo(-0.37171);
});
