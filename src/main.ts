import { Instance as CSS } from "cs_script/point_script";
import {
    // Mounting System
    Mount,
    System,
    Actor,
    ThinkTask,
    MessageTask,

    // Utils
    GetPlayerName,

    // Mountable Systems
    MSystem,

    // Spawnable Actors
    SActor,
    
} from "./index";
CSS.Msg("Scriptedeuch!");

const soundEventSystem = new MSystem.SoundEventSystem({debug: false});
const gameAnnouncerSystem = new MSystem.GameAnnouncerSystem({callback:(obj) => {
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
const dialogSystem = new MSystem.DialogSystem();
let dialog = dialogSystem.CreateDialog();

const schedulingSystem = new MSystem.SchedulingSystem();

const projectileWeaponSystem = new MSystem.ProjectileWeaponSystem({
    weapon_class: "weapon_ak47",
    projectile_damage: 1,
    // Note: Projectile speed is clamped by engine(?)
    projectile_speed: 33_480, // M80 Round, Inches Per Second
    projectile_gravity_enabled: false,
    projectile_collision_radius: 10,
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

let idx = 0;
let TimedEvent = new ThinkTask((inst) => {
    ThinkTask.SendMessage("Echo", {
        data: "Some Data",
        idx: idx++,
        alive_time: inst.GetLifetime(),
    });
}, 5);

let TimedEvent2 = new ThinkTask((inst) => {
    ThinkTask.SendMessage("Echo", {
        data: "Some Data2",
        idx: idx++,
        alive_time: inst.GetLifetime(),
    });
}, 4);

let MessageEcho = new MessageTask((name, data, inst) => {
    if (name == "Echo") CSS.Msg("Echo: " + JSON.stringify(data));
});

let StopProjectiles = new ThinkTask(() => {
    ThinkTask.SendMessage("KillAll");
}, 10);


class GlockShot extends System {
    constructor() {
        super();
    }

    OnGunFire(event) {
        const weapon_base = event.weapon;
        const class_name = weapon_base?.GetClassName();
        if (class_name !== "weapon_glock") return;
        let projectile = SActor.Projectile.FromWeapon(weapon_base, {
            
        }).Fire();
    }
}


CSS.Msg("Test1");
let Projectile = new SActor.Projectile({fizzle_delay: 1});
CSS.Msg("Test2");

// Registering our Systems
Mount.Register("SoundEvents", soundEventSystem);
Mount.Register("GameAnnouncer", gameAnnouncerSystem);
Mount.Register("HealthRegen", new MSystem.PlayerHealthRegenerationSystem());
Mount.Register("PlayerModelChanger", new MSystem.PlayerModelChangerSystem({
    point_script_targetname: "main.script"
}));
Mount.Register("Dialog", dialogSystem);
Mount.Register("ProjectileTest", projectileWeaponSystem);
Mount.Register("Scheduling", schedulingSystem);
Mount.Register("GlockShot", new GlockShot());

// Listing off what's running
CSS.Msg("Systems: " + Mount.List().join(", "))
Mount.Start(); // go
