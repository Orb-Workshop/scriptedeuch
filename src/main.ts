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
    SchedulingSystem,
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

const schedulingSystem = new SchedulingSystem();

const projectileWeaponSystem = new ProjectileWeaponSystem({
    weapon_class: "weapon_ak47",
    projectile_damage: 1,
    projectile_speed: 33_480, // M80 Round, Inches Per Second
    projectile_gravity_enabled: true,
    projectile_collision_radius: 1,
});

projectileWeaponSystem.setInitHook(({entity}) => {
    CSS.EntFireAtTarget({target: entity, input: "DisableGravity", delay: 1});
    schedulingSystem.setTimeout(() => {
        if (entity?.IsValid()) {
            entity?.Teleport({velocity: entity?.GetAbsVelocity()})
            CSS.Msg("Boop!");
        }
    }, 1100);
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
Mount.Register("Scheduling", schedulingSystem);

// Listing off what's running
CSS.Msg("Systems: " + Mount.List().join(", "))
Mount.Start(); // go
