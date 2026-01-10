import { Actor } from "./index";

type MessageCallback = (tag: string, data: any, instance: MessageTask) => void;

/**
   Implementation of Actor as a message passage task, for sending and
   receiving messages with actors.
 */
export default class MessageTask extends Actor {
    private callback: MessageCallback;

    constructor(message_callback: MessageCallback, tick_rate = 128.0) {
        super();
        this.SetTick(tick_rate);
        this.callback = message_callback.bind(this);
    }

    override ReceiveMessage(tag: string, data: any): void {
        const chk = this.callback(tag, data, this);
        if (chk?.abort === true) this.Remove();
    }
}
