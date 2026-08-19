import { expect, test } from "bun:test";
import { UniqueGen, range } from "./index";

test("UniqueGen Test", () => {
    const g = UniqueGen("Test-");
    const gen = UniqueGen("Test-");

    const unique0 = gen();
    expect(unique0).toBe("Test-0");
    const unique1 = gen();
    expect(unique1).toBe("Test-1");
});

test("range() Function", () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(range(4, 2)).toEqual([4, 3, 2]);
    expect(range(1, 1)).toEqual([1]);
});
