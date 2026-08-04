/**
   Entity Adapter for 'LogicCase'
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


export const CLASSNAME = "logic_case";
export default class LogicCase extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): LogicCase {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`LogicCase - Classname Error: ${e?.GetClassName()}`);
        return new LogicCase(e);
    }

    public static Find(r: RegExp | string): LogicCase {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new LogicCase(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<LogicCase> {
        // Overload with each entity helper
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new LogicCase(e.raw));
    }

    // IO Event Inputs
    public InValue(value: number, opts = {}): void {
        this.FireIO({ input: "InValue", value, ...opts });
    }

    public PickRandom(opts = {}): void {
        this.FireIO({ input: "PickRandom", ...opts });
    }

    public PickRandomShuffle(opts = {}): void {
        this.FireIO({ input: "PickRandomShuffle", ...opts });
    }

    public ResetShuffle(opts = {}): void {
        this.FireIO({ input: "ResetShuffle", ...opts });
    }
    
    // IO Event Outputs
    public OnKilled(callback: ConnectOutputCallback): LogicCase {
        return this.On("OnKilled", callback) as LogicCase;
    }

    public OnDefault(callback: ConnectOutputCallback): LogicCase {
        return this.On("OnDefault", callback) as LogicCase;
    }

    public OnCase(case_number: number, callback: ConnectOutputCallback): LogicCase {
        if (case_number < 1 || case_number > 32) throw new Error("Case # needs to be between 1 and 32");
        return this.On("OnCase" + case_number, callback) as LogicCase;
    }
}
