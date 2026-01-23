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

import {
    Instance as CSS,
    CSDamageTypes,
    CSDamageFlags,
} from "cs_script/point_script";
import System from "./System";

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

    /** Register Everything with the CSS Instance. */
    private go(): void {
        if (this.mount_enabled) return;
        CSS.OnActivate(() => {
            this.forEachEnabledSystem((system) => system.OnActivate());
        });

        /** { abort: true } takes precedence */
        CSS.OnBeforePlayerDamage((event) => {
            let result = null;
            this.forEachEnabledSystem((system) => {
                const tmp_result = system.OnBeforePlayerDamage(event);
                if (tmp_result === null || tmp_result === undefined) return;
                if (tmp_result?.abort === true) {
                    result = { abort: true };
                    return;
                }

                { damage = 0,
                  damageTypes = 0,
                  damageFlags = 0,
                } = tmp_result;
                
                // Merging Damage, Types, Flags
                result = result || {};
                result.damage += damage;
                result.damageTypes |= damageTypes;
                result.damageFlags |= damageFlags;
            });
            if (result !== null) return result;
        });
        CSS.OnBombDefuse((event) => {
            this.forEachEnabledSystem((system) => system.OnBombDefuse(event));
        });
        CSS.OnBombPlant((event) => {
            this.forEachEnabledSystem((system) => system.OnBombPlant(event));
        });
        CSS.OnBulletImpact((event) => {
            this.forEachEnabledSystem((system) => system.OnBulletImpact(event));
        });
        CSS.OnGrenadeBounce((event) => {
            this.forEachEnabledSystem((system) => system.OnGrenadeBounce(event));
        });
        CSS.OnGrenadeThrow((event) => {
            this.forEachEnabledSystem((system) => system.OnGrenadeThrow(event));
        });
        CSS.OnGunFire((event) => {
            this.forEachEnabledSystem((system) => system.OnGunFire(event));
        });
        CSS.OnGunReload((event) => {
            this.forEachEnabledSystem((system) => system.OnGunReload(event));
        });
        CSS.OnKnifeAttack((event) => {
            this.forEachEnabledSystem((system) => system.OnKnifeAttack(event));
        });
        CSS.OnPlayerActivate((event) => {
            this.forEachEnabledSystem((system) => system.OnPlayerActivate(event));
        });
        CSS.OnPlayerChat((event) => {
            this.forEachEnabledSystem((system) => system.OnPlayerChat(event));
        });
        CSS.OnPlayerConnect((event) => {
            this.forEachEnabledSystem((system) => system.OnPlayerConnect(event));
        });
        CSS.OnPlayerDamage((event) => {
            this.forEachEnabledSystem((system) => system.OnPlayerDamage(event));
        });
        CSS.OnPlayerDisconnect((event) => {
            this.forEachEnabledSystem((system) => system.OnPlayerDisconnect(event));
        });
        CSS.OnPlayerJump((event) => {
            this.forEachEnabledSystem((system) => system.OnPlayerJump(event));
        });
        CSS.OnPlayerKill((event) => {
            this.forEachEnabledSystem((system) => system.OnPlayerKill(event));
        });
        CSS.OnPlayerLand((event) => {
            this.forEachEnabledSystem((system) => system.OnPlayerLand(event));
        });
        CSS.OnPlayerPing((event) => {
            this.forEachEnabledSystem((system) => system.OnPlayerPing(event));
        });
        CSS.OnPlayerReset((event) => {
            this.forEachEnabledSystem((system) => system.OnPlayerReset(event));
        });
        CSS.OnRoundEnd((event) => {
            this.forEachEnabledSystem((system) => system.OnRoundEnd(event));
        });
        CSS.OnRoundStart((event) => {
            this.forEachEnabledSystem((system) => system.OnRoundStart(event));
        });

        // OnScriptReload functionality is split up into separate overrides
        // System.OnScriptReloadBefore(...) and System.OnScriptReloadAfter(...)
        // The memory reload functionality works with individual registered systems.
        const system_memory_store: Map<string, any> = new Map();
        CSS.OnScriptReload({
            before: () => {
                this.forEachEnabledSystem((system, key) => {
                    const memory = system.OnScriptReloadBefore();
                    system_memory_store.set(key, memory);
                    return memory;
                });
            },
            after: (_) => {
                this.forEachEnabledSystem((system, key) => {
                    const memory = system_memory_store.get(key);
                    system.OnScriptReloadAfter(memory);
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
            Mount.GetSystem(name).EnableSystem();
            return true;
        }
        return false;
    }

    /** Disable Registered System with `name`. */
    public static Disable(name: string): boolean {
        if (Mount.HasSystem(name)) {
            Mount.GetSystem(name).DisableSystem();
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
