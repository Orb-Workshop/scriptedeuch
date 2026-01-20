/**
   Entity Adapter for 'point_soundevent' cs2 entity.
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

    public static From(e: Entity): PointSoundEvent {
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
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new PointSoundEvent(e.raw));
    }

    // IO Event Inputs
    
    SetSoundEventName(soundevent_name: string, opts = {}): void {
        this.FireIO({input: "SetSoundEventName", value: soundevent_name, ...opts});
    }

    StartSound(opts = {}): void {
        this.FireIO({input: "StartSound", ...opts});
    }

    StopSound(opts = {}): void {
        this.FireIO({input: "StopSound", ...opts});
    }

    // IO Event Outputs
    
    public OnSoundFinished(callback: ConnectOutputCallback): PointSoundEvent {
        return this.On("OnSoundFinished", callback) as PointSoundEvent;
    }
    
}
