/**
   Entity Adapter for 'env_hudhint' cs2 entity.
 */
import { Instance as CSS } from "cs_script/point_script";
import type { Entity } from "cs_script/point_script";
import { default as EntityHelper } from "./EntityHelper";
import * as Util from "../util";
import * as Event from "../event";

export const CLASSNAME = "env_hudhint";

export default class EnvironmentHudHint extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): EnvironmentHudHint {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`EnvironmentHudHint - Classname Error: ${e?.GetClassName()}`);
        return new EnvironmentHudHint(e);
    }

    public static Find(r: RegExp | string): EnvironmentHudHint {
        // Overload with each entity helper
        const e = EntityHelper.FindByClassStrict(CLASSNAME, r, true);
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
