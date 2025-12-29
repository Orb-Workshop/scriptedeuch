import {
    Instance as CSS,
    CSPlayerPawn,
    CSPlayerController,
} from "cs_script/point_script";
import { GetPlayerName } from "../utils.ts";
import System from "../base/System.ts";

export default class PlayerHealthRegenerationSystem extends System {
    constructor(opts = {}) {
        super();
        let {
            regeneration_rate = 10.0,    // Health Per Second
            regeneration_delay = 5.0,    // Seconds
            max_health_recovery = 100.0, // Health Points
            tick_rate = 128.,            // Immediate, pegged at 64-Tick
        } = opts;
        this.regeneration_rate = regeneration_rate;
        this.regeneration_delay = regeneration_delay;
        this.max_health_recovery = max_health_recovery;
        this.player_listing = {};
        this.current_time = CSS.GetGameTime();
        this.SetTick(tick_rate);
    }

    override Think() {
        Object.keys(this.player_listing).forEach((player_name) => {
            const current_game_time = CSS.GetGameTime();
            let {
                player_pawn,
                fractional_health,
                time_since_damaged = current_game_time,
                time_since_last_thought = current_game_time,
            } = this.player_listing[player_name];
            this.player_listing[player_name].time_since_last_thought = current_game_time;
            if (!this._checkPlayer(player_pawn)) return;
            fractional_health = (fractional_health !== undefined) ? fractional_health : player_pawn.GetHealth();

            const time_delta_damaged = current_game_time - time_since_damaged;
            if (time_delta_damaged < this.regeneration_delay) return;

            const time_delta = current_game_time - time_since_last_thought;
            const health_to_regenerate = this.regeneration_rate * time_delta;

            let new_health = fractional_health + health_to_regenerate;
            if (Math.ceil(new_health) >= this.max_health_recovery)
                new_health = this.max_health_recovery;

            this.player_listing[player_name].fractional_health = new_health;
            player_pawn.SetHealth(Math.ceil(new_health));
        });
        this.cleanup();
    }
    
    _resetPlayer(player_pawn, afflicted_damage = 0) {
        const player_name = GetPlayerName(player_pawn);
        if (player_name === null) return;
        let total_health = player_pawn.GetHealth() - afflicted_damage;
        // Quick Bug Fix. Can't currently 'fully determine' how much
        // afflicted damage a player is getting IF they're wearing armor.
        if (total_health <= 0) total_health = 1;
        this.player_listing[player_name] = {
            player_pawn: player_pawn,
            fractional_health: total_health,
            time_since_damaged: CSS.GetGameTime(),
            time_since_last_thought: CSS.GetGameTime(),
        };
    }

    _checkPlayer(player_pawn) {
        return (player_pawn instanceof CSPlayerPawn &&
            player_pawn.IsValid() &&
            player_pawn.IsAlive() &&
            player_pawn.GetHealth() > 0 &&
            player_pawn.GetHealth() < this.max_health_recovery);
    }

    _getPlayer(player_pawn) {
        const player_name = GetPlayerName(player_pawn);
        if (player_name === null) return null;
        return this.player_listing[player_name];
    }

    override HandleBeforePlayerDamage(event) {
        const damage = event.damage || 0;
        const player_pawn = event.player;
        this._resetPlayer(player_pawn, damage);
        return {};
    }

    override HandleActivate() {
        CSS.Msg("Player Health Regeneration Activated!");
    }
    
    cleanup() {
        Object.keys(this.player_listing).forEach((player_name) => {
            let { player_pawn } = this.player_listing[player_name];
            if (!this._checkPlayer(player_pawn))
                delete this.player_listing[player_name];
        });
    }
}
