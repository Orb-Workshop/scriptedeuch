import { Instance as CSS } from "cs_script/point_script";
import {
    
    // Base of the Library Framework
    Base,

    // Mountable Systems in Framework, which extend Base.System
    System,

    // Spawnable Actors in Framework, which extend Base.Actor
    Actor,

    // Math data types that extend the cs2 Vector and QAngle data interface.
    Math,

    // Randomness, seeded and unseeded.
    Random,

    // Noise library
    Noise,

    // Utility Functions, Helper Classes
    Util,
    Helper,
    
} from "./index";

const {
    Mount,
    ThinkTask,
    MessageTask,
} = Base;

CSS.Msg("Scriptedeuch!!");

const soundEventSystem = new System.SoundEventSystem({debug: false});
Mount.Register("SoundEvents", soundEventSystem);

const gameAnnouncerSystem = new System.GameAnnouncerSystem({callback:(obj) => {
    let {player_pawn, player_stats} = obj;
    let {kills_with_same_weapon = 0,
         killing_spree_weapon_name = null,
         kills_since_interval = 0,
         kills_since_death = 0,
         enemy_killed = null, // CSPlayerPawn, last enemy killed (or teammate)
         enemy_had_killing_spree = false,
         enemy_was_teammate = false} = player_stats;

    CSS.Msg("Player Name: " + Util.GetPlayerName(player_pawn));
    CSS.Msg("Player Stats: " + JSON.stringify(player_stats));
    soundEventSystem.PlaySoundToPlayer(player_pawn, "Vote.Passed", true);
}});
Mount.Register("GameAnnouncer", gameAnnouncerSystem);
Mount.Register("HealthRegen", new System.PlayerHealthRegenerationSystem());
Mount.Register("PlayerModelChanger", new System.PlayerModelChangerSystem({
    point_script_targetname: "main.script"
}));
let Projectile = new Actor.Projectile({fizzle_delay: 1});


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

let MessageEcho = new MessageTask((key, data, inst) => {
    if (key == "Echo") CSS.Msg("Echo: " + JSON.stringify(data));
});

let StopProjectiles = new ThinkTask(() => {
    ThinkTask.SendMessage("KillAll");
}, 10);


class GlockShot extends Base.System {
    constructor() {
        super();
    }

    override OnGunFire(event) {
        const weapon_base = event.weapon;
        const class_name = weapon_base?.GetClassName();
        if (class_name !== "weapon_glock") return;
        let projectile = Actor.Projectile.FromWeapon(weapon_base, {
            damage: 150,
            speed: 10_000,
            disable_gravity: true,
            collision_radius: 10.0,
            remove_on_collision: true,
        }).Fire();
    }
}
Mount.Register("GlockShot", new GlockShot());

// TODO: Offer anonymous class helpers to quickly spinup system event listeners.
class InvincibilityTest extends Base.System {
    constructor() { super(); }
    override OnPlayerReset(event) {
        const player_pawn = event.player;
        const player_name = Util.GetPlayerName(player_pawn);
        if (player_name !== "ORB-NRG") return;

        new Actor.PlayerInvincibility(player_pawn, { duration: 60.0 });
    }
}
Mount.Register("InvincibilityTest", new InvincibilityTest());

let InvincibilityEcho = new MessageTask((key, data, inst) => {
    if (key == Actor.PlayerInvincibility.Tag) {
        const { event_name, event_data } = data;
        CSS.Msg(`Invincibility - ${event_name}`);
    }
});

CSS.OnScriptInput("Explosion", ({ activator, caller }) => {
    // activator is the person pressing the button or touching something
    // caller is the entity performing the IO, like an entity `info_target`.
    const inflictor = activator;
    if (!caller?.IsValid()) return;
    const position = Math.Vector3.From(caller.GetAbsOrigin());
    let explosion = new Actor.Explosion({
        position,
    }).Explode(inflictor);
    explosion.Remove();

    CSS.Msg(Util.GetPlayerName(activator));
    CSS.Msg(caller?.GetClassName());
});


// Listing off what's running
CSS.Msg("Systems: " + Mount.List().join(", "))
Mount.Start(); // go

