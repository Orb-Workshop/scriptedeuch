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

/** Different states of `Projectile.state` */
export enum ProjectileState {
    IDLE = 0,
    FIRED = 1,
    DEAD = 2,
}

/**
   An Actor that controls the spawning and collision of a `prop_physics_multiplayer`.

   @example
   ```ts
   import { Base } from "scriptedeuch";
   class GlockShot extends Base.System {
       constructor() {
           super();
       }
   
       override OnGunFire(event) {
           const weapon_base = event.weapon;
           const class_name = weapon_base?.GetClassName();
           if (class_name !== "weapon_glock") return;
           let projectile = Actor.Projectile.FromWeapon(weapon_base, {
               damage: 150,
               speed: 10_000,
               disable_gravity: true,
               collision_radius: 10.0,
               remove_on_collision: true,
           }).Fire();
       }
   }
   Base.Mount.Register("GlockShot", new GlockShot());
   ```
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

    /**
       Create an instance of Projectile based on a firing `weapon_base` entity in-game.
       
       Note:

       - This is useful for connecting to `Base.System.OnGunFire({ weapon })`.
     */
    static FromWeapon(weapon_base: CSWeaponBase, {
        template = Default.ProjectileTemplate(),
        forward_distance = 100.,
        offset = Math.Vector3.Zero,
        speed = 1000,
        ...opts
    }): Projectile {
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

    /**
       Fire the Projectile, changing it to the 'fired' state.

       @returns

       itself.
    */
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

    private getCurrentPosition(): Vector3 {
        return Math.Vector3.From(this.entity.GetAbsOrigin());
    }

    private getLastPosition(): number {
        return this.last_position;
    }
    
    private updateLastPosition(): void {
        const current_position = this.getCurrentPosition();
        this.last_position = current_position;
    }

    /** Check the collision per tick. */
    CheckCollision(): void {
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

    /** Handles the collision itself, where `trace` is the collision. */
    HandleCollision(trace: TraceResult): void {
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
    
    override Remove(): void {
        this.state = ProjectileState.DEAD;
        super.Remove();
        if (this.entity?.IsValid()) this.entity.Remove();
    }
    
    override Think(): void {
        if (this.GetLifetime() >= this.fizzle_delay) this.Remove();
        if (this.state !== ProjectileState.FIRED) return;
        if (!this.entity?.IsValid()) {
            this.Remove();
            return;
        }
        this.CheckCollision();
        this.updateLastPosition();
    }

    override ReceiveMessage(tag, data): void {
        if (tag == "Kill" && data?.name === this.name) this.Remove();
        if (tag == "KillAll") this.Remove();
    }

    override Dispose(): void {
        if (this.entity?.IsValid()) this.entity.Remove();
    }
}

