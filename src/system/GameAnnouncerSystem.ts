import {
    Instance as CSS,
    CSPlayerPawn,
    CSPlayerController,
    PointTemplate,
    BaseModelEntity,
    Entity,
} from "cs_script/point_script";
import { GetPlayerName } from "../utils.ts";
import System from "../base/System.ts";

// Deathmatch Game Mode
function IsFreeForAll() {
    return CSS.GetGameType() == 1 && CSS.GetGameMode() == 2;
}

export default class GameAnnouncerSystem extends System {
    constructor(opts = {}) {
        super();

        let {
            callback,
            kill_award_interval = 5.0, // Seconds,
        } = opts;
        this.player_listing = {};
        this.callback = callback;
        this.kill_award_interval = kill_award_interval;
        
        if (this.callback === undefined) throw new Error("No callback provided");
    }
    
    override HandleActivate() {
        CSS.Msg("Game Announcer System Activated!");
    }
    
    _resetPlayer(player_pawn) {
        const player_name = GetPlayerName(player_pawn);
        this.player_listing[player_name] = {
            kills_since_death: 0,        // Killing Sprees
            kills_since_interval: 0,     // Multi-Kill
            kills_with_same_weapon: 0,   // Weapon Killing Sprees
            killing_spree_weapon_name: null,  // Weapon Used in Killing Spree
            time_since_last_kill: CSS.GetGameTime(),
            enemy_killed: null,
            enemy_had_killing_spree: false,
            enemy_was_teammate: false,
        };
    }

    _checkPlayer(player_pawn) {
        const player_name = GetPlayerName(player_pawn);
        if (player_name === null) return null;

        if (!(player_name in this.player_listing)) {
            this._resetPlayer(player_pawn);
        }
        return player_name;
    }

    _getPlayer(player_pawn) {
        const player_name = this._checkPlayer(player_pawn);
        if (!player_name) return null;
        return this.player_listing[player_name];
    }

    _hasKillingSpree(player_pawn) {
        let { kills_since_death } = this._getPlayer(player_pawn);
        return kills_since_death >= 5;
    }

    _areTeammates(player_pawn_a, player_pawn_b) {
        const team_number_a = player_pawn_a.GetTeamNumber();
        const team_number_b = player_pawn_b.GetTeamNumber();
        return (!IsFreeForAll() && team_number_a == team_number_b);
    }

    _recordKill(player_pawn_attacker, player_pawn_death, weapon_name) {
        let player_stats = this._getPlayer(player_pawn_attacker);
        if (!player_stats) return;
        const current_game_time = CSS.GetGameTime();
        const kill_award_interval = this.kill_award_interval;

        player_stats.enemy_killed = player_pawn_death;
        player_stats.enemy_had_killing_spree = this._hasKillingSpree(player_pawn_death);

        // Killed Friendly
        if (this._areTeammates(player_pawn_attacker, player_pawn_death)) {
            player_stats.enemy_was_teammate = true;
            this.callback({
	        player_pawn: player_pawn_attacker,
	        player_pawn_death: player_pawn_death,
	        player_stats: player_stats,
            });
            return; // Don't record any other stats.
        }
        player_stats.enemy_was_teammate = false;

        // Killing Spree
        player_stats.kills_since_death += 1;

        // Multi-Kills
        if ((current_game_time - player_stats.time_since_last_kill) <= kill_award_interval) {
            player_stats.kills_since_interval += 1;
        }
        else {
            player_stats.kills_since_interval = 1;
        }

        // Weapon Killing Spree
        if (player_stats.killing_spree_weapon_name === weapon_name) {
            player_stats.kills_with_same_weapon += 1;
        }
        else {
            player_stats.killing_spree_weapon_name = weapon_name;
            player_stats.kills_with_same_weapon = 1;
        }

        player_stats.time_since_last_kill = current_game_time;
        this.callback({
            player_pawn: player_pawn_attacker,
            player_pawn_death: player_pawn_death,
            player_stats: player_stats,
        });
    }

    _recordDeath(player_pawn) {
        this._resetPlayer(player_pawn);
    }

    override HandlePlayerKill(event) {
        const player_pawn_attacker = event.attacker;
        const player_pawn_death = event.player;
        const weapon_base = event.weapon;
        const weapon_name = weapon_base.GetData().GetName();

        if (player_pawn_attacker instanceof CSPlayerPawn)
            this._recordKill(player_pawn_attacker, player_pawn_death, weapon_name);

        if (player_pawn_death instanceof CSPlayerPawn)
            this._recordDeath(player_pawn_death);
    }
}

//
// Example
//
/*
const gameAnnouncerSystem = new GameAnnouncerSystem((obj) => {
    obj = obj || {};
    let {player_pawn, player_stats} = obj;
    let {kills_with_same_weapon = 0,
         killing_spree_weapon_name = null,
         kills_since_interval = 0,
         kills_since_death = 0,
         enemy_killed = null, // CSPlayerPawn, last enemy killed (or teammate)
         enemy_had_killing_spree = false,
         enemy_was_teammate = false} = player_stats;

    CSS.Msg("Player Stats Have Changed: " + JSON.stringify(player_stats));
});
*/
