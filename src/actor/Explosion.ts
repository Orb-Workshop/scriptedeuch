import {
    Instance as CSS,
    Vector as VectorType,
    CSPlayerPawn,
    Entity,
} from "cs_script/point_script";
import * as Base from "../base";
import * as Math from "../math";
import * as Util from "../util";

/** 

    Allows you to perform an 'explosion effect' at the given
    `position`, which damages players and applies a force. The damage can be attributed to a player.

*/
export default class Explosion extends Base.Actor {
    static Tag: string = "ExplosionTag";
    private position: Vector3;
    //
    private radius: number;
    private force_falloff: number;
    private damage_falloff: number;
    //
    private force: number; // TODO: what is this unit?
    private damage: number;
    private debug: boolean;
    
    constructor({
        position = Math.Vector3.Zero,
        //
        radius = 400, // sphere radius
        force_falloff = 50, // half force at 75 units
        damage_falloff = 25, // half damage at 50 units
        //
        force = 1000,
        damage = 100,
        debug = true,
    }) {
        super();
        this.position = position;
        //
        this.radius = radius;
        this.force_falloff = force_falloff;
        this.damage_falloff = damage_falloff;
        //
        this.force = force;
        this.damage = damage;
        this.debug = debug;
    }
    
    static GetPlayers(): Array<CSPlayerPawn> {
        return CSS.FindEntitiesByClass("player");
    }

    static GetAlivePlayers(): Array<CSPlayerPawn> {
        return Explosion.GetPlayers().filter((player) => {
            if (!player?.IsValid() || !player.IsAlive()) return false;
            const team_number = player.GetTeamNumber();
            return team_number == 2 || team_number == 3;
        });
    }

    private getPlayerCenter(player_pawn: CSPlayerPawn): Vector3 {
        const CHEST_OFFSET = 50.0;
        let player_position = Math.Vector3.From(player_pawn.GetAbsOrigin());
        player_position.z += CHEST_OFFSET // Origin sits at the feet, we bring it up to the chest
        return player_position;
    }
    
    private checkPlayerCollision(player_pawn: CSPlayerPawn): boolean {
        const player_center = this.getPlayerCenter(player_pawn);
        const distance = this.position.distance(player_center);
        if (this.debug) {
            CSS.Msg(`Player Name: ${Util.GetPlayerName(player_pawn)}`);
            CSS.Msg(`Distance: ${distance}`);
        }
        if (distance <= this.radius) return true;
        return false;
    }

    private handlePlayerDamage(player_pawn: CSPlayerPawn, inflictor: Entity): void {
        const distance = this.position.distance(this.getPlayerCenter(player_pawn));
        const easeFunction = (d) => {
            if (d <= this.damage_falloff) return 1.0;
            else return 1.0 - new Math.LinearEasing(this.damage_falloff, this.radius).At(d);
        }
        const damage = this.damage * easeFunction(distance);
        player_pawn.TakeDamage({
            inflictor,
            damage,
            attacker: inflictor,
        });
        if (this.debug) {
            CSS.Msg(`Damage: ${damage}`);
        }
    }

    private handlePlayerForce(player_pawn: CSPlayerPawn): void {
        const player_center = this.getPlayerCenter(player_pawn);
        const distance = this.position.distance(player_center);
        const easeFunction = (d) => {
            if (d <= this.force_falloff) return 1.0;
            else return 1.0 - new Math.LinearEasing(this.force_falloff, this.radius).At(d);
        }
        const force = this.force * easeFunction(distance);
        const force_direction = player_center.sub(this.position).normalize();
        
        // TODO: come up with a better force and velocity relationship for impulse force.
        
        const player_velocity = Math.Vector3.From(player_pawn.GetAbsVelocity());
        const velocity = player_velocity.add(force_direction.scale(force));
        player_pawn.Teleport({ velocity });
        if (this.debug) {
            CSS.Msg(`Force: ${force}`);
        }
    }
    
    public Explode(inflictor: CSPlayerPawn = null): Explosion | void {
        if (this.debug) {
            CSS.DebugSphere({
                center: this.position,
                radius: this.radius,
                duration: 1, // seconds
            });
        }
        Explosion.GetAlivePlayers().forEach((player) => {
            if (this.checkPlayerCollision(player)) {
                this.handlePlayerDamage(player, inflictor);
                this.handlePlayerForce(player);
            }
        });
        return this;
    }
}

