/** 
    Adds the ability for players to 'slide' while they're crouching,
    maintaining their velocity, or even gaining velocity when
    traversing down angled ramps.
*/
import {
    Instance as CSS,
    CSPlayerPawn,
} from "cs_script/point_script";
import * as Base from "../base";
import * as SEMath from "../math";


const DefaultGroundOffset = 10;


function GetPlayers(): Array<CSPlayerPawn> {
    return CSS.FindEntitiesByClass("player")
        .filter(e => e?.IsValid())
        .filter(e => e?.IsAlive());
}

function GetGroundNormal(player: CSPlayerPawn, penetration: number = DefaultGroundOffset):
    SEMath.Vector3 | null {
    let start_position = SEMath.Vector3.From(player.GetAbsOrigin());
    let end_position = SEMath.Vector3.From(start_position);
    start_position.z += penetration; // Hover above surface by `penentration` amount
    end_position.z -= penetration; // Penetrate surface by `penetration` amount
    
    
    // Get the surface normal using a trace
    const trace = CSS.TraceLine({
        start: start_position,
        end: end_position,
        ignorePlayers: true,
    });

    if (trace.didHit) return SEMath.Vector3.From(trace.normal);
    return null;
}

export interface PlayerSlidingData {
    playerland_velocity: SEMath.Vector3;
}

export default class PlayerSlidingSystem extends Base.System {
    player_data: Map<CSPlayerPawn, PlayerSlidingData> = new Map();
    constructor() {
        super();
    }

    private getPlayerGroundPosition(player: CSPlayerPawn): SEMath.Vector3 | null {
        let start_position = SEMath.Vector3.From(player.GetAbsOrigin());
        let end_position = SEMath.Vector3.From(start_position);
        start_position.z += DefaultGroundOffset; // Hover above surface by `penentration` amount
        end_position.z -= 1000; // Penetrate surface by `penetration` amount
        
        // Get the surface end.
        const trace = CSS.TraceLine({
            start: start_position,
            end: end_position,
            ignorePlayers: true,
        });

        if (!trace.didHit) return null;
        return SEMath.Vector3.From(trace.end);
    }
    
    
    override Think() {
        const delta = this.GetDelta();
        GetPlayers().forEach(player => {
            if (!player.IsCrouched()) return; // Not Crouching
            const ground_normal = GetGroundNormal(player);
            if (!ground_normal) { return; } // Still in the Air.
            CSS.Msg("Ground Normal: " + ground_normal.toString());

            // Keep a pocket of air between the player and the actual ground.
            const position = player.GetAbsOrigin();
            const ground_position = this.getPlayerGroundPosition(player);
            if (!ground_position) return;
            const ground_offset = DefaultGroundOffset - ground_position.sub(position).magnitude();
            position.z += ground_offset;
            CSS.Msg(`Ground Offset: ${ ground_offset }`);

            const velocity = SEMath.Vector3.From(player.GetAbsVelocity());
            velocity.z = 0;
            //velocity.z += 20 * delta;
            player.Teleport({ position, velocity });
        });
    }
}
