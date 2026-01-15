import {
    Instance as CSS,
    CSPlayerPawn,
    CSDamageFlags,
} from "cs_script/point_script";
import * as Base from "../base";

const DefaultSystemName = "DefaultPlayerInvincibility";

/** The `player_pawn` receives `duration` seconds of invincibility
    
    @example
    ```typescript
    new PlayerInvincibility(player_pawn, {duration: 5.0});
    ```
 */
export default class PlayerInvincibility extends Base.Actor {
    static Tag: string = "PlayerInvincibilityTag";
    private player_pawn: CSPlayerPawn;
    private duration: number;
    constructor(player_pawn, {duration = 1.0}) {
        super();
        this.player_pawn = player_pawn;
        this.duration = duration;
        // Boot up a default invincibility system if it doesn't exist.
        if (!Base.Mount.HasSystem(DefaultSystemName))
            Base.Mount.Register(DefaultSystemName, new PlayerInvincibilitySystem());
        this._register();
    }

    SendMessage(event_name: string, event_data): void {
        Base.Actor.SendMessage(PlayerInvincibility.Tag, { event_name, event_data });
    }
    
    private _register(): void {
        const playerInvincibilitySystem = Base.Mount.GetSystem(DefaultSystemName);
        playerInvincibilitySystem.Register(this.player_pawn);
        this.SendMessage("Invincible",  { player_pawn: this.player_pawn });
    }

    private _unregister(): void {
        const playerInvincibilitySystem = Base.Mount.GetSystem(DefaultSystemName);
        playerInvincibilitySystem.Unregister(this.player_pawn);
        this.SendMessage("Unvincible",  { player_pawn: this.player_pawn });
    }

    override Think(): void {
        if (this.GetLifetime() >= this.duration) {
            this.Remove();
            return;
        }
    }

    override Dispose(): void {
        this._unregister();
    }
}

/** 
    Manages the `System.OnBeforePlayerDamage`
    events. PlayerInvisibility Actors will automatically register on
    construction and unregister on disposal.
*/
class PlayerInvincibilitySystem extends Base.System {
    invincible_players: Set<CSPlayerPawn> = new Set();
    constructor() {
        super();
    }

    public Register(player_pawn: CSPlayerPawn) {
        this.invincible_players.add(player_pawn);
    }

    public Unregister(player_pawn: CSPlayerPawn) {
        this.invincible_players.delete(player_pawn);
    }
    
    override OnBeforePlayerDamage(event) {
        const player_pawn = event.player;
        if (!this.invincible_players.has(player_pawn)) return;
        return { abort: true }; // Cancel the Damage Event.
        // return { damageFlags: CSDamageFlags.PREVENT_DEATH };
    }
}
