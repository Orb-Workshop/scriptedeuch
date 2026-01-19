/** implements cs2 color and includes additional helper methods when dealing with colors... */
import {
    Instance as CSS,
    Color as ColorType,
} from "cs_script/point_script";

const MIN_VALUE = 0;
const MAX_VALUE = 255;

export default class Color implements ColorType {
    public r: number;
    public g: number;
    public b: number;
    public a: number;
    constructor(r: number, g: number, b: number, a: number = MAX_VALUE) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    public static From({r, g, b, a = MAX_VALUE}: ColorType): Color {
        return new Color(r, g, b, a);
    }
}
