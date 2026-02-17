/**
   Entity Adapter for 'info_particle_target'
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import EntityHelper from "./EntityHelper";
import * as Util from "../util";

const CLASSNAME = "info_particle_target";

export default class InfoParticleTarget extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): InfoParticleTarget {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`InfoParticleTarget - Classname Error: ${e?.GetClassName()}`);
        return new InfoParticleTarget(e);
    }

    public static Find(r: RegExp | string): InfoParticleTarget {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new InfoParticleTarget(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<InfoParticleTarget> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new InfoParticleTarget(e.raw));
    }
    
}
