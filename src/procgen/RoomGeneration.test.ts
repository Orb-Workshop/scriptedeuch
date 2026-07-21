import { expect, test } from "bun:test";
import { Grid3D, Display2D } from "../grid";
import { SeededRandomNumberGenerator } from "../random";
import RoomGeneration from "./RoomGeneration";

test("Room Generation Init 1", () => {
    let g = new Grid3D({ width: 10, height: 10, sentinel: 0 });
    let srng = new SeededRandomNumberGenerator("test3");
    let rg = new RoomGeneration(g, srng);
    const room = rg.generateRoom({
	width: 2,
	height: 2,
    });
    room.forEachGlobalIndex((i, j, k) => {
	g.setAt(i, j, k, 1);
    });

    Display2D(g);
});

test("Room Generation Init 2", () => {
    let g = new Grid3D({ width: 16, height: 16, sentinel: 0 });
    let srng = new SeededRandomNumberGenerator("test3");
    let rg = new RoomGeneration(g, srng);

    for (let ii = 1; ii <= 9; ii++) {
	const room = rg.generateRoom({
	    width: 3,
	    height: 2,
	});
	room.forEachGlobalIndex((i, j, k) => {
	    g.setAt(i, j, k, ii);
	});
    }
    Display2D(g);
});
