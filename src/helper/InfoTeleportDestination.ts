/**
   Entity Adapter for 'info_teleport_destination'
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import EntityHelper from "./EntityHelper";
import * as Util from "../util";

const CLASSNAME = "info_teleport_destination";

export default class InfoTeleportDestination extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): InfoTeleportDestination {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`InfoTeleportDestination - Classname Error: ${e?.GetClassName()}`);
        return new InfoTeleportDestination(e);
    }

    public static Find(r: RegExp | string): InfoTeleportDestination {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new InfoTeleportDestination(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<InfoTeleportDestination> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new InfoTeleportDestination(e.raw));
    }
    
}
