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
import { FindSoundTemplate } from "../base/Asset.ts";

function ErrorMessage(msg) {
    CSS.Msg("Game Announcer Error: " + msg);
}

function AttachSoundToPlayer(obj) {
    obj = obj || {};
    const {
        player_pawn,
        soundevent_name,
    } = obj;
    if (!(player_pawn instanceof CSPlayerPawn)) {
        ErrorMessage("player_pawn is not an instance of CSPlayerPawn.");
        return null;
    }
    if (soundevent_name === null) return null;

    let soundevent_template = FindSoundTemplate();
    if (!(soundevent_template instanceof PointTemplate)) {
        ErrorMessage(`point_template named " + '${template_target}' is missing...`);
        return null;
    }
    
    const player_position = player_pawn.GetEyePosition();
    let soundevent_spawn = soundevent_template.ForceSpawn(player_position);
    if (!(soundevent_spawn instanceof Array)) {
        ErrorMessage("Failed to spawn soundevent...");
        return null;
    }
    let empty_entity = soundevent_spawn[0];
    let soundevent_entity = soundevent_spawn[1];
    
    // Slight Workaround: attempting to parent the point_soundevent
    // directly failed to work, so i'm parenting a
    // prop_dynamic_ornament, which has the point_soundevent parented.
    empty_entity.Teleport({position: player_position});
    empty_entity.SetParent(player_pawn);
    //CSS.EntFireAtTarget({target: empty_entity, input: "SetParentAttachment", value: "head_0"});
    CSS.EntFireAtTarget({target: soundevent_entity, input: "SetSoundEventName", value: soundevent_name});
    CSS.DebugSphere({center: player_position, radius: 5, duration: 5});
    return soundevent_entity;
}


class PlayerSoundEventController {
    constructor(opts = {}) {
        let {
            player_pawn,
            soundevent_timeout = 5., // Seconds
        } = opts;
        this.player_pawn = player_pawn;
        this.player_name = GetPlayerName(player_pawn);
        this.event_listing = [];
        this.current_sound_is_playing = false;
        this.soundevent_timeout = soundevent_timeout;
    }
    
    queueSound(obj) {
        obj = obj || {};
        const {
            soundevent_name,
            soundevent_entity,
        } = obj;

        const connection_id = CSS.ConnectOutput(soundevent_entity, "OnSoundFinished", (_) => {
            this._popQueue();
            this.current_sound_is_playing = false;
            CSS.DisconnectOutput(connection_id);
        });
        this._pushQueue({soundevent_name, soundevent_entity});
    }

    _pushQueue(obj) {
        this.event_listing.push(obj);
    }

    _popQueue() {
        let elem = this.event_listing[0];
        this.event_listing = this.event_listing.slice(1, this.event_listing.length);
        return elem;
    }

    _startNextSound() {
        if (this.event_listing.length <= 0) return;
        const {soundevent_name, soundevent_entity} = this.event_listing[0];
        CSS.EntFireAtTarget({target: soundevent_entity, input: "StartSound"});
        this.event_listing[0].time_started = CSS.GetGameTime();
        const player_name = GetPlayerName(this.player_pawn) || "N/A";
        CSS.Msg(`Played Soundevent '${soundevent_name}' to Player '${player_name}'`);
        this.current_sound_is_playing = true;
    }

    think() {
        if (this.event_listing.length <= 0) return;

        // Edge Case: The Sound Started, but OnSoundFinished failed to fire
        // So we kill it after a timeout period to continue the event queue.
        const { soundevent_name, time_started = CSS.GetGameTime() } = this.event_listing[0];
        const current_game_time = CSS.GetGameTime();
        if ((current_game_time - time_started) >= this.soundevent_timeout) {
            CSS.Msg(`Sound Event '${soundevent_name}' Timed Out!`);
            this.current_sound_is_playing = false;
            this._popQueue();
        }

        if (!this.current_sound_is_playing) {
            this._startNextSound();
        }
    }
}

export default class SoundEventSystem extends System {
    constructor(obj = {}) {
        super();

        let {
            tick_rate = 128.,
            soundevent_timeout = 5., // Seconds
        } = obj;
        
        this.SetTick(tick_rate);
        this.player_listing = new Map();
        this.soundevent_timeout = soundevent_timeout;
    }

    override HandleActivate() {
        CSS.Msg("Sound Event System Activated!");
    }
    
    public PlaySoundToPlayer(player_pawn, soundevent_name, immediate=false) {
        const soundevent_entity = AttachSoundToPlayer({player_pawn, soundevent_name});
        const player_name = GetPlayerName(player_pawn) ?? "N/A";
        if (!soundevent_entity) return;

        if (immediate) {
            // Play Immediately.
            CSS.EntFireAtTarget({target: soundevent_entity, input: "StartSound"});
            CSS.Msg(`Played Soundevent '${soundevent_name}' to Player '${player_name}'`);
        }
        else {
            // Place in Sound Queue.
            this.queueSoundToPlayer({player_pawn, soundevent_entity, soundevent_name});
            CSS.Msg(`Queued Soundevent '${soundevent_name}' to Player '${player_name}'`);
        }
    }
    
    private queueSoundToPlayer(obj) {
        obj = obj || {};
        const {
            player_pawn,
            soundevent_name,
            soundevent_entity,
        } = obj;
        if (!(player_pawn instanceof CSPlayerPawn)) return;
        const event_controller = this._getPlayer(player_pawn);
        event_controller.queueSound({soundevent_entity, soundevent_name});
    }

    private _getPlayer(player_pawn) {
        if (!this.player_listing.has(player_pawn))
            this.player_listing.set(player_pawn, new PlayerSoundEventController(
                {player_pawn, soundevent_timeout: this.soundevent_timeout}));
        return this.player_listing.get(player_pawn);
    }

    private _hasPlayer(player_pawn) {
        return this.player_listing.has(player_pawn);
    }

    private _cleanup() {
        for (const player_pawn of this.player_listing.keys()) {
            if (!(player_pawn instanceof CSPlayerPawn) &&
	        !player_pawn.IsValid()) {
	        this.player_listing.delete(player_pawn);
            }
        }
    }

    override Think() {
        for (const event_controller of this.player_listing.values()) {
            event_controller.think();
        }
        this._cleanup();
    }
}

//const soundEventSystem = new SoundEventSystem();


