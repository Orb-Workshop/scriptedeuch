/**
   Entity Adapter for 'MathCounter'
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


export const CLASSNAME = "math_counter";
export default class MathCounter extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): MathCounter {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`MathCounter - Classname Error: ${e?.GetClassName()}`);
        return new MathCounter(e);
    }

    public static Find(r: RegExp | string): MathCounter {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new MathCounter(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<MathCounter> {
        // Overload with each entity helper
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new MathCounter(e.raw));
    }

    // IO Event Inputs
    public Enable(opts = {}): void {
        this.FireIO({ input: "Enable", ...opts });
    }

    public Disable(opts = {}): void {
        this.FireIO({ input: "Disable", ...opts });
    }

    public Add(value: number, opts = {}): void {
        this.FireIO({ input: "Add", value, ...opts });
    }

    public Subtract(value: number, opts = {}): void {
        this.FireIO({ input: "Subtract", value, ...opts });
    }

    public Multiply(value: number, opts = {}): void {
        this.FireIO({ input: "Multiply", value, ...opts });
    }

    public Divide(value: number, opts = {}): void {
        this.FireIO({ input: "Divide", value, ...opts });
    }

    public SetValue(value: number, opts = {}): void {
        this.FireIO({ input: "SetValue", value, ...opts });
    }

    public GetValue(opts = {}): void {
        this.FireIO({ input: "GetValue", ...opts });
    }

    public SetValueNoFire(value: number, opts = {}): void {
        this.FireIO({ input: "SetValueNoFire", value, ...opts });
    }

    public SetHitMax(value: number, opts = {}): void {
        this.FireIO({ input: "SetHitMax", value, ...opts });
    }

    public SetHitMin(value: number, opts = {}): void {
        this.FireIO({ input: "SetHitMin", value, ...opts });
    }
    
    // IO Event Outputs
    
    public OnKilled(callback: ConnectOutputCallback): MathCounter {
        return this.On("OnKilled", callback) as MathCounter;
    }
    
    public OutValue(callback: ConnectOutputCallback): MathCounter {
        return this.On("OutValue", callback) as MathCounter;
    }

    public OnHitMin(callback: ConnectOutputCallback): MathCounter {
        return this.On("OnHitMin", callback) as MathCounter;
    }

    public OnHitMax(callback: ConnectOutputCallback): MathCounter {
        return this.On("OnHitMax", callback) as MathCounter;
    }

    public OnChangedFromMin(callback: ConnectOutputCallback): MathCounter {
        return this.On("OnChangedFromMin", callback) as MathCounter;
    }

    public OnChangedFromMax(callback: ConnectOutputCallback): MathCounter {
        return this.On("OnChangedFromMax", callback) as MathCounter;
    }

    public OnGetValue(callback: ConnectOutputCallback): MathCounter {
        return this.On("OnGetValue", callback) as MathCounter;
    }
}
