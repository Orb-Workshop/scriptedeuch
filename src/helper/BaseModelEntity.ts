/**
   Entity Adapter for 'BaseModelEntity'
 */
import {
    Instance as CSS,
    Entity,
    Color as ColorType,
} from "cs_script/point_script";
import * as Util from "../util";
import { default as EntityHelper, MaybeEntity } from "./EntityHelper";


export const CLASSNAME = "basemodelentity";
export default class BaseModelEntity extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: MaybeEntity): BaseModelEntity {
        if (Util.CheckClass(e, CLASSNAME))
            throw new Error(`BaseModelEntity - Classname Error: ${e?.GetClassName()}`);
        return new BaseModelEntity(e);
    }

    public static Find(r: RegExp | string): BaseModelEntity {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new BaseModelEntity(e.raw);
    }

    public static FindAll(r: RegExp | string): T | null {
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
