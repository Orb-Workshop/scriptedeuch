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

    let path_result = p.getShortestPath({x: 0, y: 0});
    expect(path_result).toBeDefined();
});
