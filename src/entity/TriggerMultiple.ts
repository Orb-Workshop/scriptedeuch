import {
    Instance as CSS,
    Entity,
} from "cs_script/point_script";
import {
    default as EntityHelper,
    ConnectOutputCallback,
} from "./EntityHelper";
import * as Util from "../util";

export const CLASSNAME = "trigger_multiple";

/* 
   An adapter class for 'trigger_multiple' entities
 */
export default class TriggerMultiple extends EntityHelper {    
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(entity: Entity): TriggerMultiple {
        if (!Util.CheckClass(entity, CLASSNAME))
            throw new Error(`TriggerMultiple - Classname Error: ${entity?.GetClassName()}`);
        return new TriggerMultiple(entity);
    }

    public static Find(r: RegExp | string): TriggerMultiple {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new TriggerMultiple(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<TriggerMultiple> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new TriggerMultiple(e));
    }

    // Input IO
    
    Enable(opts = {}): void {
        this.FireIO({ input: "Enable", ...opts });
    }

    Disable(opts = {}): void {
        this.FireIO({ input: "Disable", ...opts });
    }

    Toggle(opts = {}): void {
        this.FireIO({ input: "Toggle", ...opts });
    }

    TouchTest(opts = {}): void {
        this.FireIO({ input: "TouchTest", ...opts });
    }
    
    // Output IO
    
    OnStartTouch(callback: ConnectOutputCallback): TriggerMultiple {
        return this.On("OnStartTouch", callback) as TriggerMultiple;
    }

    OnStartTouchAll(callback: ConnectOutputCallback): TriggerMultiple {
        return this.On("OnStartTouchAll", callback) as TriggerMultiple;
    }

    OnEndTouch(callback: ConnectOutputCallback): TriggerMultiple {
        return this.On("OnEndTouch", callback) as TriggerMultiple;
    }
    
    OnEndTouchAll(callback: ConnectOutputCallback): TriggerMultiple {
        return this.On("OnEndTouchAll", callback) as TriggerMultiple;
    }

    OnTrigger(callback: ConnectOutputCallback): TriggerMultiple {
        return this.On("OnTrigger", callback) as TriggerMultiple;
    }

    OnTouching(callback: ConnectOutputCallback): TriggerMultiple {
        return this.On("OnTouching", callback) as TriggerMultiple;
    }
    
    OnTouchingEachEntity(callback: ConnectOutputCallback): TriggerMultiple {
        return this.On("OnTouchingEachEntity", callback) as TriggerMultiple;
    }

    OnNotTouching(callback: ConnectOutputCallback): TriggerMultiple {
        return this.On("OnNotTouching", callback) as TriggerMultiple;
    }
}
