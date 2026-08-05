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

test("Grid3D Set and Get", () => {
    let g = new Grid3D({
	width: 10, height: 10, sentinel: 0,
    });

    expect(g.width).toEqual(10);
    expect(g.height).toEqual(10);
    expect(g.depth).toEqual(1);
    expect(g.getAt(0,0)).toEqual(0);

    g.setAt(0, 0, 0, 1);
    g.setAt(1, 0, 0, 2);
    expect(g.getAt(0, 0)).toEqual(1);
    expect(g.getAt(1, 0)).toEqual(2);
});

test("Grid3D Has", () => {
    let g = new Grid3D({
	width: 10, height: 10, sentinel: 0,
    });

    expect(g.width).toEqual(10);
    expect(g.height).toEqual(10);
    expect(g.depth).toEqual(1);
    expect(g.getAt(0,0)).toEqual(0);

    g.setAt(0, 0, 0, 1);
    g.setAt(1, 0, 0, 2);
    expect(g.getAt(0, 0)).toEqual(1);
    expect(g.getAt(1, 0)).toEqual(2);

    expect(g.hasAt(-1, 0)).toEqual(false);
    expect(g.hasAt(11, 0)).toEqual(false);

    expect(g.hasAt(1, 0)).toEqual(true);
    expect(g.hasAt(5, 0)).toEqual(true);
});

test("Grid3D SubGrid", () => {
    let g = new Grid3D({
	width: 10, height: 10, sentinel: 0,
    });
    g.forEachIndex((i, j, k) => {
	g.setAt(i, j, k, g.index(i, j, k));
    });

    let sg = g.subGrid({
	x: 0, y: 0, z: 0,
	width: 10, height: 10,
    });

    expect(sg.width).toEqual(10);
    expect(sg.height).toEqual(10);
    expect(sg.depth).toEqual(1);

    expect(sg.getAt(5, 5)).toEqual(g.getAt(5, 5));

    let sg2 = g.subGrid({
	x: 5, y: 5, z: 0,
	width: 5, height: 5,
    });

    expect(sg2.getAt(0, 0)).toEqual(g.getAt(5, 5));
});

test("Grid3D Lens", () => {
    let g = new Grid3D({
	width: 10, height: 10, sentinel: 0,
    });
    g.forEachIndex((i, j, k) => {
	g.setAt(i, j, k, g.index(i, j, k));
    });

    let l = g.lens(0, 0);
    expect(l.get()).toEqual(g.index(0, 0));
    expect(l.left()).toEqual(null);
    expect(l.top()).toEqual(null);
    expect(l.bottom()).toEqual(null);
    expect(l.down()).toEqual(null);
    expect(l.up()?.get()).toEqual(g.index(0, 1));
    expect(l.right()?.get()).toEqual(g.index(1, 0));

    let sg = g.subGrid({
	x: 5, y: 5, z: 0,
	width: 5, height: 5,
    });

    let l2 = sg.lens(0, 0);
    expect(l2.get()).toEqual(g.index(5, 5));
    expect(l2.left()).toEqual(null);
    expect(l2.top()).toEqual(null);
    expect(l2.bottom()).toEqual(null);
    expect(l2.down()).toEqual(null);
    expect(l2.up()?.get()).toEqual(g.index(5, 6));
    expect(l2.right()?.get()).toEqual(g.index(6, 5));
});

test("Grid3D lensFromIndex", () => {
    let g = new Grid3D({
	width: 5, height: 6, depth: 7, sentinel: 0,
    });

    g.forEachIndex((i, j, k) => {
	g.setAt(i, j, k, g.index(i, j, k));
    });

    g.forEachIndex((i, j, k) => {
	expect(g.lensFromIndex(g.index(i, j, k)).get(), g.index(i, j, k));
    });
});
