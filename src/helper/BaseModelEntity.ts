/**
   Entity Adapter for 'BaseModelEntity'
 */
import {
    Instance as CSS,
    Entity,
    Color as ColorType,
} from "cs_script/point_script";
import { default as EntityHelper, MaybeEntity } from "./EntityHelper";

export default class BaseModelEntity extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From<T = BaseModelEntity>(e: MaybeEntity): T | null {
        return EntityHelper.From<T>(e);
    }

    abstract public static Find<T = BaseModelEntity>(r: RegExp | string): T | null {
        // Overload with each entity helper
        return EntityHelper.FindByClass<BaseModelEntity>("basemodelentity", r);
    }
    
    //
    // Adapters for BaseModelEntity
    // @see: https://www.source2.wiki/Scripting/Counter-Strike%202/cs_script/functionList?game=any#basemodelentity
    
    public SetModel(s: string): void {
        this.entity.SetModel(s);
    }

    public SetModelScale(s: number): void {
        this.entity.SetModelScale(s);
    }

    public SetColor(c: ColorType): void {
        this.entity.SetColor(c);
    }

    public Glow(color?: Color): void {
        this.entity.Glow(color);
    }

    public Unglow(): void {
        this.entity.Unglow();
    }
}
