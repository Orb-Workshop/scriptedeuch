import {
    Instance as CSS,
    CSPlayerController,
    CSPlayerPawn,
} from "cs_script/point_script";
import System from "../base/System.ts";
import { default as Vector } from "../math/Vector3.ts";

export default class DeathmatchSpawnerSystem extends System {
    constructor() {
        super();
        this.SetTick(5); // 5 Ticks Per Second
        this._disableAllSpawners();
        this.enabled_spawners = [];
    }

    static RetrievePlayerSpawns() {
        const deathmatch_spawns = CSS.FindEntitiesByName("info_deathmatch_spawn");
        return deathmatch_spawns;
    }

    static GetPlayerControllers() {
        let player_listing = [];
        for (let i = 0; i <= 64; i++) {
            let player_controller = CSS.GetPlayerController(i);
            if (player_controller instanceof CSPlayerController) {
	        player_listing.push(player_controller);
            }
        }
        return player_listing;
    }

    // Players currently on a team and actively trying to play, alive or dead.
    static GetActivePlayers() {
        const TEAM_NUMBER_T = 2;
        const TEAM_NUMBER_CT = 3;
        return DeathmatchPlayerSpawner.GetPlayerControllers().filter((player_controller) => {
            const team_number = player_controller.GetTeamNumber();
            return (team_number === TEAM_NUMBER_T || team_number === TEAM_NUMBER_CT);
        });
    }

    static GetAlivePlayers() {
        return DeathmatchPlayerSpawner.GetActivePlayers().filter((player_controller) => {
            const player_pawn = player_controller.GetPlayerPawn();
            return (player_pawn instanceof CSPlayerPawn &&
	        player_pawn.IsValid() &&
	        player_pawn.IsAlive());
        });
    }

    static GetDeadPlayers() {
        return DeathmatchPlayerSpawner.GetActivePlayers().filter((player_controller) => {
            const player_pawn = player_controller.GetPlayerPawn();
            return (!(player_pawn instanceof CSPlayerPawn) ||
	        !player_pawn.IsValid() ||
	        !player_pawn.IsAlive());
        });
    }

    _disableAllSpawners() {
        this.player_spawners.forEach((spawner) => {
            CSS.EntFireAtTarget({target: spawner, input: "SetDisabled"});
        });
        this.enabled_spawners = [];
    }

    _enableSpawner(spawner) {
        CSS.EntFireAtTarget({target: spawner, input: "SetEnabled"});
        this.enabled_spawners.push(spawner);
    }

    _getDisabledSpawners() {
        return DeathmatchPlayerSpawner.RetrievePlayerSpawns().filter((spawner) => {
            return (this.enabled_spawners.indexOf(spawner) < 0);
        });
    }

    _scoreSpawner(spawner) {
        const spawner_position = spawner.GetAbsOrigin();
        const player_positions = DeathmatchPlayerSpawner.GetAlivePlayers().map((player_controller) => {
            const player_pawn = player_controller.GetPlayerPawn();
            return player_pawn.GetAbsOrigin();
        });
        const active_spawn_positions = this.enabled_spawners.map((spawner) => {
            return spawner.GetAbsOrigin();
        });

        const all_positions = player_positions.concat(active_spawn_positions);
        let total_score = 0;
        all_positions.forEach((position) => {
            const distance = Vector.distance(spawner_position, position);
            total_score += distance;
        });
        return [spawner, total_score];
    }

    override Think() {
        this._disableAllSpawners();
        CSS.Msg("Number of Dead Players: " + DeathmatchPlayerSpawner.GetDeadPlayers().length);
        DeathmatchPlayerSpawner.GetDeadPlayers().forEach((_) => {
            const spawner_scores = this._getDisabledSpawners().map((spawner) => {
	        return this._scoreSpawner(spawner);
            });

            // Lowest Score --> Highest Score
            let sorted_spawner_scores = spawner_scores.sort((a, b) => {
	        let [, x] = a;
	        let [, y] = b;
	        if (x < y) return -1;
	        else if (x === y) return 0;
	        else return 1;
            });

            CSS.Msg("Spawner Scores");
            CSS.Msg(spawner_scores);

            // Choose the highest score
            const [best_spawner] = sorted_spawner_scores.pop();
            this._enableSpawner(best_spawner);
        });
    }

    override OnPlayerKill() {
        this.Think();
    }

    override OnPlayerActivate() {
        this.Think();
    }
}
