/**
   Entity Adapter for 'info_particle_system' cs2 entity.
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

export const CLASSNAME = "info_particle_system";

export default class InfoParticleSystem extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
        //RemoveActorOnRoundEnd(this);
    }

    public static From(e: Entity): InfoParticleSystem {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`InfoParticleSystem - Classname Error: ${e?.GetClassName()}`);
        return new InfoParticleSystem(e);
    }

    public static Find(r: RegExp | string): InfoParticleSystem {
        // Overload with each entity helper
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new InfoParticleSystem(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<InfoParticleSystem> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new InfoParticleSystem(e.raw));
    }

    // IO Event Inputs
    
    public Start(opts = {}): void {
        this.FireIO({ input: "Start", ...opts });
    }

    public Stop(opts = {}): void {
        this.FireIO({ input: "Stop", ...opts });
    }

    public Freeze(opts = {}): void {
        this.FireIO({ input: "Freeze", ...opts });
    }

    public Thaw(opts = {}): void {
        this.FireIO({ input: "Thaw", ...opts });
    }

    public StopPlayEndCap(opts = {}): void {
        this.FireIO({ input: "StopPlayEndCap", ...opts });
    }

    public DestroyImmediately(opts = {}): void {
        this.FireIO({ input: "DestroyImmediately", ...opts });
    }

    public SetControlPoint(x = 0, y = 0, z = 0, opts = {}): void {
        this.FireIO({ input: "SetControlPoint", value: [x, y, z].join(" "), ...opts });
    }

    public SetDataControlPointX(value: number = 0, opts = {}): void {
        this.FireIO({ input: "SetDataControlPointX", value, ...opts });
    }

    public SetDataControlPointY(value: number = 0, opts = {}): void {
        this.FireIO({ input: "SetDataControlPointY", value, ...opts });
    }

    public SetDataControlPointZ(value: number = 0, opts = {}): void {
        this.FireIO({ input: "SetDataControlPointZ", value, ...opts });
    }
}

