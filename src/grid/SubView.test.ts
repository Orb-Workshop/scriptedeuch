import { expect, test } from "bun:test";
import SubView from "./SubView";
import Grid3D from "./Grid3D";
import { SeededRandomNumberGenerator } from "../random";
import { Display2D } from "./utils";

test("SubView Init 1", () => {
    let g = new Grid3D({ width: 50, height: 50, sentinel: 0 });
    let srng = new SeededRandomNumberGenerator("test");
    let sv = g.subView();

    let sg = g.subGrid({
	x: srng.randomInteger(1, 25),
	y: srng.randomInteger(1, 25),
	width: srng.randomInteger(4, 14),
	height: srng.randomInteger(4, 14),
    });

    sv.insertGrid(sg);
    sv.forEachElement(e => e.set(1));
    Display2D(g);
});

test("SubView Init 2", () => {
    let g = new Grid3D({ width: 50, height: 50, sentinel: 0 });
    let srng = new SeededRandomNumberGenerator();
    let sv = g.subView();
    const MAX_CYCLES = 1000;
    const MAX_NUM_UNIONS = 16;
    let num_unions = 0;
    let sg_listing = [];
    for (let cycle = 0; cycle < MAX_CYCLES; cycle++) {
	if (num_unions >= MAX_NUM_UNIONS) break;
	const dimensions = {
	    x: srng.randomInteger(1, 25),
	    y: srng.randomInteger(1, 25),
	    width: srng.randomInteger(3, 24),
	    height: srng.randomInteger(3, 24),
	};
	if (dimensions.x + dimensions.width > g.width) continue;
	if (dimensions.y + dimensions.height > g.height) continue;
	const sg = g.subGrid(dimensions);
	if (sg_listing.length == 0 ||
	    sg_listing.find((e) => e.toBBox3().checkIntersection(sg.toBBox3()))) {
	    num_unions += 1;
	    sg_listing.push(sg);
	}
    }
    sg_listing.forEach((e) => sv.insertGrid(e));
    sv.forEachElement((e) => {
	e.set(".");
    });
    Display2D(g);
});

test("SubView Init 3D", () => {
    let g = new Grid3D({ width: 50, height: 50, depth: 10, sentinel: 0 });
    let srng = new SeededRandomNumberGenerator();
    let sv = g.subView();
    const MAX_CYCLES = 1000;
    const MAX_NUM_UNIONS = 16;
    let num_unions = 0;
    let sg_listing = [];
    for (let cycle = 0; cycle < MAX_CYCLES; cycle++) {
	if (num_unions >= MAX_NUM_UNIONS) break;
	const dimensions = {
	    x: srng.randomInteger(1, 25),
	    y: srng.randomInteger(1, 25),
	    z: srng.randomInteger(1, 5),
	    width: srng.randomInteger(3, 24),
	    height: srng.randomInteger(3, 24),
	    depth: srng.randomInteger(3, 9),
	};
	if (dimensions.x + dimensions.width > g.width) continue;
	if (dimensions.y + dimensions.height > g.height) continue;
	if (dimensions.z + dimensions.depth > g.depth) continue;
	const sg = g.subGrid(dimensions);
	if (sg_listing.length == 0 ||
	    sg_listing.find((e) => e.toBBox3().checkIntersection(sg.toBBox3()))) {
	    num_unions += 1;
	    sg_listing.push(sg);
	}
    }
    sg_listing.forEach((e) => sv.insertGrid(e));
    sv.forEachElement((e) => {
	e.set(".");
    });
    Display2D(g);
});

test("SubView setting and getting", () => {
    let g = new Grid3D({ width: 3, height: 3, sentinel: 0 });
    let sv = g.subView();
    g.forEachIndex((i, j, k) => {
	const l = g.lens(i, j, k);
	if (j == 0) {
	    sv.set(l);
	}
    });
    sv.forEachElement(e => e.set("."));
    Display2D(g);
    expect(g.getAt(0, 0)).toEqual(".");
    expect(g.getAt(1, 0)).toEqual(".");
    expect(g.getAt(0, 1)).toEqual(0);
});

test("SubView insertGrid", () => {
    let g = new Grid3D({ width: 12, height: 10, sentinel: 0 });
    let sv = g.subView();
    sv.insertGrid(g.subGrid({ width: 6, height: 5 }));
    sv.forEachElement(e => e.set("."));
    Display2D(g);
    expect(g.getAt(0, 0)).toEqual(".");
    expect(g.getAt(5, 4)).toEqual(".");
});

test("SubView centerPoint 1", () => {
    let g = new Grid3D({ width: 12, height: 10, sentinel: 0 });
    let sv = g.subView();
    sv.insertGrid(g.subGrid({ width: 6, height: 5 }));
    const cp = sv.centerPoint();
    expect(cp.x).toEqual(2);
    expect(cp.y).toEqual(2);
    expect(cp.z).toEqual(0);
});

test("SubView centerPoint 2", () => {
    let g = new Grid3D({ width: 12, height: 10, sentinel: 0 });
    let sv = g.subView();
    sv.insertGrid(g.subGrid({ width: 6, height: 5, x: 2, y: 2 }));
    const cp = sv.centerPoint();
    expect(cp.x).toEqual(4);
    expect(cp.y).toEqual(4);
    expect(cp.z).toEqual(0);
});
