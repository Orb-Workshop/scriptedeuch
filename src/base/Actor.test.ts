import { expect, test } from "bun:test";
import { default as Actor } from "./Actor.ts";

test("Actor Creation", () => {
    const a = new Actor();
});
