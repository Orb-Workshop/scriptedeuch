import { Instance as CSS } from "cs_script/point_script";
import {
    // Mounting System
    Mount, System,
    
    // Utils
    GetPlayerName,

    // Mountable Systems
    PlayerHealthRegenerationSystem,
    PlayerModelChangerSystem,
    GameAnnouncerSystem,
    SoundEventSystem,
    DialogSystem,
    ProjectileWeaponSystem,
} from "./index.ts";
CSS.Msg("Scriptedeuch!");

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
const dialogSystem = new DialogSystem();
let dialog = dialogSystem.CreateDialog();

const projectileWeaponSystem = new ProjectileWeaponSystem({
    projectile_speed: 1200,
});

// Registering our Systems
Mount.Register("SoundEvents", soundEventSystem);
Mount.Register("GameAnnouncer", gameAnnouncerSystem);
Mount.Register("HealthRegen", new PlayerHealthRegenerationSystem());
Mount.Register("PlayerModelChanger", new PlayerModelChangerSystem({
    point_script_targetname: "main.script"
}));
Mount.Register("Dialog", dialogSystem);
Mount.Register("ProjectileTest", projectileWeaponSystem);


// Listing off what's running
CSS.Msg("Systems: " + Mount.List().join(", "))
Mount.Start(); // go
