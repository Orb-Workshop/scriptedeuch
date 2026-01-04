/*
  Base System class that all CSS systems should inherit.
*/
import { Instance as CSS } from "cs_script/point_script";

export default abstract class System {
    private system_enabled: bool = true;
    private system_last_think_time: number = 0;
    private system_think_interval: number = 1/128.; // Immediate (Pegged to 64 Tick)

    // System Methods
    EnableSystem() { this.system_enabled = true }
    DisableSystem() { this.system_enabled = false }
    IsSystemEnabled(): bool { return this.system_enabled }
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
    
    Think(): void { } // Override for CSS.SetThink
    
    // CSS Instance Methods
    // https://developer.valvesoftware.com/wiki/Counter-Strike_2_Workshop_Tools/Scripting_API#Instance
    // TODO: do appropriate typechecking.

    OnActivate() { }                // OnActivate
    OnBeforePlayerDamage(event) { } // OnBeforePlayerDamage
    OnBombDefuse(event) { }         // OnBombDefuse
    OnBombPlant(event) { }          // OnBombPlant
    OnBulletImpact(event) { }       // OnBulletImpact
    OnGrenadeBounce(event) { }      // OnGrenadeBounce
    OnGrenadeThrow(event) { }       // OnGrenadeThrow
    OnGunFire(event) { }            // OnGunFire
    OnGunReload(event) { }          // OnGunReload
    OnKnifeAttack(event) { }        // OnKnifeAttack
    OnPlayerActivate(event) { }     // OnPlayerActivate
    OnPlayerChat(event) { }         // OnPlayerChat
    OnPlayerConnect(event) { }      // OnPlayerConnect
    OnPlayerDamage(event) { }       // OnPlayerDamage
    OnPlayerDisconnect(event) { }   // OnPlayerDisconnect
    OnPlayerJump(event) { }         // OnPlayerJump
    OnPlayerKill(event) { }         // OnPlayerKill
    OnPlayerLand(event) { }         // OnPlayerLand
    OnPlayerPing(event) { }         // OnPlayerPing
    OnPlayerReset(event) { }        // OnPlayerReset
    OnRoundEnd(event) { }           // OnRoundEnd
    OnRoundStart(event) { }         // OnRoundStart
    // TODO: Script Inputs
    OnScriptReloadBefore() { }      // OnScriptReload({before})
    OnScriptReloadAfter(memory) { } // OnScriptReload({after})
}
