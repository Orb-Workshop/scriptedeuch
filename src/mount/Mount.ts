/**
    The Main Mount Point for scriptedeuch `Base.System` and
    `Base.Actor` classes.

    An Example of `Base.System` using the mounter.
    @example
    ```ts
    import { Instance as CSS } from "cs_script/point_script";
    import { Base } from "scriptedeuch";
    class EchoActivate extends Base.System {
      constructor() { super() }
      override OnActivate() { CSS.Msg("Activated!") }
    }
    Base.Mount.Register("EchoActivate", new EchoActivate());
    Base.Mount.Start();
    ```

    An Example of `Base.Actor` using the mounter.
    ```ts
    import { Instance as CSS } from "cs_script/point_script";
    import { Base } from "scriptedeuch";
    class EchoActivate extends Base.Actor
      constructor() {
        super()
        CSS.Msg("Activated!");
      }
    }
    const echo = new EchoActivate();
    Base.Mount.Start();
    ```
 */

import { Instance as CSS } from "cs_script/point_script";
import type {
    BombDefuseEvent,
    BombPlantEvent,
    CSDamageFlags,
    CSDamageTypes,
    CSGrenadeProjectileBase,
    CSHostage,
    CSPlantedC4,
    CSPlayerController,
    CSPlayerPawn,
    CSRoundEndReason,
    CSWeaponAttackType,
    CSWeaponBase,
    CustomHudLayout,
    Entity,
    GrenadeBounceEvent,
    ModifyPlayerDamageEvent,
    ModifyPlayerDamageResult,
    PlayerDamageEvent,
    Vector,
} from "cs_script/point_script";
import { System } from "../base";

export default class Mount {
    /** Singleton Instance */
    static _instance: Mount;

    /** Mounter Enabled */
    private mount_enabled: boolean = false;
    /** A Mapping of Registered Systems */
    private system_listing: Map<string, System> = new Map();
    private constructor() {}

    /** Singleton Getter */
    public static get instance(): Mount {
        if (!Mount._instance) {
            Mount._instance = new Mount();
        }

        return Mount._instance;
    }

    /** Register a `Base.System` */
    public static Register(name: string, system: System): System {
        const mount = Mount.instance;
        mount.system_listing.set(name, system);
        return system;
    }

    /** Unregister a `Base.System` */
    public static Unregister(name: string): void {
        const mount = Mount.instance;
        mount.system_listing.delete(name);
    }

    /** @returns `true`, if system registered as `name` exists. */
    public static HasSystem(name: string): boolean {
        const mount = Mount.instance;
        return mount.system_listing.has(name);
    }

    /** @returns `Base.System` registered as `name`, or `null` */
    public static GetSystem(name: string): System | null {
        const mount = Mount.instance;
        return mount.system_listing.get(name);
    }

    /** Iterate over each system with callback, `f`.  */
    private forEachSystem(f: (system: System, key: string) => void) {
        this.system_listing.forEach((system, key) => {
            f(system, key);
        });
    }

    /** Iterate over each enabled system with callback, `f`. */
    private forEachEnabledSystem(f: (system: System) => void) {
        this.forEachSystem((system, key) => {
            if (system.IsSystemEnabled()) f(system, key);
        });
    }

    /**
       Handle Modifying Player Damage EventCallback

       Notes:

       - CSS.OnBeforePlayerDamage is replaced with CSS.OnModifyPlayerDamage
       - { abort: true } takes precedence
    */
    private HandleModifyPlayerDamage(event: ModifyPlayerDamageEvent): ModifyPlayerDamageResult {
        // Dress up our event as the result between modifications.
        event.abort = false;

        this.forEachEnabledSystem((system: System) => {
            const result = system.OnBeforePlayerDamage(event) ?? {};
            event = { ...event, ...result };
        });
        return event;
    }

