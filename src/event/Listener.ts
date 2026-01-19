/**
   An event listener that is based on `Base.MessageTask`. It wraps
   this functionality into receivers that can be assigned event
   callbacks in a particular event format.
*/
import { Instance as CSS } from "cs_script/point_script";
import * as Base from "../base";

export type Callback = (any) => void;

/** Similar to Base.MessageTask, except it processes an event structure.

 Notes:
 
 - listeners used within actors or systems should call
   `Listener.Remove()` when they themselves are being removed.
   The best place to do this is within `Base.Actor.Dispose()` for actors,
   or for non-preserved entities within systems, within `Base.System.OnRoundEnd`.

*/
export default class Listener extends Base.Actor {
    /** Will listen to actor messages with given `tag` during instantiation */
    private tag: string
    private receivers: Map<string, Callback> = new Map();
    constructor(tag) {
        super();
        this.tag = tag;
    }

    override ReceiveMessage(tag: string, data: any): void {
        if (this.tag !== tag) return;
        const { event_name = null,
                event_data = null } = data;
        if (this.receivers.has(event_name))
            this.receivers.get(event_name)(event_data);
    }

    public On(event_name: string, event_callback: Callback): Listener {
        this.receivers.set(event_name, event_callback);
        return this;
    }
}
