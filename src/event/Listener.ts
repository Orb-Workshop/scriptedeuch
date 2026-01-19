/**
   An event listener that is based on `Base.MessageTask`. It wraps
   this functionality into receivers that can be assigned event
   callbacks in a particular event format.
*/
import { Instance as CSS } from "cs_script/point_script";
import * as Base from "../base";

export type Callback = (any) => void;

/** Similar to Base.MessageTask, except it processes an event structure. */
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
        if (!event_name) CSS.Msg("EventListener: Null Event Encountered");
        if (this.receivers.has(event_name))
            this.receivers.get(event_name)(event_data);
    }

    public On(event_name: string, event_callback: Callback): Listener {
        this.receivers.set(event_name, event_callback);
        return this;
    }
}
