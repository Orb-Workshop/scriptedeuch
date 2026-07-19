/**
   PathFinding on Grid3D or SubGrid
*/

import { default as Grid3D, SubGrid } from "./Grid3D";

export default class PathFinding<T> {
    private base_grid: Grid3D<T>|SubGrid;

    constructor(base_grid) {
	this.base_grid = base_grid;
    }

    getShortestPath(obj): Grid3D<PathElement> {
	const {
	    x, y, z = 0,
	    costFunction = defaultCostFunction,
	} = obj;
	let path_grid = this.generatePathGrid();
	let starting_node = path_grid.getAt(x, y, z);
        starting_node.sentinel = 0;
        this.calculateCost(path_grid, x, y, z, costFunction);
        let unvisited_nodes = [];
        do {
            unvisited_nodes = path_grid.data.filter((element) => {
                return !element.visited && element.sentinel !== null;
            });
            unvisited_nodes.forEach((element) => this.calculateCost(
                path_grid, element.x, element.y, element.z, costFunction));
        } while (unvisited_nodes.length > 0);
        return path_grid;
    }

    private generatePathGrid(): Grid3D<PathElement> {
        let g = new Grid3D<PathElement>({
            width: this.base_grid.width,
            height: this.base_grid.height,
            depth: this.base_grid.depth,
            sentinel: null,
        });
        g.forEachIndex((i, j, k) => {
            g.setAt(i, j, k, new PathElement({
                path_grid: g,
                x: i,
                y: j,
                z: k,
            }));
        });
        return g;
    }

    private calculateCost(path_grid: Grid3D<PathElement>,
                          x: number,
                          y: number,
                          z: number,
                          costFunction: (PathFinding, PathElement, PathElement) => number,
                         ): void {
        let element = path_grid.getAt(x, y, z);
        element.visited = true;

        const compFunction = (e1: PathElement, e2: PathElement) => {
            if (e2.visited) return;
            let traversal_cost = (e1.sentinel ?? 0) + costFunction(this, e1, e2);
            if (traversal_cost <= (e2.sentinel ?? 0)) {
                e2.sentinel = traversal_cost;
                e2.parent = e1;
            }
        }

        if (element.top() !== null)
            compFunction(element, element.top());
        if (element.bottom() !== null)
            compFunction(element, element.bottom());
        if (element.up() !== null)
            compFunction(element, element.up());
        if (element.right() !== null)
            compFunction(element, element.right());
        if (element.down() !== null)
            compFunction(element, element.down());
        if (element.left() !== null)
            compFunction(element, element.left());
    }
}

class PathElement {
    // path
    parent?: PathElement = null; // Path Lowest Cost Parent
    sentinel?: number = null;
    visited: bool = false;
    // grid location of path element (x, y, z)
    path_grid: Grid3D<PathElement>; // Parent Grid
    x: number;
    y: number;
    z: number;

    constructor(obj = {}) {
        this.path_grid = obj.path_grid;
        this.x = obj.x;
        this.y = obj.y;
        this.z = obj.z;
    }

    top(): PathElement|null {
        if (this.z >= this.path_grid.depth-1) return null;
        return this.path_grid.getAt(this.x, this.y, this.z+1);
    }

    bottom(): PathElement|null {
        if (this.z <= 1) return null;
        return this.path_grid.getAt(this.x, this.y, this.z-1);
    }

    up(): PathElement|null {
        if (this.y >= this.path_grid.height-1) return null;
        return this.path_grid.getAt(this.x, this.y+1, this.z);
    }

    right(): PathElement|null {
        if (this.x >= this.path_grid.width-1) return null;
        return this.path_grid.getAt(this.x+1, this.y, this.z);
    }

    down(): PathElement|null {
        if (this.y <= 1) return null;
        return this.path_grid.getAt(this.x, this.y-1, this.z);
    }

    left(): PathElement|null {
        if (this.x <= 1) return null;
        return this.path_grid.getAt(this.x-1, this.y, this.z);
    }
}

function defaultCostFunction(ctx: PathFinding, e1: PathElement, e2: PathElement): number {
    const path_grid = e1.path_grid;
    const base_grid = ctx.base_grid;

    const value = base_grid.getAt(e2.x, e2.y, e2.z);
    if (typeof value == "number")
	return value;
    return 1;
}
