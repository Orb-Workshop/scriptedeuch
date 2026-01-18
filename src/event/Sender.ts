/**
   An event sender. This wraps Base.Actor.SendMessage to send data in
   a particular event format.
*/
import { Instance as CSS } from "cs_script/point_script";
import * as Base from "../base";

export default class Sender {
    private tag: string;
    constructor(tag) {
        this.tag = tag;
    }

    public Send(event_name: string, event_data: any): void {
        if (Base.Mount.HasSystem("DefaultActorPool"))
            Base.Actor.SendMessage(this.tag, { event_name, event_data });
    }
}
