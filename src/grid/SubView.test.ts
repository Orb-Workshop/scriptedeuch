import { expect, test } from "bun:test";
import SubView from "./SubView";
import Grid3D from "./Grid3D";

test("SubView Init 1", () => {
    let g = new Grid3D({ width: 100, height: 100, sentinel: 0 });
    let sv = g.subView();
});
