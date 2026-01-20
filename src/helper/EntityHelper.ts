/**
   Serves as an adapter over entities. Meant to be extended into base entities.
 */

import {
    Instance as CSS,
    Entity,
} from "cs_script/point_script";
import * as Base from "../base";
import * as SEMath from "../math";
import * as Util from "../util";
import * as Event from "../event";

interface ConnectOutputEvent {
    input?: any;
    caller?: Entity;
    activator?: Entity;
}
export type ConnectOutputCallback = (event: ConnectOutputEvent) => void;
export type MaybeEntity = Entity | undefined | null;

interface ConnectionData {
    callback: ConnectOutputCallback;
    id: number;
}

export default abstract class EntityHelper {
    private connection_ids: Map<string, ConnectionData> = new Map();
    private entity: Entity;
    constructor(entity: Entity | EntityHelper) {
        this.entity = entity?.raw || entity;
    }

    abstract public static Find<T = EntityHelper>(r: RegExp | string): T | null {
        // Overload with each inherited entity helper by classname
        // uses EntityHelper.FindByClass
    }

    abstract public static FindAll<T= EntityHelper>(r: RegExp | string): Array<T> {
        // Overload with each inherited entity helper by classname
        // uses EntityHelper.FindAllByClass
    }
    
    public static FindByClass(classname: string, r: RegExp | string, error = false): EntityHelper | null {
        const e = Base.Asset.FindByClass(classname, r);
        if (!e && error)
            throw new Error(`Failed to find '${classname}' with search pattern '${r.toString()}'`);
        else if (!e && !error) return null;
        return new EntityHelper(e);
    }

    public static FindAllByClass(classname: string, r: RegExp | string): Array<EntityHelper> {
        const es = Base.Asset.FindAllByClass(classname, r) ?? [];
        return es.map(e => new EntityHelper(e));
    }
    
    public get raw(): Entity { return this.entity }
    
    public FireEvent(opts = {}) {
        opts.target = this.raw;
        if (!opts.input) {
            CSS.Msg("Error: Fired event with no input.");
            return;
        }
        CSS.EntFireAtTarget(opts);
    }

    public FireUser1(opts = {}): void {
        this.FireEvent({input: "FireUser1", ...opts});
    }
    
    public FireUser2(opts = {}): void {
        this.FireEvent({input: "FireUser2", ...opts});
    }
    
    public FireUser3(opts = {}): void {
        this.FireEvent({input: "FireUser3", ...opts});
    }
    
    public FireUser4(opts = {}): void {
        this.FireEvent({input: "FireUser4", ...opts});
    }

    private resetCallbacks(): void {
        this.connection_ids.forEach(({ id, callback }, event_name) => {
            CSS.DisconnectOutput(id);
            const new_id = CSS.ConnectOutput(this.raw, event_name, callback);
            this.connection_ids.set(event_name, { new_id, callback });
        });
    }
    
    /** Represents EventListening of IO entities with `this.ConnectOutput`
        TODO: Use Global Events to 'latch onto' the callbacks this method represents.
     */
    public ConnectOutput(event_name: string, callback: ConnectOutputCallback): void {
        if (this.connection_ids.has(event_name)) {
            const old_id = this.connection_ids.get(event_name).id;
            CSS.DisconnectOutput(old_id);
        }
        const id = CSS.ConnectOutput(this.raw, event_name, callback);
        this.connection_ids.set(event_name, { id, callback });
    }

    public On(event_name: string, callback: ConnectOutputCallback): EntityHelper {
        this.ConnectOutput(event_name, callback);
        return this;
    }
    
    //
    // Entity Method Adapters
    // @see: https://www.source2.wiki/Scripting/Counter-Strike%202/cs_script/functionList?game=any#entity
    //
    
    public IsValid(): boolean {
        return this.raw?.IsValid() as boolean;
    }

    public GetAbsOrigin(): SEMath.Vector3 {
        return SEMath.Vector3.From(this.raw.GetAbsOrigin());
    }

    public GetLocalOrigin(): SEMath.Vector3 {
        return SEMath.Vector3.From(this.raw.GetLocalOrigin());
    }

    public GetAbsAngles(): SEMath.QAngle {
        return SEMath.QAngle.From(this.raw.GetAbsAngles());
    }

    public GetLocalAngles(): SEMath.QAngle {
        return SEMath.QAngle.From(this.raw.GetLocalAngles());
    }

    public GetAbsVelocity(): SEMath.Vector3 {
        return SEMath.Vector3.From(this.raw.GetAbsVelocity());
    }

    public GetLocalVelocity(): SEMath.Vector3 {
        return SEMath.Vector3.From(this.raw.GetAbsVelocity());
    }

    public GetEyeAngles(): SEMath.QAngle {
        return SEMath.QAngle.From(this.raw.GetEyeAngles());
    }

    public GetEyePosition(): SEMath.Vector3 {
        return SEMath.Vector3.From(this.raw.GetEyePosition());
    }

    public Teleport({position, rotation, velocity, ...opts}): void {
        this.raw.Teleport({position, rotation, velocity, ...opts});
    }

    public GetClassName(): string {
        return this.raw.GetClassName();
    }

    public GetEntityName(): string {
        return this.raw.GetEntityName();
    }

    public SetEntityName(s: string): void {
        this.raw.SetEntityName(s);
    }

    public GetOwner(): Entity | undefined {
        return this.raw.GetOwner();
    }

    public SetOwner(e: Entity): void {
        this.raw.SetOwner(e);
    }

    public GetParent(): Entity | undefined {
        return this.raw.GetParent();
    }

    public SetParent(e: Entity): void {
        this.raw.SetParent(e);
    }

    public GetTeamNumber(): number {
        return this.raw.GetTeamNumber();
    }

    public GetHealth(): number {
        return this.raw.GetHealth();
    }

    public SetHealth(hp: number): void {
        if (hp <= 0) {
            CSS.Msg("ERROR: provided health is less than or equal to zero.");
            return;
        }
        this.raw.SetHealth(hp);
    }

    public GetMaxHealth(): number {
        return this.GetMaxHealth();
    }

    public SetMaxHealth(hp: number): void {
        if (hp <= 0) {
            CSS.Msg("ERROR: provided max health is less than or equal to zero.");
            return;
        }
        this.raw.SetMaxHealth(hp);
    }

    public IsAlive(): boolean {
        return this.raw.IsAlive();
    }

    public IsWorld(): boolean {
        return this.raw.IsWorld();
    }

    public GetGroundEntity(): Entity | undefined {
        return this.raw.GetGroundEntity();
    }

    public TakeDamage({ damage, inflictor, attacker, weapon, ...opts }): number {
        return this.raw.TakeDamage({ damage, inflictor, attacker, weapon, ...opts });
    }

    public Kill(): void {
        this.raw.Kill();
    }

    public Remove(): void {
        this.raw.Remove();
    }
}

