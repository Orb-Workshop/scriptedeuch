import { Instance as CSS } from "cs_script/point_script";
import {
    
    // Base of the Library Framework
    Base,

    // Mountable Systems in Framework, which extend Base.System
    System,

    // Spawnable Actors in Framework, which extend Base.Actor
    Actor,
    
    // Events Handling Library built on top of `Base.Actor` actor pool.
    Event,

    // Helper classes for wrapping and adapting to source2 entities.
    Helper,
    
    // Math data types that extend the cs2 Vector and QAngle data interface.
    Math,

    // Randomness, seeded and unseeded.
    Random,

    // Noise library
    Noise,

    // Utility Functions
    Util,
    
} from "./index";

const {
    Mount,
    ThinkTask,
    MessageTask,
} = Base;

CSS.Msg("Scriptedeuch!!");


const soundEventSystem = Mount.Register(
    "SoundEvents",
    new System.SoundEventSystem({
        debug: false
    }));

const gameAnnouncerSystem = Mount.Register(
    "GameAnnouncer",
    new System.GameAnnouncerSystem({callback:(obj) => {
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
    }}));

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
        delta: inst.GetDelta(),
    });
}, 5);
let TimedEvent2 = new ThinkTask((inst) => {
    ThinkTask.SendMessage("Echo", {
        data: "Some Data2",
        idx: idx++,
        alive_time: inst.GetLifetime(),
        delta: inst.GetDelta(),
    });
}, 4);

//let MessageEcho = new MessageTask((key, data, inst) => {
//    if (key == "Echo") CSS.Msg("Echo: " + JSON.stringify(data));
//});

try {
    //new Event.Listener("Echo").On("echo", (msg) => CSS.Msg(`Echo Message: ${msg}`));
    //const sender = new Event.Sender("Echo");
    //const echo = (msg) => sender.Send("echo", msg);
    //echo("Hello World!");
} catch(e) {
    CSS.Msg(`Error Events: ${e.toString()}`);
}


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

        new Actor.PlayerInvincibility(player_pawn, { duration: 1.0 });
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
    const inflictor = activator;
    if (!caller?.IsValid()) return;
    const position = Math.Vector3.From(caller.GetAbsOrigin());
    let explosion = new Actor.Explosion({
        position,
        debug: false,
    }).Explode(inflictor);
    explosion.Remove();
});

function Init() {
    const fade = Helper.EnvironmentFade.Find("scriptedeuch.env_fade");
    const hud_hint = Helper.EnvironmentHudHint.Find("scriptedeuch.hud_blind_message");
    const shake = Helper.EnvironmentShake.Find("scriptedeuch.env_shake");
    const button = Helper.FuncButton.Find("scriptedeuch.fade_button");
    button.OnPressed(({ activator }) => {
        fade.Fade();
        hud_hint.ShowHudHint({ activator });
        shake.StartShake();
    });
    CSS.Msg("Is this valid? " + fade.IsValid());
}

try {
    Init();
    Event.OnRoundStart(() => {
        Init();
    });
}
catch(e) {
    CSS.Msg("Error: " + e.toString());
}

const FreezeTime = Base.Mount.Register("FreezeTime", new System.FreezeTimeSystem());
new Base.ThinkTask(() => {
    //CSS.Msg(`Elapsed Freeze Time: ${FreezeTime.GetElapsedFreezeTime()}`);
    //CSS.Msg(`Elapsed Round Time: ${FreezeTime.GetElapsedRoundTime()}`);
}, 1/128);



// Listing off what's running
CSS.Msg("Systems: " + Mount.List().join(", "))
Mount.Start(); // go

