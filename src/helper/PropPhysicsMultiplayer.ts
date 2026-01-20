/**
   Entity Adapter for 'prop_physics_multiplayer'
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

export const CLASSNAME = "prop_physics_multiplayer";
export default class PropPhysicsMultiplayer extends FuncBreakable {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): PropPhysicsMultiplayer {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`PropPhysicsMultiplayer - Classname Error: ${e?.GetClassName()}`);
        return new PropPhysicsMultiplayer(e);
    }

    public static Find(r: RegExp | string): PropPhysicsMultiplayer {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new PropPhysicsMultiplayer(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<PropPhysicsMultiplayer> {
        // Overload with each entity helper
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new PropPhysicsMultiplayer(e.raw));
    }

    // IO Event Inputs

    public FollowEntity(opts = {}): void {
        this.FireIO({ input: "FollowEntity", ...opts });
    }
    
    public Skin(value: number, opts = {}): void {
        this.FireIO({ input: "Skin", value, ...opts });
    }
    
    public Sleep(opts = {}): void {
        this.FireIO({ input: "Sleep", ...opts });
    }

    public Wake(opts = {}): void {
        this.FireIO({ input: "Wake", ...opts });
    }

    public EnableMotion(opts = {}): void {
        this.FireIO({ input: "EnableMotion", ...opts });
    }
    
    public DisableMotion(opts = {}): void {
        this.FireIO({ input: "DisableMotion", ...opts });
    }

    public EnableGravity(opts = {}): void {
        this.FireIO({ input: "EnableGravity", ...opts });
    }
    
    public DisableGravity(opts = {}): void {
        this.FireIO({ input: "DisableGravity", ...opts });
    }

    public EnableDamageForces(opts = {}): void {
        this.FireIO({ input: "EnableDamageForces", ...opts });
    }
    
    public DisableDamageForces(opts = {}): void {
        this.FireIO({ input: "DisableDamageForces", ...opts });
    }

    public EnableShadow(opts = {}): void {
        this.FireIO({ input: "EnableShadow", ...opts });
    }
    
    public DisableShadow(opts = {}): void {
        this.FireIO({ input: "DisableShadow", ...opts });
    }

    public SetBodyGroup(value: number, opts = {}): void {
        this.FireIO({ input: "SetBodyGroup", value, ...opts });
    }

    public physdamagescale(value: number, opts = {}): void {
        this.FireIO({ input: "physdamagescale", value, ...opts });
    }

    public SetRenderAttribute(value: string, opts = {}): void {
        this.FireIO({ input: "SetRenderAttribute", value, ...opts });
    }

    public ClearRenderAttribute(opts = {}): void {
        this.FireIO({ input: "ClearRenderAttribute", ...opts });
    }
    
    // IO Event Outputs
    public OnMotionEnabled(callback: ConnectOutputCallback): PropPhysicsMultiplayer {
        return this.On("OnMotionEnabled", callback) as FuncBreakable;
    }

    public OnTakeDamage(callback: ConnectOutputCallback): PropPhysicsMultiplayer {
        return this.On("OnTakeDamage", callback) as FuncBreakable;
    }

    public OnAwakened(callback: ConnectOutputCallback): PropPhysicsMultiplayer {
        return this.On("OnAwakened", callback) as FuncBreakable;
    }

    public OnPlayerUse(callback: ConnectOutputCallback): PropPhysicsMultiplayer {
        return this.On("OnPlayerUse", callback) as FuncBreakable;
    }

    public OnOutOfWorld(callback: ConnectOutputCallback): PropPhysicsMultiplayer {
        return this.On("OnOutOfWorld", callback) as FuncBreakable;
    }
    
}
