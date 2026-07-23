import { expect, test } from "bun:test";
import { Grid3D, Display2D } from "../grid";
import { SeededRandomNumberGenerator } from "../random";
import PathCrawler from "./PathCrawler";

test("PathCrawler Init 1", () => {
    let g = new Grid3D({ width: 10, height: 10, sentinel: 0 });
    let srng = new SeededRandomNumberGenerator("test2");
    let pc = new PathCrawler(g, srng);
    const crawl_listing = pc.crawl();
    crawl_listing.forEach((c) => c.set(1));
    Display2D(g);
});
