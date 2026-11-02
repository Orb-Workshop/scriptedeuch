/** 
    Adds the ability to 'dash' when you secondary attack with knife.
 */
import {
    Instance as CSS,
    CSWeaponBase,
} from "cs_script/point_script";
import * as Base from "../base";
import * as SEMath from "../math";

const DefaultDashSpeed = 200;

export default class KnifeDashSystem extends Base.System {
    dash_speed: number;
    constructor(dash_speed = DefaultDashSpeed) {
        super();
        this.dash_speed = dash_speed;
    }

    override OnKnifeAttack({ weapon, attackType }): void {
        const attackType_secondary = 2; // CSWeaponAttackType.SECONDARY
        if (!(attackType === attackType_secondary)) return;
        const player = weapon.GetOwner();
        const direction = SEMath.QAngle.From(player.GetEyeAngles()).direction();
        const dash_velocity = direction.scale(this.dash_speed);
        const player_velocity = SEMath.Vector3.From(player.GetAbsVelocity());
        const velocity = dash_velocity.add(player_velocity);
        player.Teleport({ velocity });
    }
}
