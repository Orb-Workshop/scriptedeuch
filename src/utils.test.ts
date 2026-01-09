import { expect, test } from "bun:test";
import { UniqueGen } from "./utils.ts";

test("UniqueGen Test", () => {
    const g = UniqueGen("Test-");
    const gen = UniqueGen("Test-");
    
    const unique0 = gen();
    expect(unique0).toBe("Test-0");
    const unique1 = gen();
    expect(unique1).toBe("Test-1");
});
