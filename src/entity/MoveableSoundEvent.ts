import { Instance as CSS } from "cs_script/point_script";
import * as Base from "../base";
import EntityHelper from "./EntityHelper";
import PointSoundEvent from "./PointSoundEvent";
import PointTemplate from "./PointTemplate";

/** Wraps the sound event template. */
export default class MoveableSoundEvent extends EntityHelper {
    private soundevent: PointSoundEvent; // parented to empty prop_dynamic
    constructor(empty_prop_dynamic_entity: Entity, sound_event_entity: Entity) {
        super(empty_prop_dynamic_entity); // prop_dynamic
        this.soundevent = new PointSoundEvent(sound_event_entity);
    }

    public static Spawn(soundevent_name, position = Math.Vector3.Zero): MoveableSoundEvent {
        const soundevent = new MoveableSoundEventSpawner().Spawn(position);
        soundevent.SetSoundEventName(soundevent_name);
        return soundevent;
    }
    
    SetSoundEventName(soundevent_name: string, opts): void {
        this.soundevent.SetSoundEventName(soundevent_name, opts);
    }
    
    StartSound(opts): void {
        this.soundevent.StartSound(opts);
    }

    StopSound(opts): void {
        this.soundevent.StopSound(opts);
    }
}

class MoveableSoundEventSpawner extends PointTemplate {
    private template = PointTemplate.Find(Base.Default.SOUND_EVENT_TEMPLATE);
    constructor() {
        super(this.template);
    }

    Spawn(position = Math.Vector3.Zero): MoveableSoundEvent {
        const [empty_prop_dynamic_entity,
               sound_event_entity] = this.ForceSpawn(position);
        return new MoveableSoundEvent(empty_prop_dynamic_entity, sound_event_entity);
    }
}
