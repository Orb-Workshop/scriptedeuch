/**
   Drunken Stroll Path Crawler.
 */

import { GridLens, SubGrid } from "../grid";
import type { GridType } from "../grid";
import { SeededRandomNumberGenerator } from "../random";

export default class PathCrawler<T> {
    grid: GridType<T>;
    srng: SeededRandomNumberGenerator;

    static default_distribution = {
	top: 1,
	bottom: 1,
	left: 1,
	right: 1,
	up: 1,
	down: 1,
    };

    // Crawl Options
    steps: number = 10;
    starting_point: GridLens<T> = null;

    constructor(grid: GridType<T>, srng: SeededRandomNumberGenerator) {
	this.grid = grid;
	this.srng = srng;
    }

    private getRandomPoint(): GridLens<T> {
	const x = this.srng.randomInteger(0, this.grid.width-1);
	const y = this.srng.randomInteger(0, this.grid.height-1);
	const z = this.srng.randomInteger(0, this.grid.depth-1);
	return this.grid.lens(x, y, z);
    }

    crawl(opts = {}): Array<GridLens<T>> {
	const {
	    steps = 10,
	    starting_point = null,
	    distribution = PathCrawler.default_distribution,
	} = opts;
	this.steps = steps;
	this.starting_point = starting_point ?? this.getRandomPoint();
	let crawl_path = [ this.starting_point ];
	let crawler = this.starting_point;
	for (let s = 0; s < this.steps; s++) {
	    const l_distribution = {
		left: (crawler.x <= 0) ? 0 : distribution.left,
		right: (crawler.x >= this.grid.width-1) ? 0 : distribution.right,
		up: (crawler.y >= this.grid.height-1) ? 0 : distribution.up,
		down: (crawler.y <= 0) ? 0 : distribution.down,
		top: (crawler.z >= this.grid.depth-1) ? 0 : distribution.top,
		bottom: (crawler.z <= 0) ? 0 : distribution.bottom,
	    };
	    switch(this.srng.randomDistribution(l_distribution)) {
		case "left": crawler = crawler.left(); break;
		case "right": crawler = crawler.right(); break;
		case "up": crawler = crawler.up(); break;
		case "down": crawler = crawler.down(); break;
		case "top": crawler = crawler.top(); break;
		case "bottom": crawler = crawler.bottom(); break;
	    }
	    crawl_path.push(crawler);
	}
	return crawl_path;
    }
}
