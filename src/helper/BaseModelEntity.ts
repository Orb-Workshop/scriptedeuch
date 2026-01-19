/**
   Entity Adapter for 'BaseModelEntity'
 */
import {
    Instance as CSS,
    Entity,
    Color as ColorType,
} from "cs_script/point_script";
import { default as EntityHelper, MaybeEntity } from "./EntityHelper";

export const CLASSNAME = "basemodelentity";

export default class BaseModelEntity extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
        if (entity.GetClassName() !== CLASSNAME)
            throw new Error(`BaseModelEntity - Classname Error: ${this?.entity?.GetClassName()}`);
    }

    public static From<T = BaseModelEntity>(e: MaybeEntity): T | null {
        return EntityHelper.From<BaseModelEntity>(e, CLASSNAME);
    }

    public static Find<T = BaseModelEntity>(r: RegExp | string): T | null {
        // Overload with each entity helper
        return EntityHelper.FindByClass<BaseModelEntity>(CLASSNAME, r);
    }

    public static FindAll<T = BaseModelEntity>(r: RegExp | string): T | null {
        // Overload with each entity helper
        return EntityHelper.FindAllByClass<BaseModelEntity>(CLASSNAME, r);
    }
    
    //
    // Adapters for BaseModelEntity
    // @see: https://www.source2.wiki/Scripting/Counter-Strike%202/cs_script/functionList?game=any#basemodelentity
    
    public SetModel(s: string): void {
        this.raw.SetModel(s);
    }

    public SetModelScale(s: number): void {
        this.raw.SetModelScale(s);
    }

    public SetColor(c: ColorType): void {
        this.raw.SetColor(c);
    }

    public Glow(color?: ColorType): void {
        this.raw.Glow(color);
    }

    public Unglow(): void {
        this.raw.Unglow();
    }
}
