import { CSS as Instance } from "cs_script/point_script";
import Mount from "./Mount.ts";
import System from "./System.ts";
import { GenName } from "../utils.ts";


interface ActorInterface {
    IsDirty: () => boolean;
    MaybeThink: () => void;
    Dispose: () => void;
    ReceiveMessage: (name: string, data: any) => void;
}

export default abstract class Actor implements ActorInterface {
    private actor_pool: ActorSystem;
    //
    private dirty: boolean = false;
    private last_think: boolean = 0;
    private think_interval: number = 1/128;
    
    constructor(actor_pool_name: string = "DefaultActorPool") {
        if (!Mount.HasSystem(actor_pool_name)) {
            this.actor_pool = Mount.Register(actor_pool_name, new ActorSystem());
        }
        else {
            this.actor_pool = Mount.GetSystem(actor_pool_name);
        }

        // Spawn our actor within the actor pool
        this.actor_pool.Spawn(this);
    }

   
    //
    // Actor Static Methods
    //

    /**
       Send messages to other actors in the actor pool.
     */
    static SendMessage(name: string, data: any) {
        this.actor_pool.SendMessage(name, data);
    }

    //
    // Actor Public Methods
    //
    public SetTickInterval(i: number) { this.think_interval = i; }
    public SetTick(i: number) { this.SetTickInterval(1/i) }

    /**
       Mark the Actor for removal from the actor pool.
     */
    public MakeDirty() { this.dirty = true; }

    //
    // ActorInterface Methods
    //
    IsDirty() { return this.dirty; }
    
    MaybeThink() {
        let current_game_time = CSS.GetGameTime();
        const lifetime = current_game_time - this.last_think
        if (this.lifetime >= this.think_interval) {
            this.Think();
            this.last_think = CSS.GetGameTime();
        }
    }

    //
    // Overrideable ActorInterface Methods
    //

    /** 
        Override Interface Method. Called after an actor has been made dirty,
        and has been removed from the actor pool
     */
    Dispose(): void {}

    /**
       Override Interface Method. React to messages sent by other actors in the actor pool.
     */
    ReceiveMessage(name: string, data: any) {}
    
    /**
       Override Method. Is called at the `think_interval`.
     */
    Think(): void {}
}

type ThinkCallback = () => void;

/**
   Implementation of Actor as a repeatable think function task.
 */
class ThinkTask extends Actor {
    private callback: ThinkCallback;
    
    constructor(callback: ThinkCallback, {
        interval = 1.0, // Seconds
    }) {
        super();
        this.SetTickInterval(interval);
        this.callback = callback.bind(this);
    }
    
    Think() {
        const chk = this.callback();
        if (chk?.abort === true) this.Remove();
    }

    public Remove() {
        this.MakeDirty();
    }
}

type MessageCallback = (name: string, data: any) => void;

/**
   Implementation of Actor as a message passage task, for sending and
   receiving messages with actors.
 */
class MessageTask extends Actor {
    private callback: MessageCallback;

    constructor(message_callback: MessageCallback) {
        super();
        this.callback = message_callback.bind(this);
    }

    ReceiveMessage(name: string, data: any): void {
        const chk = this.callback(name, data);
        if (chk?.abort === true) this.Remove();
    }

    public Remove() {
        this.MakeDirty();
    }
}

/**
   Implements the Actor Pool as a System.
 */
class ActorSystem extends System {
    private actor_listing: Array<ActorInterface> = [];
    
    constructor() {
        super();
    }

    Spawn(a: Actor) {
        this.actor_listing.push(a);
    }

    // Called by Actor impl.
    SendMessage(name: string, data: any): void {
        this.actor_listing.forEach((actor) => {
            if (!actor.IsDirty()) {
                actor.ReceiveMessage(name, data);
            }
        });
    }
    
    Think() {
        this.actor_listing.forEach(actor => actor.MaybeThink());
        this.cleanup();
    }

    private cleanup() {
        const dirty_actors = this.actor_listing.filter(actor => actor.IsDirty());
        this.actor_listing = this.actor_listing.filter(actor => !actor.IsDirty())
        dirty_actors.forEach(actor => actor.Dispose());
    }
}

