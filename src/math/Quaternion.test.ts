import { expect, test } from "bun:test";
import Quaternion from "./Quaternion";

test("Quaternion.Create", () => {
    const q = Quaternion.Create();
    expect(q.w).toBe(1.);
    expect(q.x).toBe(0.);
    expect(q.y).toBe(0.);
    expect(q.z).toBe(0.);
});

test("Quaternion Arithmetic 1", () => {
    const q1 = Quaternion.Create(1, 2, 3, 4);
    const q2 = Quaternion.Create(-1, -2, -3, -4);

    const q1_scaled = q1.scale(2);
    expect(q1_scaled.w).toBe(2);
    expect(q1_scaled.x).toBe(4);
    expect(q1_scaled.y).toBe(6);
    expect(q1_scaled.z).toBe(8);

    const q1_add_q2 = q1.add(q2);
    expect(q1_add_q2.w).toBe(0);
    expect(q1_add_q2.x).toBe(0);
    expect(q1_add_q2.y).toBe(0);
    expect(q1_add_q2.z).toBe(0);

    const q1_sub_q2 = q1.sub(q2);
    expect(q1_sub_q2.w).toBe(2);
    expect(q1_sub_q2.x).toBe(4);
    expect(q1_sub_q2.y).toBe(6);
    expect(q1_sub_q2.z).toBe(8);

    const q1_dot_q2 = q1.dot(q2);
    expect(q1_dot_q2).toBe(-30);

    const q1_mag = q1.magnitude();
    expect(q1_mag).toBeCloseTo(5.477);

    const q2_mag = q2.magnitude();
    expect(q2_mag).toBeCloseTo(5.477);

    const q1_norm = q1.normal();
    expect(q1_norm.magnitude()).toBeCloseTo(1.0);

    const q2_norm = q2.normal();
    expect(q2_norm.magnitude()).toBeCloseTo(1.0);
    
});

test("Quaternion Operations 1", () => {
    
});
