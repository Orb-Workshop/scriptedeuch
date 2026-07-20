import { expect, test } from "bun:test";
import { Grid3D, Display2D } from "../grid";
import { SeededRandomNumberGenerator } from "../random";
import DiffusionLimitedAggregation from "./DiffusionLimitedAggregation";



test("DLA Init 1", () => {
    let g = new Grid3D({ width: 10, height: 10, sentinel: 0 });
    let srng = new SeededRandomNumberGenerator("test");
    let dla = new DiffusionLimitedAggregation(g, srng);
    dla.process({
	cycles: 50_000,
	max_aggregates: 6,
	fill_value: 1,
	filter_whitelist: [ 0 ],
    });
    Display2D(g);
});
