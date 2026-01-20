/**
   Entity Adapter for 'func_breakable'
 */
import {
    Instance as CSS,
    Entity,
    Color as ColorType,
} from "cs_script/point_script";
import * as Util from "../util";
import {
    default as EntityHelper,
    ConnectOutputCallback,
} from "./EntityHelper";
import BaseModelEntity from "./BaseModelEntity";


export const CLASSNAME = "func_breakable";
export default class FuncBreakable extends BaseModelEntity {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): FuncBreakable {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`FuncBreakable - Classname Error: ${e?.GetClassName()}`);
        return new FuncBreakable(e);
    }

    public static Find(r: RegExp | string): FuncBreakable {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new FuncBreakable(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<FuncBreakable> {
        // Overload with each entity helper
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new FuncBreakable(e.raw));
    }

    // IO Event Inputs
    public Break(opts = {}): void {
        this.FireIO({ input: "Break", ...opts });
    }

    // IO Event Outputs
    public OnBreak(callback: ConnectOutputCallback): FuncBreakable {
        return this.On("OnBreak", callback) as FuncBreakable;
    }
}
