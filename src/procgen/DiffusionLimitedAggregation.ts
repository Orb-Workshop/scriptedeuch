import { GridLens } from "../grid";
import type { GridType } from "../grid";
import { SeededRandomNumberGenerator } from "../random";

export default class DiffusionLimitedAggregation {
    grid: GridType;
    srng: SeededRandomNumberGenerator;
    constructor(grid, srng, opts = {}) {
	this.grid = grid;
	this.srng = srng;
	this.opts = opts;
    }

    process({cycles: number = 50_000}): void {

    }
}
