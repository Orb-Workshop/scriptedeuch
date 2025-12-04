import { expect, test } from "bun:test";
import RandomChoiceGenerator from "./RandomChoiceGenerator.ts";

test("RandomChoiceGenerator 1", () => {
    let rcg = RandomChoiceGenerator([1, 2, 3, 4]);
    expect([rcg.next().value,
	    rcg.next().value,
	    rcg.next().value,
	    rcg.next().value].sort()).toEqual([1, 2, 3, 4]);
    expect([rcg.next().value,
	    rcg.next().value,
	    rcg.next().value,
	    rcg.next().value,
	    rcg.next().value,
	    rcg.next().value,
	    rcg.next().value,
	    rcg.next().value].sort()).toEqual([1, 1, 2, 2, 3, 3, 4, 4]);
});
