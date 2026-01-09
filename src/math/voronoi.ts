import Point2 from "./Point2";
import BBox2 from "./BBox2";
import LineSegment2 from "./LineSegment2";

/* Voronoi Implementation
   https://github.com/gorhill/Javascript-Voronoi
*/
import {default as RhillVoronoi} from "./rhill-voronoi-core.min.js";

type EdgeResult = {
    point_left: Point2,
    point_right: Point2,
    edge_segment: LineSegment2,
};

/*
  Adapter for use with scriptedeuch
  
  Example:

  let v = new Voronoi();
  v.compute([new Point2(24, 24),
             new Point2(12, 12)]);
*/
export default class Voronoi {
    // Bounding Box Representing Source2 Units. A 2000 x 2000 source2 unit map.
    static bbox_default = {
        xl: 0,
        xr: 2000,
        yt: 0,
        yb: 2000,
    };

    constructor(options = {}) {
        this.options = options;
        this.bbox = options.bbox || Voronoi.bbox_default;
        this.voronoi = new RhillVoronoi();
        this.diagram = null;
    }

    _convertPointArrayToSites(point_array: Array<Point2>): Array<{x: number, y: number}> {
        let sites = [];
        point_array.forEach((p) => sites.push({x: p.x, y: p.y}));
        return sites;
    }

    compute(point_array: Array<Point2>) {
        let sites = this._convertPointArrayToSites(point_array);
        if (this.diagram) this.voronoi.recycle(this.diagram);
        this.diagram = this.voronoi.compute(sites, this.bbox);
    }

    isComputed(): boolean { return this.diagram !== null; }

    getRawDiagram() {
        return this.diagram;
    }

    getCompleteEdges(): Array<EdgeResult> {
        if (!this.isComputed()) return null;
        let edges = this.diagram.edges.filter((edge) => edge.rSite && edge.lSite);
        return edges.map((e) => { return {
            point_left: new Point2(e.lSite.x, e.lSite.y),
            point_right: new Point2(e.rSite.x, e.rSite.y),
            edge_segment: new LineSegment2(new Point2(e.va.x, e.va.y),
                                           new Point2(e.vb.x, e.vb.y)),
        };});
    }

    getEquidistantPoints(): Array<Point2> {
        let onlyUnique = (value, index, array) => array.indexOf(value) === index;
        let edges = this.diagram.edges.filter((edge) => edge.rSite && edge.lSite);
        return edges
            .map((edge) => [edge.va, edge.vb])
            .reduce((acc, edge_pair) => {
                acc.push(edge_pair[0]);
                acc.push(edge_pair[1]);
                return acc;
            }, [])
            .filter(onlyUnique)
            .map((e) => new Point2(e.x, e.y));
    }
}
