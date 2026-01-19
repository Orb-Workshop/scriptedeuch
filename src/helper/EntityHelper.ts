/**
   Serves as an adapter over entities. Meant to be extended into base entities.
 */

import {
    Instance as CSS,
    Entity,
} from "cs_script/point_script";
import * as Base from "../base";
import * as SEMath from "../math";


interface ConnectOutputEvent {
    input?: any;
    caller?: Entity;
    activator?: Entity;
}
export type ConnectOutputCallback = (event: ConnectOutputEvent) => void;
export type MaybeEntity = Entity | undefined | null;


export default abstract class EntityHelper {
    private connection_ids: Array<number> = [];
    private entity: Entity;
    constructor(entity: Entity) {
        this.entity = entity;
    }

    abstract public static Find<T = EntityHelper>(r: RegExp | string): T | null {
        // Overload with each inherited entity helper by classname
        // uses EntityHelper.FindByClass
    }

    abstract public static FindAll<T= EntityHelper>(r: RegExp | string): Array<T> {
        // Overload with each inherited entity helper by classname
        // uses EntityHelper.FindAllByClass
    }
    
    public static From<T = EntityHelper>(e: MaybeEntity, check_class?: string): T | null {
        if (e === undefined || e === null || !(e?.IsValid())) return null;
        const classname = e.GetClassName();
        if (check_class !== undefined && check_class !== classname) {
            throw new Error(
                `EntityHelper classname check failed. Expected(${check_class}) - Actual(${classname})`);
        }
        return new EntityHelper(e) as T;
    }
    
    public static FindByClass<T = EntityHelper>(classname: string, r: RegExp | string): T | null {
        const entity = Base.Asset.FindByClass(classname, r);
        return EntityHelper.From<T>(entity, classname) as T;
    }

    public static FindAllByClass<T = EntityHelper>(classname: string, r: RegExp | string): Array<T> {
        const entities = Base.Asset.FindAllByClass(classname, r);
        return entities.map(e => EntityHelper.From<T>(e) as T);
    }
    
    public get raw(): Entity { return this.entity }
    
    public FireEvent(opts = {}) {
        opts.target = this.raw;
        if (!opts.input) {
            CSS.Msg("Error: Fired event with no input.");
            return;
        }
        CSS.FireAtTarget(opts);
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
    
    // TODO: Maybe handle connection ids on disposal?
    public ConnectOutput(event_name: string, callback: ConnectOutputCallback): void {
        this.connection_ids.push(
            CSS.ConnectOutput(this.raw, event_name, callback));
    }

    /** Represents EventListening of IO entities with `this.ConnectOutput` */
    public On<T = EntityHelper>(event_name: string, callback: ConnectOutputCallback): T {
        this.ConnectOutput(event_name, callback);
        return this as T;
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

