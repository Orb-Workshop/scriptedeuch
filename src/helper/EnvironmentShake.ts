/**
   Entity Adapter for 'env_shake' cs2 entity.
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import { default as EntityHelper, MaybeEntity } from "./EntityHelper";
import * as Util from "../util";
import * as Event from "../event";
import { RemoveActorOnRoundEnd } from "./util";

export const CLASSNAME = "env_shake";

export default class EnvironmentShake extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
        //RemoveActorOnRoundEnd(this);
    }

    public static From(e: Entity): EnvironmentShake {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`EnvironmentShake - Classname Error: ${e?.GetClassName()}`);
        return new EnvironmentShake(e);
    }

    public static Find(r: RegExp | string): EnvironmentShake {
        // Overload with each entity helper
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new EnvironmentShake(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<EnvironmentShake> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new EnvironmentShake(e.raw));
    }

    // IO Event Inputs
    
    public StartShake(opts = {}): void {
        this.FireIO({ input: "StartShake", ...opts });
    }

    public StopShake(opts = {}): void {
        this.FireIO({ input: "StopShake", ...opts });
    }

    public Amplitude(opts = {}): void {
        this.FireIO({ input: "Amplitude", ...opts });
    }

    public Frequency(opts = {}): void {
        this.FireIO({ input: "Frequency", ...opts });
    }
    
}

