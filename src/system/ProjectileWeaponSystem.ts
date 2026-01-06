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
import { FindProjectileTemplate, FindTemplate } from "../base/Asset.ts";
import { default as Vector } from "../math/Vector3.ts";
import QAngle from "../math/QAngle.ts";

export default class ProjectileWeaponSystem extends System {
    private weapon_class: string;
    private projectile_template_name: RegExp | string;
    private projectile_speed: number;
    private projectile_collision_radius: number;
    private projectile_fizzle_delay: number;
    private explosion_template_name: RegExp | string;
    private spawn_forward_distance: number;
    private spawn_offset;
    private projectile_controllers: Array<ProjectileController> = [];
    
    constructor(opts = {}) {
        super();
        const {
            weapon_class = "weapon_ak47",
            projectile_template_name = "scriptedeuch.projectile.template", // Default
            projectile_speed = 2600,
            projectile_collision_radius = 0.01,
            projectile_fizzle_delay = 5.0, // Seconds
            explosion_template_name,
            spawn_forward_distance = 100.,
            spawn_offset = Vector.Zero,
        } = opts;
        this.weapon_class = weapon_class;
        this.projectile_template_name = projectile_template_name;
        this.projectile_speed = projectile_speed;
        this.projectile_collision_radius = projectile_collision_radius;
        this.projectile_fizzle_delay = projectile_fizzle_delay;
        this.explosion_template_name = explosion_template_name;
        this.spawn_forward_distance = spawn_forward_distance;
        this.spawn_offset = spawn_offset;
    }

    override OnGunFire(event) {
        const weapon_class = event.weapon.GetClassName();
        const player_pawn = event.weapon.GetOwner();
        if (weapon_class == this.weapon_class) {
            this.fireProjectile(event.weapon);
        }
    }
    
    private fireProjectile(weapon_base: CSWeaponBase) {
        CSS.Msg("Projectile Fired!");
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

        CSS.EntFireAtTarget({target: projectile_entity, input: "DisableGravity"});
        CSS.EntFireAtTarget({target: projectile_entity, input: "EnableMotion"});
        CSS.EntFireAtTarget({target: projectile_entity, input: "Wake"});
        
        projectile_entity.Teleport({velocity: projectile_velocity});
        CSS.Msg("Projectile Velocity: " + JSON.stringify(projectile_velocity));

        this.projectile_controllers.push(new ProjectileController({
            entity: projectile_entity,
            owner: player_pawn,
            weapon: weapon_base,
            initial_position: spawn_position,
            initial_direction: player_forward_vector,
            collision_radius: this.projectile_collision_radius,
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
    private entity: Entity;
    private owner: CSPlayerPawn;
    private weapon: CSWeaponBase;
    private initial_position: Vector;
    private initial_direction: Vector;
    private collision_radius: number;
    private last_position: Vector;
    private dirty: boolean = false;
    
    constructor(opts = {}) {
        const {
            entity,
            owner,
            weapon,
            initial_position,
            initial_direction,
            collision_radius,
        } = opts
        this.entity = entity;
        this.owner = owner;
        this.weapon = weapon;
        this.initial_position = initial_position;
        this.initial_direction = initial_direction;
        this.collision_radius = collision_radius;
        this.last_position = initial_position;
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
        
        const current_position = this.entity.GetAbsOrigin();
        const trace: TraceResult = CSS.TraceSphere({
            start: this.last_position,
            end: current_position,
            ignoreEntity: this.entity,
            radius: this.collision_radius,
            ignorePlayers: false,
        });

        if (trace.didHit) {
            this.HandleCollision(trace);
            this.dirty = true;
            this.entity.Remove();
            return;
        }

        this.last_position = current_position;
    }
    
    HandleCollision(trace: TraceResult) {
        const impact_position = trace.end;

        // TODO: spawn explosion template

        const entity_hit = CSS.TraceLine({
            start: this.last_position,
            end: impact_position,
            ignoreEntity: this.entity,
        }).hitEntity;

        if (entity_hit && entity_hit.IsValid() && entity_hit.GetClassName() === "player") {
            const player_hit = entity_hit as CSPlayerPawn;
            player_hit.TakeDamage({
                damage: 50,
                attacker: this.owner,
                inflictor: this.weapon,
                weapon: this.weapon,
                damageType: 1, // CRUSH?
            });
        }
    }
}


