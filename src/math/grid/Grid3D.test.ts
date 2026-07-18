import { expect, test } from "bun:test";
import Grid3D from "./Grid3D";

test("Grid3D Init 1", () => {
    let g = new Grid3D();
    expect(g.width).toEqual(1);
    expect(g.height).toEqual(1);
    expect(g.depth).toEqual(1);
    expect(g.data.length).toEqual(1);
    expect(g.getAt(0,0,0)).toEqual(null);
});

test("Grid3D Init 2", () => {
    let g = new Grid3D({
	width: 10,
	height: 10,
	depth: 10,
	sentinel: 0,
    });

    expect(g.width).toEqual(10);
    expect(g.height).toEqual(10);
    expect(g.depth).toEqual(10);
    expect(g.data.length).toEqual(g.size());
    expect(g.getAt(0,0,0)).toEqual(0);
    expect(g.getAt(9,9,9)).toEqual(0);
});

test("Grid3D Init 3", () => {

});
