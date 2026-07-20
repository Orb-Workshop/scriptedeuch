/**
   PathFinding on Grid3D or SubGrid
*/
import Grid3D from "./Grid3D";
import GridType from "./GridType";

export default class PathFinding<T> {
    base_grid: GridType;

    constructor(base_grid) {
	this.base_grid = base_grid;
    }

    getShortestPaths(opts): Grid3D<PathElement> {
	const {
	    x, y, z = 0,
	    costFunction = defaultCostFunction,
	} = opts;
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

	return new PathResult({
	    path_grid,
	    starting_point: [x, y, z],
	});
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
            if (e2.sentinel === null || traversal_cost <= e2.sentinel) {
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

/**
   PathResult object can be used to generate the shortest paths to the
   starting point, which is generated with
   `PathFinding.getShortestPath`.
 */
class PathResult {
    path_grid: Grid3D<PathElement>;
    starting_point: [number, number, number];

    constructor(obj = {}) {
	this.path_grid = obj.path_grid;
	this.starting_point = obj.starting_point;
    }

    getPathTo(x: number, y: number, z: number = 0): Array<PathElement> {
	const [px, py, pz] = this.starting_point;
	const starting_point = this.path_grid.getAt(px, py, pz);
	const ending_point = this.path_grid.getAt(x, y, z);
	let current_point = ending_point;
	let path_listing = [];
	while(true) {
	    path_listing.push(current_point);
	    if (current_point === starting_point) break;
	    if (current_point.parent === null) break;
	    current_point = current_point.parent;
	}
	path_listing.reverse();
	return path_listing;
    }
}

/**
   Default Cost Function.

   Cost is evaluated based on the value of the grid element.

   Notes:

   - Meant to be used for value grids, where the value is the cost.
 */
function defaultCostFunction(ctx: PathFinding, e1: PathElement, e2: PathElement): number {
    const path_grid = e1.path_grid;
    const base_grid = ctx.base_grid;

    const value = base_grid.getAt(e2.x, e2.y, e2.z);
    if (typeof value == "number")
	return value;
    return 1;
}
