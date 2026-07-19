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
    const pv1 = path_result.path_grid.getAt(5,5);
    //console.log(pv1);
    expect(path[0].x).toEqual(0);
    expect(path[0].y).toEqual(0);
    expect(path[0].z).toEqual(0);
});
