/**
   An opt-in global event system.

   Note:

   - Some helper classes use global events to gaurantee their
     callbacks remain on the entity.

     @see https://developer.valvesoftware.com/wiki/S_PreserveEnts
 */

import * as Base from "../base";
import { default as Listener, Callback } from "./Listener";
import { default as Sender } from "./Sender";

export const SystemName = "GlobalEvents";
export const Tag = "Global";

/** 
    Global Event System. Represents Instance.On* events as separate listeners.
    This effectively links actors to point_script instance events.
    
    Note:

    - Methods like OnBeforePlayerDamage return values are ignored. Full control is through a `Base.System`.

 */
class EventSystem extends Base.System {
    private sender = new Sender(Tag);
    constructor() {
        super();
    }

    override OnActivate(): void {
        this.sender.Send("Activate");
    }

    override OnRoundStart(): void {
        this.sender.Send("RoundStart");
    }

    override OnRoundEnd(event): void {
        this.sender.Send("RoundEnd", event);
    }
}

/** Returns an `Event.Listener` using the global `Tag`. */
export function GetGlobalListener(): Listener {
    // Stand up our global event system
    if (!Base.Mount.HasSystem(SystemName)) {
        Base.Mount.Register(SystemName, new EventSystem());
    }
    
    return new Listener(Tag);
}

/** Instance.OnActivate() */
export function OnActivate(callback: Callback): Listener {
    return GetGlobalListener().On("Activate", callback);
}

/** Instance.OnRoundStart() */
export function OnRoundStart(callback: Callback): Listener {
    return GetGlobalListener().On("RoundStart", callback);
}

/** Instance.OnRoundEnd() */
export function OnRoundEnd(callback: Callback): Listener {
    return GetGlobalListener().On("RoundEnd", callback);
}
