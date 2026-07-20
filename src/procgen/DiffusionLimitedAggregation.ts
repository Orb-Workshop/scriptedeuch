import { GridType, GridLens } from "../math/grid";
import { SeededRandomNumberGenerator } from "../random";

interface Options {
    cycles: number;
    max_aggregate: number;
    fill_type: any;
    filter_whitelist: Array<any>;
    seed_point: GridLens;
}

export class DiffusionLimitedAggregation {
    grid: GridType;
    srng: SeededRandomNumberGenerator;
    constructor(grid, srng, opts = {}) {
	this.grid = grid;
	this.srng = srng;
	this.opts = opts;
    }
}
