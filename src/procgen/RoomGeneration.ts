/**
   Generates rooms in a Grid3D.
*/
import { BBox3 } from "../math";
import { GridLens, SubGrid } from "../grid";
import type { GridType } from "../grid";
import { SeededRandomNumberGenerator } from "../random";


export default class RoomGeneration<T> {
    grid: GridType<T>;
    srng: SeededRandomNumberGenerator;

    placed_rooms: Array<SubGrid> = [];

    constructor(grid: GridType<T>, srng: SeededRandomNumberGenerator) {
	this.grid = grid;
	this.srng = srng;
    }

    generateRoom(opts): SubGrid<T> {
	const {
	    width = 1,
	    height = 1,
	    depth = 1,
	} = opts;
	const max_cycles = 1000;
	let cycle = 0;
	while(cycle < max_cycles) {
	    cycle++;

	    // Create random room with given specification.
	    const x = this.srng.randomInteger(0, this.grid.width-1);
	    const y = this.srng.randomInteger(0, this.grid.height-1);
	    const z = this.srng.randomInteger(0, this.grid.depth-1);

	    // Make sure the room is within the Grid bounds.
	    const grid_box = new BBox3(0, 0, 0,
				       this.grid.width,
				       this.grid.height,
				       this.grid.depth);
	    const room_box = new BBox3(x, y, z,
				       width, height, depth);

	    if (!grid_box.checkInside(room_box))
		continue;

	    // Make sure it doesn't interfere with the other rooms
	    if (this.placed_rooms.find((pr) => room_box.checkIntersection(pr.toBBox3())))
		continue;

	    const room = this.grid.subGrid({
		x, y, z,
		width, height, depth,
	    });

	    this.placed_rooms.push(room);

	    return room;
	}
	return null;
    }
}
