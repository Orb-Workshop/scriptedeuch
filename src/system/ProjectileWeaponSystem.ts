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

type BaseHookFunction = (p: ProjectileController) => void;
type InitHookFunction = BaseHookFunction;
type CollisionHookFunction = (p: ProjectileController, t: TraceResult) => void;
type ThinkHookFunction = BaseHookFunction;

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
    private on_init_hook: InitHookFunction;
    private on_collision_hook: CollisionHookFunction;
    private on_think_hook: ThinkHookFunction;
    
    constructor({
        weapon_class = "weapon_ak47",
        projectile_template_name = "scriptedeuch.projectile.template", // Default
        projectile_speed = 2_600,
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

    public setInitHook(hook: InitHookFunction) {
        this.on_init_hook = hook;
    }

    public setCollisionHook(hook: CollisionHookFunction) {
        this.on_collision_hook = hook;
    }

    public setThinkHook(hook: ThinkHookFunction) {
        this.on_think_hook = hook;
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
        const player_eye_position = Vector.From(player_pawn.GetEyePosition());
        const player_eye_angles = QAngle.From(player_pawn.GetEyeAngles());
        const player_direction = player_eye_angles.direction();
        const spawn_position = player_eye_position.add(
            player_direction.scale(this.spawn_forward_distance));
        // TODO: add spawn offset

        const projectile_template = FindTemplate(this.projectile_template_name);
        if (!projectile_template)
            throw new Error(
                "Failed to find projectile template with name: " + this.projectile_template_name);
        const [projectile_entity] = projectile_template.ForceSpawn(
            spawn_position, player_eye_angles);

        const projectile_velocity = player_direction.scale(this.projectile_speed);

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
            initial_direction: player_direction,
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

        // Run Init Hook
        if (this.parent.on_init_hook)
            this.parent.on_init_hook(this);
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

        // Run Think Hook
        if (this.parent.on_think_hook)
            this.parent.on_think_hook(this);
        
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

            // Run Collision Hook
            if (this.parent.on_collision_hook)
                this.parent.on_collision_hook(this, trace);
        }
    }
}
