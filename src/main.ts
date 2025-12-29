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

    // Asset Discovery
    FindSoundTemplate,
} from "./index.ts";
CSS.Msg("Scriptedeuch!");
let mount = Mount.instance;

const soundEventSystem = new SoundEventSystem();
mount.register("SoundEventSystem", soundEventSystem);


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
    soundEventSystem.PlaySoundToPlayer(player_pawn, "UI.CounterBeep");
}});
mount.register("GameAnnouncer", gameAnnouncerSystem);
mount.register("HealthRegen", new PlayerHealthRegenerationSystem());

CSS.Msg("Systems: " + mount.list().join(", "))
mount.start(); // go
