import {
    Instance as CSS,
    PointTemplate,
} from "cs_script/point_script";
import System from "../base/System.ts";
import { FindProjectileTemplate } from "../base/Asset.ts";

const default_projectile_template = FindProjectileTemplate();

export default class ProjectileWeaponSystem extends System {
    private weapon_name: string;
    private projectile_template: PointTemplate;
    private explosion_template: PointTemplate;

    constructor(opts = {}) {
        const {
            weapon_name = "weapon_ak47",
            projectile_template = default_projectile_template,
            explosion_template,
        } = opts;

        super();
        this.weapon_name = weapon_name;
        this.projectile_template = projectile_template;
        this.explosion_template = explosion_template;
    }

    override OnGunFire(event) {
        const weapon_name = event.weapon.GetClassName();
        const player_pawn = event.weapon.GetOwner();
        if (weapon_name == this.weapon_name) {
            this.fireProjectile(player_pawn);
        }
    }
    
    private fireProjectile(player_pawn: CSPlayerPawn) {
        
    }
}

