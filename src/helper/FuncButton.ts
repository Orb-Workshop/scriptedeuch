/**
   Entity Adapter for 'func_button' cs2 entity.
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import {
    default as EntityHelper,
    MaybeEntity,
    ConnectOutputCallback,
} from "./EntityHelper";
import {default as BaseModelEntity} from "./BaseModelEntity";

export const CLASSNAME = "func_button";

export default class FuncButton extends BaseModelEntity {
    constructor(entity: Entity) {
        super(entity);
        if (entity.GetClassName() !== CLASSNAME)
            throw new Error(`FuncButton - Classname Error: ${this?.entity?.GetClassName()}`);
    }

    public static From(e: MaybeEntity): FuncButton | null {
        return EntityHelper.From<FuncButton>(e, CLASSNAME);
    }
   
    public static Find(r: RegExp | string): FuncButton | null {
        // Overload with each entity helper
        return EntityHelper.FindByClass<FuncButton>(CLASSNAME, r) as FuncButton;
    }

    public static FindAll<FuncButton>(r: RegExp | string): Array<FuncButton> {
        return EntityHelper.FindAllByClass<FuncButton>(CLASSNAME, r);
    }

    public Lock(opts = {}): void {
        this.FireEvent({ input: "Lock", ...opts });
    }

    public Unlock(opts = {}): void {
        this.FireEvent({ input: "Unlock", ...opts });
    }
    
    public Press(opts = {}): void {
        this.FireEvent({ input: "Press", ...opts });
    }

    public OnPressed(callback: ConnectOutputCallback): FuncButton {
        return this.On<FuncButton>("OnPressed", callback)
    }
    
    public OnUseLocked(callback: ConnectOutputCallback): FuncButton {
        return this.On<FuncButton>("OnUseLocked", callback)
    }
}
