/**
   Entity Adapter for 'env_shooter' cs2 entity.

   Notes:

   - env_shooter entities will not spawn in cs2 maps. This class is deprecated.
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import { default as EntityHelper } from "./EntityHelper";
import * as Util from "../util";
import * as Event from "../event";
import { RemoveActorOnRoundEnd } from "./util";

export const CLASSNAME = "env_shooter";

export default class EnvironmentShooter extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
        //RemoveActorOnRoundEnd(this);
    }

    public static From(e: Entity): EnvironmentShooter {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`EnvironmentShooter - Classname Error: ${e?.GetClassName()}`);
        return new EnvironmentShooter(e);
    }

    public static Find(r: RegExp | string): EnvironmentShooter {
        // Overload with each entity helper
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new EnvironmentShooter(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<EnvironmentShooter> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new EnvironmentShooter(e.raw));
    }

    // IO Event Inputs
    
    public Shoot(opts = {}): void {
        this.FireIO({ input: "Shoot", ...opts });
    }
}

