/**
   Entity Adapter for 'env_particle_glow' cs2 entity.
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

export const CLASSNAME = "env_particle_glow";

export default class EnvironmentParticleGlow extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
        //RemoveActorOnRoundEnd(this);
    }

    public static From(e: Entity): EnvironmentParticleGlow {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`EnvironmentParticleGlow - Classname Error: ${e?.GetClassName()}`);
        return new EnvironmentParticleGlow(e);
    }

    public static Find(r: RegExp | string): EnvironmentParticleGlow {
        // Overload with each entity helper
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new EnvironmentParticleGlow(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<EnvironmentParticleGlow> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new EnvironmentParticleGlow(e.raw));
    }

    // IO Event Inputs
    
    public setcolortint(opts = {}): void {
        this.FireIO({ input: "setcolortint", ...opts });
    }

    public setscale(opts = {}): void {
        this.FireIO({ input: "setscale", ...opts });
    }

    public setalphascale(opts = {}): void {
        this.FireIO({ input: "setalphascale", ...opts });
    }

    public Start(opts = {}): void {
        this.FireIO({ input: "Start", ...opts });
    }

    public Stop(opts = {}): void {
        this.FireIO({ input: "Stop", ...opts });
    }

    public StopPlayEndCap(opts = {}): void {
        this.FireIO({ input: "StopPlayEndCap", ...opts });
    }

    public DestroyImmediately(opts = {}): void {
        this.FireIO({ input: "DestroyImmediately", ...opts });
    }

    public SetControlPoint(x: number, y: number, z: number, opts = {}): void {
        const value = [x, y, z].join(" ");
        this.FireIO({ input: "SetControlPoint", value, ...opts });
    }
    
}

