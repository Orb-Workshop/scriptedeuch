import { expect, test } from "bun:test";
import Voronoi from "./Voronoi.ts";
import Point2 from "./Point2.ts";

test("Voronoi Init 1", () => {
    let v = new Voronoi();
    expect(v.isComputed()).toBe(false);
    v.compute([
        new Point2(200, 200),
        new Point2(400, 400),
    ]);
    expect(v.isComputed()).toBe(true);
    let edges = v.getCompleteEdges();
    expect(edges.length).toBe(1);
    expect(edges[0].edge_segment.midpoint()).toEqual(new Point2(300, 300));
});
