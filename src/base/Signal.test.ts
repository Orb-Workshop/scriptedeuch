import { expect, test } from "bun:test";
import Signal from "./Signal";

test("Signal Creation 0", () => {
    const s = new Signal(0);
    expect(s.get()).toBe(0);
});

test("Signal Creation 1", () => {
    const s = new Signal();
    expect(s.get()).toBe(false);

    const s2 = Signal.Create();
    expect(s2.get()).toBe(false);
});

test("Signal Creation 2", () => {
    const s = new Signal();
    s.set(true);
    expect(s.get()).toBe(true);

    const s2 = Signal.Create();
    s2.set(true);
    expect(s2.get()).toBe(true);
});

test("Signal Effect 0", () => {
    const s = Signal.Create(0);
    const inc = () => s.set(s.get()+1);
    let count = 0;
    Signal.Effect(() => {
        count = s.get();
    });
    expect(s.get()).toBe(count);
    inc();
    expect(s.get()).toBe(count);
    inc(); inc();
    expect(s.get()).toBe(count);
});
