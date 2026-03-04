import {
    Instance as CSS,
    CSInputs,
} from "cs_script/point_script";
import * as Base from "../base";
import * as Util from "../util";

const DEFAULT_JUMP_VELOCITY = 350;

export default class DoubleJumpSystem extends Base.System {
    private jump_velocity: number;
    constructor(jump_velocity: number = DEFAULT_JUMP_VELOCITY) {
        super();
        this.jump_velocity = jump_velocity;
    }

    override Think(): void {
        Util.AllPlayers().forEach((player) => {
            if (player.GetGroundEntity()) {
                player.is_double_jump_ready = false;
                player.is_double_jump_used = false;
                return;
            }
            if (!player.WasInputJustPressed(CSInputs.JUMP)) return;
            if (player.is_double_jump_used) return;
            if (!player.is_double_jump_ready) {
                player.is_double_jump_ready = true;
                return;
            }
            
            const velocity = player.GetAbsVelocity();
            velocity.z += this.jump_velocity;
            
            player.Teleport({ velocity });
            player.is_double_jump_used = true;
        });
    }
}
