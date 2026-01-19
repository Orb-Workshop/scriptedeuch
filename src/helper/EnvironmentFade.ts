/**
   Entity Adapter for 'env_fade' cs2 entity.
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import { default as EntityHelper, MaybeEntity } from "./EntityHelper";

export const CLASSNAME = "env_fade";

export default class EnvironmentFade extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
        if (entity.GetClassName() !== CLASSNAME)
            throw new Error(`EnvironmentFade - Classname Error: ${this?.entity?.GetClassName()}`);
    }

    public static From(e: MaybeEntity): EnvironmentFade | null {
        return EntityHelper.From<EnvironmentFade>(e, CLASSNAME);
    }

   
    public static Find(r: RegExp | string): EnvironmentFade | null {
        // Overload with each entity helper
        return EntityHelper.FindByClass<EnvironmentFade>(CLASSNAME, r);
    }

    public static FindAll<EnvironmentFade>(r: RegExp | string): Array<EnvironmentFade> {
        return EntityHelper.FindByClass<EnvironmentFade>(CLASSNAME, r);
    }
    
    Fade(opts = {}): void {
        this.FireEvent({input: "Fade", ...opts});
    }
}

