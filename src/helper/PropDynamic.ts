/**
   Entity Adapter for 'prop_dynamic'
 */
import {
    Instance as CSS,
    Entity,
    Color as ColorType,
} from "cs_script/point_script";
import * as Util from "../util";
import {
    default as EntityHelper,
    ConnectOutputCallback,
} from "./EntityHelper";
import BaseModelEntity from "./BaseModelEntity";
import FuncBreakable from "./FuncBreakable";

export const CLASSNAME = "prop_dynamic";
export default class PropDynamic extends FuncBreakable {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): PropDynamic {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`PropDynamic - Classname Error: ${e?.GetClassName()}`);
        return new PropDynamic(e);
    }

    public static Find(r: RegExp | string): PropDynamic {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new PropDynamic(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<PropDynamic> {
        // Overload with each entity helper
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new PropDynamic(e.raw));
    }

    // IO Event Inputs

    public FollowEntity(opts = {}): void {
        this.FireIO({ input: "FollowEntity", ...opts });
    }
    
    public Skin(value: number, opts = {}): void {
        this.FireIO({ input: "Skin", value, ...opts });
    }

    public SetRenderAttribute(value: string, opts = {}): void {
        this.FireIO({ input: "SetRenderAttribute", value, ...opts });
    }

    public ClearRenderAttribute(opts = {}): void {
        this.FireIO({ input: "ClearRenderAttribute", ...opts });
    }

    public EnableShadow(opts = {}): void {
        this.FireIO({ input: "EnableShadow", ...opts });
    }
    
    public DisableShadow(opts = {}): void {
        this.FireIO({ input: "DisableShadow", ...opts });
    }

    public EnableCollision(opts = {}): void {
        this.FireIO({ input: "EnableCollision", ...opts });
    }
    
    public DisableCollision(opts = {}): void {
        this.FireIO({ input: "DisableCollision", ...opts });
    }

    public SetNavIgnore(opts = {}): void {
        this.FireIO({ input: "SetNavIgnore", ...opts });
    }
    
    public SetAnimGraphParameter(name: string, value: any, opts = {}): void {
        value = `${name}=${value}`;
        this.FireIO({ input: "SetAnimGraphParameter", value, ...opts });
    }

    public SetRagdollProfile(value: string, opts = {}): void {
        this.FireIO({ input: "SetRagdollProfile", value, ...opts });
    }

    public TurnOn(opts = {}): void {
        this.FireIO({ input: "TurnOn", ...opts });
    }

    public TurnOff(opts = {}): void {
        this.FireIO({ input: "TurnOff", ...opts });
    }

    public Enable(opts = {}): void {
        this.FireIO({ input: "Enable", ...opts });
    }
    
    public Disable(opts = {}): void {
        this.FireIO({ input: "Disable", ...opts });
    }

    public SetBodyGroup(value: number, opts = {}): void {
        this.FireIO({ input: "SetBodyGroup", value, ...opts });
    }

    public SetAnimationLooping(value: string, opts = {}): void {
        this.FireIO({ input: "SetAnimationLooping", value, ...opts });
    }

    public SetAnimationNoResetLooping(value: string, opts = {}): void {
        this.FireIO({ input: "SetAnimationNoResetLooping", value, ...opts });
    }

    public SetIdleAnimationLooping(value: string, opts = {}): void {
        this.FireIO({ input: "SetIdleAnimationLooping", value, ...opts });
    }

    public SetAnimationNotLooping(value: string, opts = {}): void {
        this.FireIO({ input: "SetAnimationNotLooping", value, ...opts });
    }

    public SetAnimationNoResetNotLooping(value: string, opts = {}): void {
        this.FireIO({ input: "SetAnimationNoResetNotLooping", value, ...opts });
    }

    public SetIdleAnimationNotLooping(value: string, opts = {}): void {
        this.FireIO({ input: "SetIdleAnimationNotLooping", value, ...opts });
    }

    public SetPlaybackRate(value: number, opts = {}): void {
        this.FireIO({ input: "SetPlaybackRate", value, ...opts });
    }
    
}
