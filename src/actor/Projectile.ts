import {
    Instance as CSS,
    Entity,
    CSPlayerPawn,
    CSWeaponBase,
    PointTemplate,
    TraceResult,
} from "cs_script/point_script";
import { Actor, Asset, Default } from "../base";
import * as Math from "../math";
import { UniqueGen } from "../util";

const UniqueName = UniqueGen("Projectile-");

export enum ProjectileState {
    IDLE = 0,
    FIRED = 1,
    DEAD = 2,
}

/**
   
 */
export default class Projectile extends Actor {
    public name: string = UniqueName();
    public state: ProjectileState = ProjectileState.IDLE;
    //
    public initial_position: Math.Vector3;
    public last_position: Math.Vector3;
    public initial_rotation: Math.QAngle;
    public initial_velocity: Math.Vector3;
    public template: PointTemplate;
    public entity: Entity;
    public entity_children: Array<Entity>;
    public collision_radius: number;
    public weapon: CSWeaponBase;
    public owner: CSPlayerPawn;
    public fizzle_delay: number;
    public damage: number;
    public damage_type: number;
    public ignore_players: boolean;
    public remove_on_collision: boolean;
    public disable_gravity: boolean;
    
    static FromWeapon(weapon_base: CSWeaponBase, {
        template = Default.ProjectileTemplate(),
        forward_distance = 100.,
        offset = Math.Vector3.Zero,
        speed = 1000,
        ...opts
    }) {
        const player_pawn = weapon_base.GetOwner();
        const player_eye_position = Math.Vector3.From(player_pawn.GetEyePosition());
        const rotation = Math.QAngle.From(player_pawn.GetEyeAngles());
        const direction = rotation.direction();
        const position = player_eye_position.add(direction.scale(forward_distance));
        // TODO: add offset
        const velocity = direction.scale(speed);
        
        return new Projectile({
            position,
            rotation,
            velocity,
            template,
            weapon: weapon_base,
            owner: player_pawn,
            ...opts,
        });
    }

    constructor({
        position = Math.Vector3.Zero,
        rotation = Math.QAngle.Zero,
        velocity = Math.Vector3.Zero,
        template = Default.ProjectileTemplate(),
        //
        collision_radius = 1.0,
        weapon = null,
        owner = null,
        fizzle_delay = 5, // Seconds
        damage = 20,
        damage_type = 1, // CRUSH FIXME:
        ignore_players = false,
        remove_on_collision = false,
        disable_gravity = false,
    } = {}) {
        super();
        this.initial_position = position;
        this.last_position = position;
        this.initial_rotation = rotation;
        this.initial_velocity = velocity;
        this.template = template;
        this.collision_radius = collision_radius;
        this.weapon = weapon;
        this.owner = owner;
        this.fizzle_delay = fizzle_delay;
        this.damage = damage;
        this.damage_type = damage_type;
        this.ignore_players = ignore_players;
        this.remove_on_collision = remove_on_collision;
        this.disable_gravity = disable_gravity;
    }

    Fire(): Projectile {
        if (this.state !== ProjectileState.IDLE)
            throw new Error("Already Fired!");
        [this.entity, ...this.entity_children] = this.template.ForceSpawn(
            this.initial_position,
            this.initial_rotation);

        // handle this.disable_gravity
        if (this.disable_gravity)
            CSS.EntFireAtTarget({target: this.entity, input: "DisableGravity"});
        else
            CSS.EntFireAtTarget({target: this.entity, input: "EnableGravity"});

        // 
        this.entity.Teleport({velocity: this.initial_velocity});
        this.state = ProjectileState.FIRED;
        return this;
    }

    private getCurrentPosition() {
        return Math.Vector3.From(this.entity.GetAbsOrigin());
    }

    private getLastPosition() {
        return this.last_position;
    }
    
    private updateLastPosition() {
        const current_position = this.getCurrentPosition();
        this.last_position = current_position;
    }
    
    CheckCollision() {
        const current_position = this.getCurrentPosition();
        const last_position = this.getLastPosition();
        
        const trace: TraceResult = CSS.TraceSphere({
            start: last_position,
            end: current_position,
            ignoreEntity: this.entity,
            radius: this.collision_radius,
            ignorePlayers: this.ignore_players,
        });

        if (trace.didHit) {
            if (this.remove_on_collision) this.Remove();
            this.HandleCollision(trace);
        }
    }

    HandleCollision(trace) {
        const entity_hit = trace.hitEntity;
        if (!entity_hit?.IsValid()) return;        
        if (entity_hit.GetClassName() !== "player") return;
        
        const player_hit = entity_hit as CSPlayerPawn;
        player_hit.TakeDamage({
            damage: this.damage,
            attacker: this.owner,
            inflictor: this.weapon,
            weapon: this.weapon,
            damageType: this.damage_type, // CRUSH?
        });
    }
    
    Remove() {
        this.state = ProjectileState.DEAD;
        this.MakeDirty();
        if (this.entity?.IsValid()) this.entity.Remove();
    }
    
    override Think() {
        if (this.GetLifetime() >= this.fizzle_delay) this.Remove();
        if (this.state !== ProjectileState.FIRED) return;
        if (!this.entity?.IsValid()) {
            this.Remove();
            return;
        }
        this.CheckCollision();
        this.updateLastPosition();
    }

    override ReceiveMessage(name, data) {
        if (name == "Kill" && data?.name === this.name) this.Remove();
        if (name == "KillAll") this.Remove();
    }

    override Dispose() {
        if (this.entity?.IsValid()) this.entity.Remove();
    }
}

