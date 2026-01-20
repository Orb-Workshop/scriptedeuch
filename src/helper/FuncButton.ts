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
    ConnectOutputCallback,
} from "./EntityHelper";
import * as Base from "../base";
import * as Util from "../util";
import { default as BaseModelEntity } from "./BaseModelEntity";

export const CLASSNAME = "func_button";

export default class FuncButton extends BaseModelEntity {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): FuncButton {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`FuncButton - Classname Error: ${e?.GetClassName()}`);
        return new FuncButton(e);
    }
   
    public static Find(r: RegExp | string): FuncButton {
        // Overload with each entity helper
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new FuncButton(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<FuncButton> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new FuncButton(e.raw));
    }

    public Lock(opts = {}): void {
        this.FireIO({ input: "Lock", ...opts });
    }

    public Unlock(opts = {}): void {
        this.FireIO({ input: "Unlock", ...opts });
    }
    
    public Press(opts = {}): void {
        this.FireIO({ input: "Press", ...opts });
    }

    public OnPressed(callback: ConnectOutputCallback): FuncButton {
        return this.On("OnPressed", callback) as FuncButton;
    }
    
    public OnUseLocked(callback: ConnectOutputCallback): FuncButton {
        return this.On("OnUseLocked", callback) as FuncButton;
    }
    
}
