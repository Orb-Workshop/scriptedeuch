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

/** The cs2 entity we're adapting to */
const CLASSNAME: string = "point_soundevent";

export default class PointSoundEvent extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
        if (entity.GetClassName() !== CLASSNAME)
            throw new Error(`PointSoundEvent - Classname Error: ${this?.entity?.GetClassName()}`);
    }

    public static From(e: MaybeEntity): PointSoundEvent | null {
        return EntityHelper.From<PointSoundEvent>(e, CLASSNAME);
    }
   
    abstract public static Find(r: RegExp | string): PointSoundEvent | null {
        // Overload with each entity helper
        return EntityHelper.FindByClass<PointSoundEvent>(CLASSNAME, r);
    }

    abstract public static FindAll<T = PointSoundEvent>(r: RegExp | string): Array<T> {
        return EntityHelper.FindByClass<PointSoundEvent>(CLASSNAME, r);
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
