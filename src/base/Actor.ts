import { Instance as CSS } from "cs_script/point_script";
import { Mount, System } from "./index";

const DEFAULT_ACTOR_POOL_NAME = "DefaultActorPool";

interface ActorInterface {
    IsDirty: () => boolean;
    MaybeThink: () => void;
    Dispose: () => void; // Override
    ReceiveMessage: (tag: string, data: any) => void; // Override
}

export default abstract class Actor implements ActorInterface {
    private actor_pool: ActorSystem;
    //
    private dirty: boolean = false;
    private init_think: number = CSS.GetGameTime();
    private last_think: number = CSS.GetGameTime();
    private think_interval: number = 1/128;
    
    constructor(actor_pool_name: string = DEFAULT_ACTOR_POOL_NAME) {
        if (!Mount.HasSystem(actor_pool_name)) {
            this.actor_pool = Mount.Register(actor_pool_name, new ActorSystem()) as ActorSystem;
        }
        else {
            this.actor_pool = Mount.GetSystem(actor_pool_name) as ActorSystem;
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
    static SendMessage(tag: string,
                       data: any = null,
                       actor_pool_name: string = DEFAULT_ACTOR_POOL_NAME) {
        const actor_pool = Mount.GetSystem(actor_pool_name) as ActorSystem;
        if (!actor_pool) throw new Error(
            "Failed to Find Actor Pool: " + actor_pool_name);
        actor_pool.SendMessage(tag, data);
    }

    //
    // Actor Public Methods
    //
    public SetTickInterval(i: number) { this.think_interval = i; }
    public SetTick(i: number) { this.SetTickInterval(1/i) }
    public GetLifetime() { return CSS.GetGameTime() - this.init_think; }
    
    /**
       Mark the Actor for removal from the actor pool.
     */
    public MakeDirty() { this.dirty = true; }
    public Remove() { this.MakeDirty() }
    
    //
    // ActorInterface Methods
    //
    IsDirty() { return this.dirty; }
    
    MaybeThink() {
        let current_game_time = CSS.GetGameTime();
        const think_lifetime = current_game_time - this.last_think
        if (think_lifetime >= this.think_interval) {
            try {
                this.Think();
            }
            catch(e) {
                CSS.Msg("Failed Within Actor Think Function...");
            }
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
    ReceiveMessage(tag: string, data: any) {}
    
    /**
       Override Method. Is called at the `think_interval`.
     */
    Think(): void {}
}


/**
   Implements the Actor Pool as a System.
 */
class ActorSystem extends System {
    private actor_listing: Array<ActorInterface> = [];
    
    constructor() {
        super();
    }

    // Called by Actor impl.
    Spawn(a: Actor) {
        this.actor_listing.push(a);
    }

    // Called by Actor impl.
    SendMessage(tag: string, data: any = null): void {
        this.actor_listing.forEach((actor) => {
            if (!actor.IsDirty()) {
                actor.ReceiveMessage(tag, data);
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
