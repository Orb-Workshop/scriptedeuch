import {
    Instance as CSS,
    Entity,
} from "cs_script/point_script";
import {
    default as EntityHelper,
    ConnectOutputCallback,
} from "./EntityHelper";
import * as Util from "../util";

export const CLASSNAME = "trigger_teleport";

/* 
   An adapter class for 'trigger_teleport' entities
 */
export default class TriggerTeleport extends EntityHelper {    
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(entity: Entity): TriggerTeleport {
        if (!Util.CheckClass(entity, CLASSNAME))
            throw new Error(`TriggerTeleport - Classname Error: ${entity?.GetClassName()}`);
        return new TriggerTeleport(entity);
    }

    public static Find(r: RegExp | string): TriggerTeleport {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new TriggerTeleport(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<TriggerTeleport> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new TriggerTeleport(e));
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
    
    // Output IO

    OnKilled(callback: ConnectOutputCallback): TriggerTeleport {
        return this.On("OnKilled", callback) as TriggerTeleport;
    }
    
    OnStartTouch(callback: ConnectOutputCallback): TriggerTeleport {
        return this.On("OnStartTouch", callback) as TriggerTeleport;
    }

    OnStartTouchAll(callback: ConnectOutputCallback): TriggerTeleport {
        return this.On("OnStartTouchAll", callback) as TriggerTeleport;
    }

    OnEndTouch(callback: ConnectOutputCallback): TriggerTeleport {
        return this.On("OnEndTouch", callback) as TriggerTeleport;
    }
    
    OnEndTouchAll(callback: ConnectOutputCallback): TriggerTeleport {
        return this.On("OnEndTouchAll", callback) as TriggerTeleport;
    }
}
