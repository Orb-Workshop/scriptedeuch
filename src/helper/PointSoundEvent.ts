/**
   Entity Adapter for 'PointSoundEvent'
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import { default as EntityHelper, MaybeEntity } from "./EntityHelper";

export default class PointSoundEvent extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
        if (entity.GetClassName() !== "point_soundevent")
            throw new Error(`PointSoundEvent - Classname Error: ${this?.entity?.GetClassName()}`);
    }

    public static From<T = PointSoundEvent>(e: MaybeEntity): T | null {
        return EntityHelper.From<T>(e);
    }

    abstract public static Find<T = PointSoundEvent>(r: RegExp | string): T | null {
        // Overload with each entity helper
        return EntityHelper.FindByClass<PointSoundEvent>("point_soundevent", r);
    }

    SetSoundEventName(soundevent_name: string, opts): void {
        this.FireEvent({input: "SetSoundEventName", value: soundevent_name, ...opts});
    }

    StartSound(opts): void {
        this.FireEvent({input: "StartSound", ...opts});
    }

    StopSound(opts): void {
        this.FireEvent({input: "StopSound", ...opts});
    }
    
}
