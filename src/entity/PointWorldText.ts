/**
   Entity Adapter for 'point_worldtext' cs2 entity.
 */
import {
    Instance as CSS,
    Entity,
} from "cs_script/point_script";
import {
    default as EntityHelper,
    ConnectOutputCallback,
} from "./EntityHelper";
import * as Util from "../util";
import Color as SEColor from "./Color";

/** The cs2 entity we're adapting to */
export const CLASSNAME: string = "point_worldtext";

export default class PointWorldText extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): PointWorldText {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(
                `PointWorldText - Classname Error: ${e?.GetClassName()}`);
        return new PointWorldText(e);
    }
   
    public static Find(r: RegExp | string): PointWorldText {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new PointWorldText(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<PointWorldText> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new PointWorldText(e.raw));
    }

    // IO Event Inputs
    
    SetMessage(msg: string, opts = {}): void {
        this.FireIO({input: "SetMessage", value: msg, ...opts});
    }

    Color(c: SEColor, opts = {}): void {
        const scolor = [c.r, c.g, c.b, c.a].join(" ");
        this.FireIO({input: "Color", value: scolor, ...opts});
    }

    Enable(opts = {}): void {
        this.FireIO({input: "Enable", ...opts});
    }

    Disable(opts = {}): void {
        this.FireIO({input: "Disable", ...opts});
    }
}
