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
import * as Util from "../util";

export const CLASSNAME = "env_fade";

export default class EnvironmentFade extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): EnvironmentFade {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`EnvironmentFade - Classname Error: ${e?.GetClassName()}`);
        return new EnvironmentFade(e);
    }

    public static Find(r: RegExp | string): EnvironmentFade {
        // Overload with each entity helper
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new EnvironmentFade(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<EnvironmentFade> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new EnvironmentFade(e.raw));
    }
    
    public Fade(opts = {}): void {
        this.FireEvent({ input: "Fade", ...opts });
    }
}
