/**
   Entity Adapter for 'BaseModelEntity'
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import EntityHelper from "./EntityHelper";
import * as Util from "../util";

const CLASSNAME = "point_template";

export default class PointTemplate extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): PointTemplate {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`PointTemplate - Classname Error: ${e?.GetClassName()}`);
        return new PointTemplate(e);
    }

    public static Find(r: RegExp | string): PointTemplate {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new PointTemplate(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<PointTemplate> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new PointTemplate(e.raw));
    }
    
    //
    // Adapters for PointTemplate
    // @see: https://www.source2.wiki/Scripting/Counter-Strike%202/cs_script/functionList?game=any#pointtemplate

    public ForceSpawn(origin?: VectorType, rotation?: QAngleType): EntityHelper[] {
        const es = this.entity.ForceSpawn(origin, rotation) ?? [];
        return es.map(e => new EntityHelper(e));
    }
    
}
