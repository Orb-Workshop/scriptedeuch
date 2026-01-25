/**
  Fundamental Abstract System class that all CSS Systems should
  inherit.
*/
import {
    Instance as CSS,
    BeforePlayerDamageEvent,
    BeforePlayerDamageModify,
    Vector as VectorType,
    CSWeaponBase,
    Entity,
    CSWeaponAttackType,
    PlayerDamageEvent,
    CSRoundEndReason,
} from "cs_script/point_script";

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
    GetDelta(): number { return CSS.GetGameTime() - this.system_last_think_time; }
    
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

    /** 
        Instance.OnActivate()
        @overload 
     */
    OnActivate(): void { }
    
    /** 
        Instance.OnBeforePlayerDamage()
        @overload
     */
    OnBeforePlayerDamage(event: BeforePlayerDamageEvent): BeforePlayerDamageModify | { abort: true } | void { }
    
    /** 
        Instance.OnBombDefuse()
        @overload
     */
    OnBombDefuse(event: { plantedC4: Entity, planter: CSPlayerPawn }): void { }

    /** 
        Instance.OnBombPlant()
        @overload 
     */
    OnBombPlant(event: { plantedC4: Entity, planter: CSPlayerPawn }): void { }
    
    /** 
        Instance.OnBulletImpact()
        @overload 
     */
    OnBulletImpact(event: { weapon: CSWeaponBase, position: VectorType }): void { }
    
    /** 
        Instance.OnGrenadeBounce()
        @overload 
     */
    OnGrenadeBounce(event: { projectile: Entity, bounces: number }): void { }
    
    /** 
        Instance.OnGrenadeThrow()
        @overload 
     */
    OnGrenadeThrow(event: { weapon: CSWeaponBase, projectile: Entity }): void { }
    
    /** 
        Instance.OnGunFire()
        @overload 
     */
    OnGunFire(event: { weapon: CSWeaponBase }): void { }
    
    /**
       Instance.OnGunReload
       @overload
    */
    OnGunReload(event: { weapon: CSWeaponBase }): void { }
    
    /** 
        Instance.OnKnifeAttack
        @overload
    */
    OnKnifeAttack(event: { weapon: CSWeaponBase, attackType: CSWeaponAttackType }): void { }
    
    /** 
        Instance.OnPlayerActivate
        @overload
    */
    OnPlayerActivate(event: { player: CSPlayerController }): void { }
    
    /** 
        Instance.OnPlayerChat
        @overload
    */
    OnPlayerChat(event: { player: CSPlayerController | undefined, text: string, team: number }): void { }
    
    /** 
        Instance.OnPlayerConnect
        @overload
    */
    OnPlayerConnect(event: { player: CSPlayerController }): void { }
    
    /** 
        Instance.OnPlayerDamage
        @overload
    */
    OnPlayerDamage(event: PlayerDamageEvent): void { }
    
    /** 
        Instance.OnPlayerDisconnect
        @overload
    */
    OnPlayerDisconnect(event: { playerSlot: number }): void { }
    
    /** 
        Instance.OnPlayerJump
        @overload
    */
    OnPlayerJump(event: { player: CSPlayerPawn }): void { }
    
    /** 
        Instance.OnPlayerKill
        @overload
    */
    OnPlayerKill(event: { player: CSPlayerPawn, inflictor?: Entity, attacker?: Entity, weapon?: CSWeaponBase }): void { }
    
    /** 
        Instance.OnPlayerLand
        @overload
    */
    OnPlayerLand(event: { player: CSPlayerPawn }): void { }
    
    /** 
        Instance.OnPlayerPing
        @overload
    */
    OnPlayerPing(event: { player: CSPlayerController, position: VectorType }): void { }
    
    /** 
        Instance.OnPlayerReset
        @overload
    */
    OnPlayerReset(event: { player: CSPlayerPawn }): void { }
    
    /** 
        Instance.OnRoundEnd
        @overload
    */
    OnRoundEnd(event: { winningTeam: number, reason: CSRoundEndReason }): void { }
    
    /** 
        Instance.OnRoundStart
        @overload
    */
    OnRoundStart(): void { }
    
    /** 
        Instance.OnReload({before})
        @overload
    */
    OnScriptReloadBefore<T = void>(): T { }
    
    /** 
        Instance.OnReload({after})
        @overload
    */
    OnScriptReloadAfter<T>(memory: T): void { }

    //TODO: Maybe include Script Inputs?
}
