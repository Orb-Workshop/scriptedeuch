import { expect, test } from "bun:test";
import LinearEasing from "./LinearEasing";

test("LinearEasing 1", () => {
    let le = new LinearEasing();
    const chk = (from, to) => expect(le.At(from)).toEqual(to);
    
    chk(0.5, 0.5);
    chk(-0.1, 0);
    chk(1.0, 1.0);
    chk(0.75, 0.75);

    le = new LinearEasing(0, 100);
    chk(50, 0.5);
    chk(75, 0.75);
    
    le = new LinearEasing(-100, 0);
    chk(-150, 0.0);
    chk(0, 1.0);

    le = new LinearEasing(-100, 100);
    chk(0, 0.5);

    le = new LinearEasing(100, 0);
    chk(150, 1.0);
    chk(100, 1.0);
    chk(50, 0.5);
    chk(0, 0.0);
    chk(-1.1, 0.0);
});

test("LinearEasing Advanced", () => {
    // from 0 to 1000
    const easeOutCrazyStyle = (value) => {
        if (value <= 100) return 1.0;
        if (value <= 200) return 1.0 - 0.5 * new LinearEasing(100, 200).At(value);
        if (value <= 500) return 0.5 - 0.4 * new LinearEasing(200, 500).At(value);
        else return 0.1 - 0.1 * new LinearEasing(500, 1000).At(value);
    }

    const chk = (from, to) => expect(easeInCrazyStyle(from)).toEqual(to);
    chk(10, 1.0);
    chk(100, 1.0);
    chk(150, 0.75);
    chk(200, 0.5);
    chk(1000, 0.0);
});
