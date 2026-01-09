import {
    Instance as CSS,
    Entity,
    CSPlayerPawn,
    CSWeaponBase,
    PointTemplate,
} from "cs_script/point_script";
import { Actor, Asset, Default } from "../base/index.ts";
import * as Math from "../math/index.ts";
import { UniqueGen } from "../utils.ts";

const UniqueName = UniqueGen("Projectile-");

export default class Projectile extends Actor {
    public name: string = UniqueName();
    //
    public initial_position: Math.Vector3;
    public initial_rotation: Math.QAngle;
    public initial_velocity: Math.Vector3;
    public entity: Entity;
    public entity_children: Array<Entity>;
    public weapon: CSWeaponBase;
    public owner: CSPlayerPawn;
    public name: string;
    
    static FromWeapon(weapon_base: CSWeaponBase, {
        template = Default.ProjectileTemplate(),
        spawn_forward_distance = 100.,
        spawn_offset = Math.Vector3.Zero,
    }) {
        
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
        lifetime = 5, // Seconds
    } = {}) {
        super();
        this.initial_position = position;
        this.initial_rotation = rotation;
        this.initial_velocity = velocity;
        this.template = template;
        this.collision_radius = collision_radius;
        this.weapon = weapon;
        this.owner = owner;
        this.lifetime = lifetime;
    }

    override Think() {
        CSS.Msg("Pew Pew!");
    }

    override ReceiveMessage(name, data) {
        if (name == "Kill" && data?.name === this.name) this.Remove();
        if (name == "KillAll") this.Remove();
    }

    override Dispose() {
        CSS.Msg("Dead!");
        if (this.entity?.IsValid()) this.entity.Remove();
    }
}

