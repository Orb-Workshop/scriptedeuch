/**
   Serves as an adapter over entities. Meant to be extended into base entities.
 */

import {
    Instance as CSS,
    Entity,
} from "cs_script/point_script";
import * as Base from "../base";
import * as SEMath from "../math";


export type MaybeEntity = Entity | undefined | null;
export default abstract class EntityHelper {
    private connection_ids: Array<number> = [];
    private entity: Entity;
    constructor(entity: Entity) {
        this.entity = entity;
    }

    public static From<T = EntityHelper>(e: MaybeEntity): EntityHelper | null {
        if (e === undefined || e === null || !(e?.IsValid())) return null;
        return new EntityHelper(e) as T;
    }
    
    public static FindByClass<T = EntityHelper>(classname: string, r: RegExp | string): T | null {
        const entity = Base.Asset.FindByClass(classname, r);
        return EntityHelper.From<T>(entity);
    }

    abstract public static Find<T = EntityHelper>(r: RegExp | string): T | null {
        // Overload with each inherited entity helper by classname
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

    // TODO: Maybe handle connection ids on disposal?
    public ConnectOutput<T = EntityHelper>(event_name, callback: (event) => void): T {
        this.connection_ids.push(
            CSS.ConnectOutput(this.raw, event_name, callback));
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

    public TakeDamage({ damage, inflictor, attacker, weapon, ...opts}): number {
        return this.raw.TakeDamage({ damage, inflictor, attacker, weapon, ...opts });
    }

    public Kill(): void {
        this.raw.Kill();
    }

    public Remove(): void {
        this.raw.Remove();
    }
}

