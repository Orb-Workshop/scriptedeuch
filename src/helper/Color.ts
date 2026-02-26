/** implements cs2 color and includes additional helper methods when dealing with colors... */
import {
    Instance as CSS,
    Color as ColorType,
} from "cs_script/point_script";

const MIN_VALUE = 0;
const MAX_VALUE = 255;

interface HSLAType {
    h: number; // Hue        (0 - 360)
    s: number; // Saturation (0 - 100)
    l: number; // Luminance  (0 - 100)
    a: number; // Alpha      (0 - 100)
}

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

    public static FromHSLA({h, s, l, a = 100}: HSLAType): Color {
        s /= 100;
        l /= 100;
        
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hue2rgb(p, q, h / 360 + 1 / 3);
        g = hue2rgb(p, q, h / 360);
        b = hue2rgb(p, q, h / 360 - 1 / 3);
        
        return new Color(
            Math.round(r * 255),
            Math.round(g * 255),
            Math.round(b * 255),
            Math.round(a / 100 * 255),
        );
    }
    
    toHSLA(): HSLAType {
        const r_norm = this.r / MAX_VALUE;
        const g_norm = this.g / MAX_VALUE;
        const b_norm = this.b / MAX_VALUE;

        const max = Math.max(r_norm, g_norm, b_norm);
        const min = Math.min(r_norm, g_norm, b_norm);
        
        const l = (max + min) / 2;
        
        let s;
        if (l <= 0.5) {
            s = (max - min) / (max + min);
        }
        else {
            s = (max - min) / (2.0 - max - min);
        }
        
        let h;
        if (r_norm == max) {
            h = (g_norm - b_norm) / (max - min);
        }
        else if (g_norm == max) {
            h = 2.0 + (b_norm - r_norm) / (max - min);
        }
        else if (b_norm == max) {
            h = 4.0 + (r_norm - g_norm) / (max - min);
        }

        // Convert to Degrees
        h *= 60;
        if (h < 0) h += 360;
        
        return {
            h: Math.round(h),
            s: Math.round(s * 100),
            l: Math.round(l * 100),
            a: Math.round(this.a / 255 * 100),
        };
    }
}
