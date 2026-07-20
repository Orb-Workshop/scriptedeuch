import { expect, test } from "bun:test";
import Grid3D from "./Grid3D";
import PathFinding from "./PathFinding";

test("PathFinding Init 1", () => {
    let g = new Grid3D({ width: 10, height: 10 });
    let p = new PathFinding(g);
});

test("PathFinding Shortest Path 1", () => {
    let g = new Grid3D({ width: 10, height: 10, sentinel: 1000 });
    let p = new PathFinding(g);

    let path_result = p.getShortestPaths({x: 0, y: 0});
    expect(path_result).toBeDefined();
});

test("PathFinding Shortest Path 2", () => {
    let g = new Grid3D({ width: 10, height: 10, sentinel: 1 });
    let p = new PathFinding(g);

    let path_result = p.getShortestPaths({x: 0, y: 0});
    expect(path_result).toBeDefined();
    const path = path_result.getPathTo(9, 9);
    expect(path.length).toEqual(19);
    expect(path[0].x).toEqual(0);
    expect(path[0].y).toEqual(0);
    expect(path[0].z).toEqual(0);
    const l_idx = path.length-1;
    expect(path[l_idx].x).toEqual(9);
    expect(path[l_idx].y).toEqual(9);
    expect(path[l_idx].z).toEqual(0);
});

import { SeededRandomNumberGenerator } from "../random";
test("PathFinding Shortest Path w Custom Cost Function", () => {
    const srng = new SeededRandomNumberGenerator("test");
    const costFunction = (p, e1, e2) => {
	const base_grid = p.base_grid;
	const value = base_grid.getAt(e2.x, e2.y, e2.z);
	switch(value) {
	    case "Rock":
		return 1000;
	    case "Foliage":
		return 10;
	    case "Ground":
		return 1;
	    default:
		return 1000;
	}
    };

    // 10 x 10 x 1 of 'Rock' strings
    let g = new Grid3D<string>({width: 10, height: 10, sentinel: "Rock"});
    // Generate random grid set of rocks, foliage, and ground.
    g.forEachIndex((i, j, k) => {
	const v = srng.randomDistribution({
	    Rock: 10,
	    Foliage: 10,
	    Ground: 100,
	});
	g.setAt(i, j, k, v);
    });
    let p = new PathFinding<string>(g);
    let path_result = p.getShortestPaths({x: 0, y: 0, costFunction});
    let path = path_result.getPathTo(9, 9);
    path.forEach((p) => {
	g.setAt(p.x, p.y, p.z, ".Path");
    });

    // Display 2D Grid
    const display2D = () => {
	for (let j = g.height-1; j >= 0; j--) {
	    let line = "";
	    for (let i = 0; i < g.width; i++) {
		line += " ";
		line += g.getAt(i, j)[0];
	    }
	    console.log(line);
	}
    };
    display2D();

});
