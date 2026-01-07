import {
    Instance as CSS,
    PointTemplate,
    Entity,
    CSPlayerPawn,
    CSWeaponBase,
    TraceResult,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import System from "../base/System.ts";
import { FindTemplate } from "../base/Asset.ts";
import { default as Vector } from "../math/Vector3.ts";
import QAngle from "../math/QAngle.ts";

type CallbackBase = (p: ProjectileController) => void;
type InitCallbackParams = CallbackBase;
type CollisionCallbackParams = (p: ProjectileController, t: TraceResult) => void;
type ThinkCallbackParams = CallbackBase;

export default class ProjectileWeaponSystem extends System {
    private weapon_class: string;
    private projectile_template_name: RegExp | string;
    private projectile_speed: number;
    private projectile_collision_radius: number;
    private projectile_fizzle_delay: number;
    private projectile_gravity_enabled: boolean;
    private projectile_damage: number;
    private spawn_forward_distance: number;
    private spawn_offset: Vector;
    //
    private projectile_controllers: Array<ProjectileController> = [];
    private on_init_callback: (p: ProjectileController) => void;
    private on_collision_callback: (p: ProjectileController, t: TraceResult) => void;
    private on_think_callback: (p: ProjectileController) => void;
    
    constructor({
        weapon_class = "weapon_ak47",
        projectile_template_name = "scriptedeuch.projectile.template", // Default
        projectile_speed = 2600,
        projectile_collision_radius = 1,
        projectile_fizzle_delay = 5.0, // Seconds
        projectile_gravity_enabled = true,
        projectile_damage = 50,
        spawn_forward_distance = 100.,
        spawn_offset = Vector.Zero,
    }) {
        super();
        this.weapon_class = weapon_class;
        this.projectile_template_name = projectile_template_name;
        this.projectile_speed = projectile_speed;
        this.projectile_collision_radius = projectile_collision_radius;
        this.projectile_fizzle_delay = projectile_fizzle_delay;
        this.projectile_gravity_enabled = projectile_gravity_enabled;
        this.projectile_damage = projectile_damage;
        this.spawn_forward_distance = spawn_forward_distance;
        this.spawn_offset = spawn_offset;
    }

    public setInitCallback(callback: InitCallbackParams) {
        this.on_init_callback = callback;
    }

    public setCollisionCallback(callback: CollisionCallbackParams) {
        this.on_collision_callback = callback;
    }

    public setThinkCallback(callback: ThinkCallbackParams) {
        this.on_think_callback = callback;
    }
    
    override OnGunFire(event) {
        const weapon_class = event.weapon.GetClassName();
        const player_pawn = event.weapon.GetOwner();
        if (weapon_class == this.weapon_class) {
            this.fireProjectile(event.weapon);
        }
    }

    private fireProjectile(weapon_base: CSWeaponBase) {
        const player_pawn = weapon_base.GetOwner();
        const player_eye_position = player_pawn.GetEyePosition();
        const player_eye_angles = player_pawn.GetEyeAngles();
        const player_forward_vector = QAngle.NormalVector(player_eye_angles);

        const spawn_position = Vector.Create(
            player_eye_position.x +
                player_forward_vector.x * this.spawn_forward_distance +
                player_forward_vector.x * this.spawn_offset.x,

            player_eye_position.y +
                player_forward_vector.y * this.spawn_forward_distance +
                player_forward_vector.y * this.spawn_offset.y,

            player_eye_position.z +
                player_forward_vector.z * this.spawn_forward_distance +
                player_forward_vector.z * this.spawn_offset.z);

        const projectile_template = FindTemplate(this.projectile_template_name);
        if (!projectile_template)
            throw new Error(
                "Failed to find projectile template with name: " + this.projectile_template_name);
        const [projectile_entity] = projectile_template.ForceSpawn(
            spawn_position, player_eye_angles);

        const projectile_velocity = player_forward_vector.scale(this.projectile_speed);

        if (this.projectile_gravity_enabled)
            CSS.EntFireAtTarget({target: projectile_entity, input: "EnableGravity"});
        else
            CSS.EntFireAtTarget({target: projectile_entity, input: "DisableGravity"});
        
        CSS.EntFireAtTarget({target: projectile_entity, input: "EnableMotion"});
        CSS.EntFireAtTarget({target: projectile_entity, input: "Wake"});        
        projectile_entity.Teleport({velocity: projectile_velocity});


        this.projectile_controllers.push(new ProjectileController({
            parent: this,
            entity: projectile_entity,
            owner: player_pawn,
            weapon: weapon_base,
            initial_position: spawn_position,
            initial_direction: player_forward_vector,
        }));
        
        // Cleanup after a delay
        CSS.EntFireAtTarget({
            target: projectile_entity,
            input: "Kill",
            delay: this.projectile_fizzle_delay, // Seconds
        });
    }

    private cleanup() {
        this.projectile_controllers = this.projectile_controllers.filter(
            projectile => !projectile.isDirty());
    }
    
    override Think() {
        this.projectile_controllers.forEach(controller => controller.think());
        this.cleanup();
    }
}

class ProjectileController {
    public parent: ProjectileWeaponSystem;
    public entity: Entity;
    public owner: CSPlayerPawn;
    public weapon: CSWeaponBase;
    public initial_position: Vector;
    public initial_direction: Vector;
    public collision_radius: number;
    public last_position: Vector;
    private dirty: boolean = false;
    
    constructor({
        parent,
        entity,
        owner,
        weapon,
        initial_position,
        initial_direction,
    }) {
        this.parent = parent;
        this.entity = entity;
        this.owner = owner;
        this.weapon = weapon;
        this.initial_position = initial_position;
        this.initial_direction = initial_direction;
        this.collision_radius = this.parent.projectile_collision_radius;
        this.last_position = initial_position;

        // Run Init Callback
        if (this.parent.on_init_callback)
            this.parent.on_init_callback(this);
    }

    public isDirty() { return this.dirty; }
    
    think() {
        if (this.dirty) return;
        if (!this.entity ||
            !this.entity.IsValid() ||
            !this.owner ||
            !this.owner.IsValid()) {
            this.dirty = true;
            return;
        }
        
        const current_position = Vector.From(this.entity.GetAbsOrigin());
        const trace: TraceResult = CSS.TraceSphere({
            start: this.last_position,
            end: current_position,
            ignoreEntity: this.entity,
            radius: this.collision_radius,
            ignorePlayers: false,
        });

        if (trace.didHit) {
            this.handleCollision(trace);
            this.dirty = true;
            this.entity.Remove();
            return;
        }

        // Run Think Callback
        if (this.parent.on_think_callback)
            this.parent.on_think_callback(this);
        
        this.last_position = current_position;
    }
    
    private handleCollision(trace: TraceResult) {
        //const impact_position = Vector.From(trace.end);
        
        const entity_hit = trace.hitEntity;
        if (entity_hit && entity_hit.IsValid() && entity_hit.GetClassName() === "player") {
            const player_hit = entity_hit as CSPlayerPawn;
            player_hit.TakeDamage({
                damage: this.parent.projectile_damage,
                attacker: this.owner,
                inflictor: this.weapon,
                weapon: this.weapon,
                damageType: 1, // CRUSH?
            });

            // Run Collision Callback
            if (this.parent.on_collision_callback)
                this.parent.on_collision_callback(this, trace);
        }
    }
}
