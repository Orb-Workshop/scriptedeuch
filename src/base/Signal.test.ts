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

test("Signal Compute 0", () => {
    const count = Signal.Create(0);
    const inc = () => count.set(count.get() + 1);
    const isEven = Signal.Computed(() => {
        return (count.get() % 2) == 0;
    });
    expect(isEven.get()).toBe(true);
    inc();
    expect(isEven.get()).toBe(false);
});

test("Signal Glitch Test 0", () => {
    const a = Signal.Create(0);
    const b = Signal.Create(0);
    
    const add_result = Signal.Computed(() => {
        return a.get() + b.get();
    });

    let sum = 0;
    Signal.Effect(() => {
        sum += add_result.get();
    });
    
    expect(add_result.get()).toBe(0);
    a.set(2);
    expect(add_result.get()).toBe(2);
    expect(sum).toBe(2);
    b.set(2);
    expect(add_result.get()).toBe(4);
    expect(sum).toBe(6);
    a.set(4);
    b.set(10);
    expect(sum).toBe(26);
    expect(add_result.get()).toBe(14);
});
