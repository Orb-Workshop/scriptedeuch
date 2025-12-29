/*
  Base System class that all CSS systems should inherit.
*/
import { Instance as CSS } from "cs_script/point_script";

export default abstract class System {
    private system_enabled: bool = false;
    private system_last_think_time: number = 0;
    private system_think_interval: number = 1/128.; // Immediate (Pegged to 64 Tick)
    SetTickInterval(i: number) {
        this.system_think_interval = 1/i;
    }
    Think(): void { } // Override for CSS.SetThink
    MaybeThink(): void {
        let current_game_time = CSS.GetGameTime();
        if (current_game_time - this.system_last_think_time >= this.system_think_interval) {
            this.Think();
            this.system_last_think_time = CSS.GetGameTime();
        }
    }
    // CSS Instance Methods
    // https://developer.valvesoftware.com/wiki/Counter-Strike_2_Workshop_Tools/Scripting_API#Instance
    // TODO: do appropriate typechecking.

    HandleActivate() { }                // OnActivate
    HandleBeforePlayerDamage(event) { } // OnBeforePlayerDamage
    HandleBombDefuse(event) { }         // OnBombDefuse
    HandleBombPlant(event) { }          // OnBombPlant
    HandleBulletImpact(event) { }       // OnBulletImpact
    HandleGrenadeBounce(event) { }      // OnGrenadeBounce
    HandleGrenadeThrow(event) { }       // OnGrenadeThrow
    HandleGunFire(event) { }            // OnGunFire
    HandleGunReload(event) { }          // OnGunReload
    HandleKnifeAttack(event) { }        // OnKnifeAttack
    HandlePlayerActivate(event) { }     // OnPlayerActivate
    HandlePlayerChat(event) { }         // OnPlayerChat
    HandlePlayerConnect(event) { }      // OnPlayerConnect
    HandlePlayerDamage(event) { }       // OnPlayerDamage
    HandlePlayerDisconnect(event) { }   // OnPlayerDisconnect
    HandlePlayerJump(event) { }         // OnPlayerJump
    HandlePlayerKill(event) { }         // OnPlayerKill
    HandlePlayerLand(event) { }         // OnPlayerLand
    HandlePlayerPing(event) { }         // OnPlayerPing
    HandlePlayerReset(event) { }        // OnPlayerReset
    HandleRoundEnd(event) { }           // OnRoundEnd
    HandleRoundStart(event) { }         // OnRoundStart
    // TODO: Script Inputs
    HandleScriptReloadBefore() { }      // OnScriptReload({before})
    HandleScriptReloadAfter(memory) { } // OnScriptReload({after})

    EnableSystem() { this.system_enabled = true }
    DisableSystem() { this.system_enabled = false }
    IsSystemEnabled(): bool { return this.system_enabled }
}
