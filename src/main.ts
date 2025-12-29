import { Instance as CSS } from "cs_script/point_script";
import {
    // Mounting System
    Mount, System,
    
    // Utils
    GetPlayerName,

    // Systems
    PlayerHealthRegenerationSystem,
    PlayerModelChangerSystem,
    GameAnnouncerSystem,
    SoundEventSystem,
} from "./index.ts";
CSS.Msg("Scriptedeuch!");
let mount = Mount.instance;

const soundEventSystem = new SoundEventSystem({debug: false});
const gameAnnouncerSystem = new GameAnnouncerSystem({callback:(obj) => {
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
    soundEventSystem.PlaySoundToPlayer(player_pawn, "Vote.Passed", true);
}});


// Registering our Systems
mount.register("SoundEvents", soundEventSystem);
mount.register("GameAnnouncer", gameAnnouncerSystem);
mount.register("HealthRegen", new PlayerHealthRegenerationSystem());
mount.register("PlayerModelChanger", new PlayerModelChangerSystem({point_script_targetname: "main.script"}));

// Listing off what's running
CSS.Msg("Systems: " + mount.list().join(", "))
mount.start(); // go
