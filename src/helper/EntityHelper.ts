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
    protected entity: Entity;
    constructor(entity: Entity) {
        this.entity = entity;
    }

    public static From<T = EntityHelper>(e: MaybeEntity): T | null {
        if (e === undefined || e === null || !(e?.IsValid())) return null;
        return new T(e);
    }

    public static FindByClass<T = EntityHelper>(classname: string, r: RegExp | string): T | null {
        const entity = Base.Asset.FindByClass(classname, r);
        return EntityHelper.From<T>(entity);
    }

    abstract public static Find<T = EntityHelper>(r: RegExp | string): T | null {
        // Overload with each entity helper
    }
    
    public get raw(): Entity { return this.entity }
    
    public FireEvent(opts = {}) {
        opts.target = this.entity;
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
        return this.entity?.IsValid();
    }

    public GetAbsOrigin(): SEMath.Vector3 {
        return SEMath.Vector3.From(this.entity.GetAbsOrigin());
    }

    public GetLocalOrigin(): SEMath.Vector3 {
        return SEMath.Vector3.From(this.entity.GetLocalOrigin());
    }

    public GetAbsAngles(): SEMath.QAngle {
        return SEMath.QAngle.From(this.entity.GetAbsAngles());
    }

    public GetLocalAngles(): SEMath.QAngle {
        return SEMath.QAngle.From(this.entity.GetLocalAngles());
    }

    public GetAbsVelocity(): SEMath.Vector3 {
        return SEMath.Vector3.From(this.entity.GetAbsVelocity());
    }

    public GetLocalVelocity(): SEMath.Vector3 {
        return SEMath.Vector3.From(this.entity.GetAbsVelocity());
    }

    public GetEyeAngles(): SEMath.QAngle {
        return SEMath.QAngle.From(this.entity.GetEyeAngles());
    }

    public GetEyePosition(): SEMath.Vector3 {
        return SEMath.Vector3.From(this.entity.GetEyePosition());
    }

    public Teleport({position, rotation, velocity, ...opts}): void {
        this.entity.Teleport({position, rotation, velocity, ...opts});
    }

    public GetClassName(): string {
        return this.entity.GetClassName();
    }

    public GetEntityName(): string {
        return this.entity.GetEntityName();
    }

    public SetEntityName(s: string): void {
        this.entity.SetEntityName(s);
    }

    public GetOwner(): Entity | undefined {
        return this.entity.GetOwner();
    }

    public SetOwner(e: Entity): void {
        this.entity.SetOwner(e);
    }

    public GetParent(): Entity | undefined {
        return this.entity.GetParent();
    }

    public SetParent(e: Entity): void {
        this.entity.SetParent(e);
    }

    public GetTeamNumber(): number {
        return this.entity.GetTeamNumber();
    }

    public GetHealth(): number {
        return this.entity.GetHealth();
    }

    public SetHealth(hp: number): void {
        if (hp <= 0) {
            CSS.Msg("ERROR: provided health is less than or equal to zero.");
            return;
        }
        this.entity.SetHealth(hp);
    }

    public GetMaxHealth(): number {
        return this.GetMaxHealth();
    }

    public SetMaxHealth(hp: number): void {
        if (hp <= 0) {
            CSS.Msg("ERROR: provided max health is less than or equal to zero.");
            return;
        }
        this.entity.SetMaxHealth(hp);
    }

    public IsAlive(): boolean {
        return this.entity.IsAlive();
    }

    public IsWorld(): boolean {
        return this.entity.IsWorld();
    }

    public GetGroundEntity(): Entity | undefined {
        return this.entity.GetGroundEntity();
    }

    public TakeDamage({ damage, inflictor, attacker, weapon, ...opts}): number {
        return this.entity.TakeDamage({ damage, inflictor, attacker, weapon, ...opts });
    }

    public Kill(): void {
        this.entity.Kill();
    }

    public Remove(): void {
        this.entity.Remove();
    }
}

