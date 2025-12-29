import {
    Instance as CSS,
    CSPlayerPawn,
} from "cs_script/point_script";
import {
    // Mounting System
    Mount, System,
    
    // Utils
    GetPlayerName,

    // Systems
    PlayerHealthRegenerationSystem,
    GameAnnouncerSystem,
    SoundEventSystem,
} from "./index.ts";
let mount = Mount.instance;

CSS.Msg("Scriptedeuch!");

class EventMessageSystem extends System {
    constructor() {
        super();
        this.SetTickInterval(5); // 5 Seconds Per Tick
        this.num_ticks = 0;
    }

    private getPlayerName(player_pawn) {
        return GetPlayerName(player_pawn) ?? "N/A";
    }
    
    override HandleActivate() {
        CSS.Msg("Event: OnActivate!");
    }

    override HandleScriptReloadBefore() {
        CSS.Msg("Event: OnScriptReload:Before");
    }
    
    override HandlePlayerKill(event) {
        CSS.Msg("Event: OnPlayerKill - " + this.getPlayerName(event.player));
    }

    override HandlePlayerLand(event) {
        CSS.Msg("Event: OnPlayerLand - " + this.getPlayerName(event.player));
    }
    
    override Think() {
        CSS.Msg("Event: Think - " + this.num_ticks);
        this.num_ticks++;
    }
}

const gameAnnouncerSystem = new GameAnnouncerSystem({callback:(obj) => {
    obj = obj || {};
    let {player_pawn, player_stats} = obj;
    let {kills_with_same_weapon = 0,
         killing_spree_weapon_name = null,
         kills_since_interval = 0,
         kills_since_death = 0,
         enemy_killed = null, // CSPlayerPawn, last enemy killed (or teammate)
         enemy_had_killing_spree = false,
         enemy_was_teammate = false} = player_stats;

    CSS.Msg("Player Name: " + GetPlayerName(player_pawn));
    CSS.Msg("Player Stats: " + JSON.stringify(player_stats));
}});

mount.register("GameAnnouncer", gameAnnouncerSystem);
mount.register("EventMessages", new EventMessageSystem());
mount.register("HealthRegen", new PlayerHealthRegenerationSystem());

CSS.Msg("Systems: " + mount.list().join(", "))
mount.start(); // go

