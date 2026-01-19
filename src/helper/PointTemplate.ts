/**
   Entity Adapter for 'BaseModelEntity'
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import { default as EntityHelper, MaybeEntity } from "./EntityHelper";

export default class PointTemplate extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
        if (entity.GetClassName() !== "point_template")
            throw new Error(`PointTemplate - Classname Error: ${this?.entity?.GetClassName()}`);
    }

    public static From<T = PointTemplate>(e: MaybeEntity): T | null {
        return EntityHelper.From<T>(e);
    }

    abstract public static Find<T = PointTemplate>(r: RegExp | string): T | null {
        // Overload with each entity helper
        return EntityHelper.FindByClass<PointTemplate>("point_template", r);
    }
    
    //
    // Adapters for PointTemplate
    // @see: https://www.source2.wiki/Scripting/Counter-Strike%202/cs_script/functionList?game=any#pointtemplate

    public ForceSpawn(origin?: VectorType, rotation?: QAngleType): Entity[] | undefined {
        return this.entity.ForceSpawn(origin, rotation);
    }
    
}
