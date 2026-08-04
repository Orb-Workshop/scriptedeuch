/**
   Entity Adapter for 'info_target'
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import EntityHelper from "./EntityHelper";
import * as Util from "../util";

const CLASSNAME = "info_target";

export default class InfoTarget extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): InfoTarget {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`InfoTarget - Classname Error: ${e?.GetClassName()}`);
        return new InfoTarget(e);
    }

    public static Find(r: RegExp | string): InfoTarget {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new InfoTarget(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<InfoTarget> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new InfoTarget(e.raw));
    }
    
}
