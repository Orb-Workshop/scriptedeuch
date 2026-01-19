/**
   Entity Adapter for 'PointSoundEvent'
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

/** The cs2 entity we're adapting to */
export const CLASSNAME: string = "point_soundevent";

export default class PointSoundEvent extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): PointSoundEvent | null {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(
                `PointSoundEvent - Classname Error: ${e?.GetClassName()}`);
        return new PointSoundEvent(e);
    }
   
    public static Find(r: RegExp | string): PointSoundEvent {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new PointSoundEvent(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<PointSoundEvent> {
        return EntityHelper.FindAllByClass<PointSoundEvent>(CLASSNAME, r);
    }
    
    SetSoundEventName(soundevent_name: string, opts): void {
        this.FireEvent({input: "SetSoundEventName", value: soundevent_name, ...opts});
    }

    StartSound(opts = {}): void {
        this.FireEvent({input: "StartSound", ...opts});
    }

    StopSound(opts = {}): void {
        this.FireEvent({input: "StopSound", ...opts});
    }
    
}
