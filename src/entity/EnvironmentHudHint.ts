/**
   Entity Adapter for 'env_hudhint' cs2 entity.
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

export const CLASSNAME = "env_hudhint";

export default class EnvironmentHudHint extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
        //RemoveActorOnRoundEnd(this);
    }

    public static From(e: Entity): EnvironmentHudHint {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`EnvironmentHudHint - Classname Error: ${e?.GetClassName()}`);
        return new EnvironmentHudHint(e);
    }

    public static Find(r: RegExp | string): EnvironmentHudHint {
        // Overload with each entity helper
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new EnvironmentHudHint(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<EnvironmentHudHint> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new EnvironmentHudHint(e.raw));
    }

    // IO Event Inputs
    
    public ShowHudHint(opts = {}): void {
        // TODO: Needs activator, consider erroring out when no activator present?
        this.FireIO({ input: "ShowHudHint", ...opts });
    }

    public HideHudHint(opts = {}): void {
        this.FireIO({ input: "HideHudHint", ...opts });
    }
}
