/**
  Fundamental Abstract System class that all CSS Systems should
  inherit.
*/
import { Instance as CSS } from "cs_script/point_script";

/**
   Mountable System Abstraction.
 */
export default abstract class System {
    private system_enabled: boolean = true;
    private system_last_think_time: number = 0;
    private system_think_interval: number = 1/128.; // Immediate (Pegged to 64 Tick)

    // System Methods
    EnableSystem() { this.system_enabled = true }
    DisableSystem() { this.system_enabled = false }
    IsSystemEnabled(): boolean { return this.system_enabled }
    SetTickInterval(i: number) { this.system_think_interval = i; }
    SetTick(i: number) { this.SetTickInterval(1/i) }

    MaybeThink(): void {
        let current_game_time = CSS.GetGameTime();
        if (current_game_time - this.system_last_think_time >= this.system_think_interval) {
            this.Think();
            this.system_last_think_time = CSS.GetGameTime();
        }
    }

    //
    // Overrideable Methods in Event Cycle
    //
    /**
       Replacement for `Instance.SetThink()` when used with `Base.Mount`.
       @overload
     */
    Think(): void { } // Override for CSS.SetThink
    
    // CSS Instance Methods
    // https://developer.valvesoftware.com/wiki/Counter-Strike_2_Workshop_Tools/Scripting_API#Instance
    // TODO: do appropriate typechecking.

    /** @overload */
    OnActivate() { }                // OnActivate
    /** @overload */
    OnBeforePlayerDamage(event) { } // OnBeforePlayerDamage
    /** @overload */
    OnBombDefuse(event) { }         // OnBombDefuse
    /** @overload */
    OnBombPlant(event) { }          // OnBombPlant
    /** @overload */
    OnBulletImpact(event) { }       // OnBulletImpact
    /** @overload */
    OnGrenadeBounce(event) { }      // OnGrenadeBounce
    /** @overload */
    OnGrenadeThrow(event) { }       // OnGrenadeThrow
    /** @overload */
    OnGunFire(event) { }            // OnGunFire
    /** @overload */
    OnGunReload(event) { }          // OnGunReload
    /** @overload */
    OnKnifeAttack(event) { }        // OnKnifeAttack
    /** @overload */
    OnPlayerActivate(event) { }     // OnPlayerActivate
    /** @overload */
    OnPlayerChat(event) { }         // OnPlayerChat
    /** @overload */
    OnPlayerConnect(event) { }      // OnPlayerConnect
    /** @overload */
    OnPlayerDamage(event) { }       // OnPlayerDamage
    /** @overload */
    OnPlayerDisconnect(event) { }   // OnPlayerDisconnect
    /** @overload */
    OnPlayerJump(event) { }         // OnPlayerJump
    /** @overload */
    OnPlayerKill(event) { }         // OnPlayerKill
    /** @overload */
    OnPlayerLand(event) { }         // OnPlayerLand
    /** @overload */
    OnPlayerPing(event) { }         // OnPlayerPing
    /** @overload */
    OnPlayerReset(event) { }        // OnPlayerReset
    /** @overload */
    OnRoundEnd(event) { }           // OnRoundEnd
    /** @overload */
    OnRoundStart(event) { }         // OnRoundStart
    /** @overload */
    OnScriptReloadBefore() { }      // OnScriptReload({before})
    /** @overload */
    OnScriptReloadAfter(memory) { } // OnScriptReload({after})

    //TODO: Maybe include Script Inputs?
}
