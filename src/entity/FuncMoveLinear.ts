/**
   Entity Adapter for 'func_movelinear' cs2 entity.
*/
import { Instance as CSS } from "cs_script/point_script";
import {
    Entity,
    Vector as VectorType,
} from "cs_script/point_script";
import { default as EntityHelper } from "./EntityHelper";
import type { ConnectOutputCallback } from "./EntityHelper";
import * as Util from "../util";
import { default as BaseModelEntity } from "./BaseModelEntity";

export const CLASSNAME = "func_movelinear";

export default class FuncMoveLinear extends BaseModelEntity {
    constructor(entity: Entity) {
        super(entity);
    }

    public static override From(e: Entity): FuncMoveLinear {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`FuncMoveLinear - Classname Error: ${e?.GetClassName()}`);
        return new FuncMoveLinear(e);
    }

    public static override Find(r: RegExp | string): FuncMoveLinear {
        const e = EntityHelper.FindByClassStrict(CLASSNAME, r);
        return new FuncMoveLinear(e.raw);
    }

    public static override FindAll(r: RegExp | string): Array<FuncMoveLinear> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new FuncMoveLinear(e.raw));
    }

    // IO Event Inputs

    public Open(opts = {}): void {
        this.FireIO({ input: "Open", ...opts });
    }

    public Close(opts = {}): void {
        this.FireIO({ input: "Close", ...opts });
    }

    public SetPosition(value: number, opts = {}): void {
        this.FireIO({ input: "SetPosition", value, ...opts });
    }

    public ResetPosition(opts = {}): void {
        this.FireIO({ input: "ResetPosition", ...opts });
    }

    public SetSpeed(value: number, opts = {}): void {
        this.FireIO({ input: "SetSpeed", value, ...opts });
    }

    public TeleportToTarget(opts = {}): void {
        this.FireIO({ input: "TeleportToTarget", ...opts });
    }

    public SetMoveDistanceFromStart(opts = {}): void {
        this.FireIO({ input: "SetMoveDistanceFromStart", ...opts });
    }

    public SetMoveDistanceFromEnd(opts = {}): void {
        this.FireIO({ input: "SetMoveDistanceFromEnd", ...opts });
    }

    // IO Event Outputs

    public OnFullyOpened(callback: ConnectOutputCallback): FuncMoveLinear {
        return this.On("OnFullyOpened", callback) as FuncMoveLinear;
    }

    public OnFullyClosed(callback: ConnectOutputCallback): FuncMoveLinear {
        return this.On("OnFullyClosed", callback) as FuncMoveLinear;
    }

}
