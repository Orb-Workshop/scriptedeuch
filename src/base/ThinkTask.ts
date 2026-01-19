import Actor from "./Actor";

type ThinkCallback = (instance: ThinkTask) => void;

/**
   Implementation of Actor as a repeatable think function task.
 */
export default class ThinkTask extends Actor {
    private callback: ThinkCallback;
    
    constructor(callback: ThinkCallback, interval = 1.0) {
        super();
        this.SetTickInterval(interval);
        this.callback = callback.bind(this);
    }
    
    override Think() {
        const chk = this.callback(this);
        if (chk?.abort === true) this.Remove();
    }
}

