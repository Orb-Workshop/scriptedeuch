import type { GridLens } from "../grid";
import type { GridType } from "../grid";
import { SeededRandomNumberGenerator } from "../random";

const DEFAULT_CYCLES: number = 50_000;
const DEFAULT_MAX_AGGREGATES: number = 6;

export default class DiffusionLimitedAggregation<T = number> {
    grid: GridType<T>;
    srng: SeededRandomNumberGenerator;

    // Options
    cycles: number = DEFAULT_CYCLES;
    max_aggregates: number = DEFAULT_MAX_AGGREGATES;
    fill_value: T = null;
    filter_whitelist: Array<T> = [ 0 ];
    seed_point: GridLens<T> = null;
    //

    current_aggregates: Array<GridLens<T>> = [];
    particle: GridLens<T> = null;

    constructor(grid: GridType, srng: SeededRandomNumberGenerator) {
	this.grid = grid;
	this.srng = srng;
    }

    process(opts): void {
	let {
	    cycles = DEFAULT_CYCLES,
	    max_aggregates = DEFAULT_MAX_AGGREGATES,
	    fill_value = null,
	    filter_whitelist = [ 0 ],
	    seed_point = null,
	} = opts;
	this.cycles = cycles;
	this.max_aggregates = max_aggregates;
	this.fill_value = fill_value;
	this.filter_whitelist = filter_whitelist;

	this.seed_point = seed_point ?? this.generateParticle();
	this.current_aggregates = [ this.seed_point ];
	let bMaxAggregates = false;
	for (let i = 0; i < this.cycles; i++) {
	    bMaxAggregates = this.iterateCycle();
	    if (bMaxAggregates) {
		console.log("Max");
		break;
	    }
	}

	this.current_aggregates.forEach((a) => a.set(fill_value));
    }

    private generateParticle(opts): GridLens<T> {
	while(true) {
	    const x = this.srng.randomInteger(0, this.grid.width-1);
	    const y = this.srng.randomInteger(0, this.grid.height-1);
	    const z = this.srng.randomInteger(0, this.grid.depth-1);
	    const l = this.grid.lens(x, y, z);
	    if (this.filter_whitelist.includes(l.get())) {
		return l;
            }
	}
    }

    private iterateCycle(): bool {
	if (this.particle === null)
	    this.particle = this.generateParticle();

        // Check if we reached the maximum number of aggregates.
        if (this.current_aggregates.length >= this.max_aggregates) return true;

        // Check if the particle is near any aggregates
	const checkAggregates = (p) => this.current_aggregates.find((a) => {
	    return a.isEqual(p);
	});

        if (checkAggregates(this.particle.up()) ||
            checkAggregates(this.particle.right()) ||
            checkAggregates(this.particle.down()) ||
            checkAggregates(this.particle.left()) ||
	    checkAggregates(this.particle.top()) ||
	    checkAggregates(this.particle.bottom())) {

            // Check if I can place an aggregate here, otherwise fire a new particle.
            if (this.filter_whitelist.includes(this.particle.get())) {
                this.current_aggregates.push(this.particle.clone());
                this.particle = null;
                return false;
            }
            else {
                this.particle = null;
                return false;
            }
        }

        let distribution = {
            up: (this.grid.height > 1) ? 1 : 0,
            down: (this.grid.height > 1) ? 1 : 0,
            right: (this.grid.width > 1) ? 1 : 0,
            left: (this.grid.width > 1) ? 1 : 0,
	    top: (this.grid.depth > 1) ? 1 : 0,
	    bottom: (this.grid.depth > 1) ? 1 : 0,
        };

        switch(this.srng.randomDistribution(distribution)) {
            case "up": this.particle = this.particle.up(); break;
            case "right": this.particle = this.particle.right(); break;
            case "down": this.particle = this.particle.down(); break;
            case "left": this.particle = this.particle.left(); break;
	    case "top": this.particle = this.particle.top(); break;
	    case "bottom": this.particle = this.particle.bottom(); break;
        }
        return false;
    };
}
