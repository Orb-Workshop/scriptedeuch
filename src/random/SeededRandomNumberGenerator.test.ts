import { expect, test } from "bun:test";
import SeededRandomNumberGenerator from "./SeededRandomNumberGenerator.ts";

test("SeededRandomNumberGenerator.randomDistribution 1", () => {
    let srng = new SeededRandomNumberGenerator("test");
    let dist = {
	Heads: 1,
	Tails: 1,
    };
    let gen = () => srng.randomDistribution(dist);
    expect(gen()).toBe("Tails");
    expect(gen()).toBe("Tails");
    expect(gen()).toBe("Heads");
    expect(gen()).toBe("Tails");
    expect(gen()).toBe("Tails");
    expect(gen()).toBe("Heads");
    expect(gen()).toBe("Heads");
    expect(gen()).toBe("Heads");
    expect(gen()).toBe("Tails");
});

test("SeededRandomNumberGenerator.randomDistribution 2", () => {
    let srng = new SeededRandomNumberGenerator("test");
    let dist = {
	Heads: 0,
	Tails: 1,
    };
    let gen = () => srng.randomDistribution(dist);
    expect(gen()).toBe("Tails");
    expect(gen()).toBe("Tails");
    expect(gen()).toBe("Tails");
    expect(gen()).toBe("Tails");
    expect(gen()).toBe("Tails");
    expect(gen()).toBe("Tails");
    expect(gen()).toBe("Tails");
    expect(gen()).toBe("Tails");
    expect(gen()).toBe("Tails");
});

test("SeededRandomNumberGenerator.randomChance 1", () => {
    let srng = new SeededRandomNumberGenerator("test");
    let coinFlip = () => srng.randomChance(0.5);
    let quarter = () => coinFlip() && coinFlip();
    let deca = () => srng.randomChance(0.1);

    expect(coinFlip()).toBe(false);
    expect(quarter()).toBe(false);
    expect(quarter()).toBe(false);
    expect(quarter()).toBe(false);
    expect(quarter()).toBe(true);
    expect(deca()).toBe(true);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(false);
    expect(deca()).toBe(true);
    expect(deca()).toBe(false);
});

test("SeededRandomNumberGenerator.randomFloat 1", () => {
    let srng = new SeededRandomNumberGenerator("test");
    expect(srng.randomFloat(0, 1)).toBeCloseTo(0.7366299938876182);
    expect(srng.randomFloat(-10, 10)).toBeCloseTo(3.311148);
    expect(srng.randomFloat(-10, 10)).toBeCloseTo(-3.55);
    expect(srng.randomFloat(100)).toBeCloseTo(79.767);
});

test("SeededRandomNumberGenerator.randomInteger 1", () => {
    let srng = new SeededRandomNumberGenerator("test");
    expect(srng.randomInteger(100)).toBe(74);
    expect(srng.randomInteger(-100, 100)).toBe(33);
    expect(srng.randomInteger(-100, 100)).toBe(-36);
    expect(srng.randomInteger(1)).toBe(1);
    expect(srng.randomInteger(1)).toBe(1);
    expect(srng.randomInteger(1)).toBe(0);
    expect(srng.randomInteger(1)).toBe(0);
    expect(srng.randomInteger(2)).toBe(0);
    expect(srng.randomInteger(2)).toBe(1);
    expect(srng.randomInteger(2)).toBe(0);
    expect(srng.randomInteger(2)).toBe(0);
    expect(srng.randomInteger(2)).toBe(1);
    expect(srng.randomInteger(2)).toBe(2);
    expect(srng.randomInteger(2)).toBe(1);
    expect(srng.randomInteger(2)).toBe(2);
});

test("SeededRandomNumberGenerator.randomChoice 1", () => {
    let srng = new SeededRandomNumberGenerator("test");
    let a = [1, 2, 3, 4];
    expect(srng.randomChoice(a)).toBe(3);
    expect(srng.randomChoice(a)).toBe(3);
    expect(srng.randomChoice(a)).toBe(2);
    expect(srng.randomChoice(a)).toBe(3);
    expect(srng.randomChoice(a)).toBe(3);
    expect(srng.randomChoice(a)).toBe(2);
    expect(srng.randomChoice(a)).toBe(1);
    expect(srng.randomChoice(a)).toBe(1);
    expect(srng.randomChoice(a)).toBe(3);
    expect(srng.randomChoice(a)).toBe(2);
    expect(srng.randomChoice(a)).toBe(2);
    expect(srng.randomChoice(a)).toBe(3);
    expect(srng.randomChoice(a)).toBe(4);
    expect(srng.randomChoice(a)).toBe(2);
});

test("SeededRandomNumberGenerator.randomChoice 2", () => {
    let srng = new SeededRandomNumberGenerator("test");
    let a = [1, 2, 3, 4];
    expect(srng.randomChoice(a, true)).toBe(3);
    expect(srng.randomChoice(a, true)).toBe(2);
    expect(srng.randomChoice(a, true)).toBe(1);
    expect(srng.randomChoice(a, true)).toBe(4);
    expect(srng.randomChoice(a, true)).toBe(null);
});

test("SeededRandomNumberGenerator.randomCombination 1", () => {
    let srng = new SeededRandomNumberGenerator("test");
    let a = [1, 2, 3, 4];
    expect(srng.randomCombination(a, 2)).toEqual([3, 2]);
    expect(srng.randomCombination(a, 2)).toEqual([2, 4]);
});

test("SeededRandomNumberGenerator.randomShuffle 1", () => {
    let srng = new SeededRandomNumberGenerator("test");
    let a = [1, 2, 3, 4];
    expect(srng.randomShuffle(a)).toEqual([2,1,3,4]);
});