    /** Register Everything with the CSS Instance. */
    private go(): void {
        if (this.mount_enabled) return;
        CSS.OnActivate(() => {
            this.forEachEnabledSystem((system) => system.OnActivate());
        });
        CSS.OnPlayerConnect((event: { player: CSPlayerController }) => {
            this.forEachEnabledSystem((system: System) => system.OnPlayerConnect(event));
        });
        CSS.OnPlayerActivate((event: { player: CSPlayerController }) => {
            this.forEachEnabledSystem((system: System) => system.OnPlayerActivate(event));
        });
        CSS.OnPlayerDisconnect((event: { playerSlot: number }) => {
            this.forEachEnabledSystem((system: System) => system.OnPlayerDisconnect(event));
        });
	CSS.OnPlayerReset((event: { player: CSPlayerPawn }) => {
            this.forEachEnabledSystem((system: System) => system.OnPlayerReset(event));
        });
	CSS.OnPlayerTeamChanged((event: { player: CSPlayerPawn, oldTeam: number }) => {
            this.forEachEnabledSystem((system) => system.OnPlayerTeamChanged(event));
        });
        CSS.OnRoundStart(() => {
            this.forEachEnabledSystem((system) => system.OnRoundStart(event));
        });
        CSS.OnRoundEnd((event: { winningTeam: number, reason: CSRoundEndReason }) => {
            this.forEachEnabledSystem((system) => system.OnRoundEnd(event));
        });
        CSS.OnBeginRoundRestart(() => {
            this.forEachEnabledSystem((system) => system.OnBeginRoundRestart(event));
        });
        CSS.OnBombPlantStart((event: { planter: CSPlayerPawn }) => {
            this.forEachEnabledSystem((system) => system.OnBombPlantStart(event));
        });
	CSS.OnBombPlantAbort((event: { planter: CSPlayerPawn }) => {
            this.forEachEnabledSystem((system) => system.OnBombPlantAbort(event));
        });
        CSS.OnBombPlant((event: BombPlantEvent) => {
            this.forEachEnabledSystem((system) => system.OnBombPlant(event));
        });
        CSS.OnBombDefuseStart((event: { plantedC4: CSPlantedC4 }) => {
            this.forEachEnabledSystem((system) => system.OnBombDefuseStart(event));
        });
	CSS.OnBombDefuseAbort((event: { plantedC4: CSPlantedC4 }) => {
            this.forEachEnabledSystem((system) => system.OnBombDefuseAbort(event));
        });
        CSS.OnBombDefuse((event: BombDefuseEvent) => {
            this.forEachEnabledSystem((system) => system.OnBombDefuse(event));
        });
	CSS.OnBombExplode((event: { plantedC4: CSPlantedC4 }) => {
            this.forEachEnabledSystem((system) => system.OnBombExplode(event));
        });
	CSS.OnHostagePickUpStart((event: { hostage: CSHostage }) => {
	    this.forEachEnabledSystem((system) => system.OnHostagePickUpStart(event));
	});
	CSS.OnHostagePickUpAbort((event: { hostage: CSHostage, player: CSPlayerPawn }) => {
	    this.forEachEnabledSystem((system) => system.OnHostagePickUpAbort(event));
	});
	CSS.OnHostagePickUp((event: { hostage: CSHostage }) => {
	    this.forEachEnabledSystem((system) => system.OnHostagePickUp(event));
	});
	CSS.OnHostageDrop((event: { hostage: CSHostage, dropper: CSPlayerPawn }) => {
	    this.forEachEnabledSystem((system) => system.OnHostageDrop(event));
	});
	CSS.OnHostageRescue((event: { hostage: CSHostage }) => {
	    this.forEachEnabledSystem((system) => system.OnHostageRescue(event));
	});
	CSS.OnHostageKill((event: { hostage: CSHostage, attacker?: CSPlayerPawn }) => {
	    this.forEachEnabledSystem((system) => system.OnHostageKill(event));
	});
        CSS.OnBeforePlayerDamage((event: ModifyPlayerDamageEvent) => this.HandleModifyPlayerDamage(event));
        CSS.OnModifyPlayerDamage((event: ModifyPlayerDamageEvent) => this.HandleModifyPlayerDamage(event));
        CSS.OnPlayerDamage((event: PlayerDamageEvent) => {
            this.forEachEnabledSystem((system) => system.OnPlayerDamage(event));
        });
        CSS.OnPlayerKill((event: { player: CSPlayerPawn, inflictor?: Entity, attacker?: Entity, weapon?: CSWeaponBase }) => {
            this.forEachEnabledSystem((system) => system.OnPlayerKill(event));
        });
        CSS.OnPlayerJump((event: { player: CSPlayerPawn }) => {
            this.forEachEnabledSystem((system) => system.OnPlayerJump(event));
        });
        CSS.OnPlayerLand((event: { player: CSPlayerPawn }) => {
            this.forEachEnabledSystem((system) => system.OnPlayerLand(event));
        });
        CSS.OnPlayerChat((event: { player?: CSPlayerController, text: string, team: number }) => {
            this.forEachEnabledSystem((system) => system.OnPlayerChat(event));
        });
        CSS.OnPlayerPing((event: { player: CSPlayerController, position: Vector }) => {
            this.forEachEnabledSystem((system) => system.OnPlayerPing(event));
        });
        CSS.OnGunReload((event: { weapon: CSWeaponBase }) => {
            this.forEachEnabledSystem((system) => system.OnGunReload(event));
        });
        CSS.OnGunFire((event: { weapon: CSWeaponBase }) => {
            this.forEachEnabledSystem((system) => system.OnGunFire(event));
        });
        CSS.OnBulletImpact((event: { weapon: CSWeaponBase, position: Vector, hitEntity?: Entity }) => {
            this.forEachEnabledSystem((system) => system.OnBulletImpact(event));
        });
        CSS.OnWeaponDrop((event: { weapon: CSWeaponBase, dropper: CSPlayerPawn }) => {
            this.forEachEnabledSystem((system) => system.OnWeaponDrop(event));
        });
        CSS.OnWeaponPickup((event: { weapon: CSWeaponBase }) => {
            this.forEachEnabledSystem((system) => system.OnWeaponPickup(event));
        });
        CSS.OnGrenadeThrow((event: { weapon: CSWeaponBase, projectile: CSGrenadeProjectileBase }) => {
            this.forEachEnabledSystem((system) => system.OnGrenadeThrow(event));
        });
        CSS.OnGrenadeBounce((event: GrenadeBounceEvent) => {
            this.forEachEnabledSystem((system) => system.OnGrenadeBounce(event));
        });
        CSS.OnKnifeAttack((event: { weapon: CSWeaponBase, attackType: CSWeaponAttackType }) => {
            this.forEachEnabledSystem((system) => system.OnKnifeAttack(event));
        });
        CSS.OnCustomHudClicked((event: { player: CSPlayerController, layout: CustomHudLayout, buttonId: string }) => {
            this.forEachEnabledSystem((system) => system.OnCustomHudClicked(event));
        });


        // OnScriptReload functionality is split up into separate overrides
        // System.OnScriptReloadBefore(...) and System.OnScriptReloadAfter(...)
        // The memory reload functionality works with individual registered systems.
        const system_memory_store = {};
        CSS.OnScriptReload({
            before: () => {
                this.forEachEnabledSystem((system, key) => {
                    const memory = system.OnScriptReloadBefore() ?? null;
                    system_memory_store[key] = JSON.stringify(memory);
                });
                return system_memory_store;
            },
            after: (system_memory_store) => {
                this.forEachEnabledSystem((system, key) => {
                    const memory = JSON.parse(system_memory_store[key] ?? null);
                    system.OnScriptReloadAfter(memory);
                    system.OnScriptReload();
                });
            }});

        // Handle tick intervals in each system.
        CSS.SetThink(() => {
            this.forEachEnabledSystem((system) => {
                system.MaybeThink();
            });
            CSS.SetNextThink(CSS.GetGameTime()); // Pegged at highest tick rate (64-Tick)
        });
        this._startSystems();
        this.mount_enabled = true;
    }

    /** Enable All Registered Systems */
    public _startSystems(): void {
        this.forEachSystem((system) => system.EnableSystem());
    }

    /** Disable All Registered Systems */
    public _stopSystems(): void {
        this.forEachSystem((system) => system.DisableSystem());
    }

    /** Start Enabled Systems */
    public static Start(): void {
        const mount = Mount.instance;
        mount.go();
        CSS.SetNextThink(CSS.GetGameTime());
    }

    /** Stop and Disable all Systems */
    public static Stop(): void {
        const mount = Mount.instance;
        mount._stopSystems();
    }

    /** Enable Registered System with `name`. */
    public static Enable(name: string): boolean {
        if (Mount.HasSystem(name)) {
            Mount.GetSystem(name)?.EnableSystem();
            return true;
        }
        return false;
    }

    /** Disable Registered System with `name`. */
    public static Disable(name: string): boolean {
        if (Mount.HasSystem(name)) {
            Mount.GetSystem(name)?.DisableSystem();
            return true;
        }
        return false;
    }

    /** List all Systems
        @returns A list of registered system names.
    */
    public static List(): Array<string> {
        const mount = Mount.instance;
        return Array.from(mount.system_listing.keys());
    }
}
