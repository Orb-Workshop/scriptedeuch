/* The main mount point for CSS systems, which then take advantage of
 * the 'Instance' methods. This class is meant to be a singleton mount
 * point for individual scripts to become composable pieces that can 'plug-in'.
 */
import { Instance as CSS } from "cs_script/point_script";
import System from "./System.ts";

export default class Mount {
    static _instance: Mount;

    private mount_enabled: bool = false;
    private system_listing: Map<System> = new Map();
    private constructor() {}

    public static get instance(): Mount {
        if (!Mount._instance) {
            Mount._instance = new Mount();
        }

        return Mount._instance;
    }

    public static Register(name: string, system: System) {
        const mount = Mount.instance;
        mount.system_listing.set(name, system);
    }

    public static Unregister(name: string) {
        const mount = Mount.instance;
        mount.system_listing.delete(name);
    }

    public static HasSystem(name: string): bool {
        const mount = Mount.instance;
        return mount.system_listing.has(name);
    }

    public static GetSystem(name: string): System | null {
        const mount = Mount.instance;
        return mount.system_listing.get(name);
    }
    
    private forEachSystem(f: (system: System) => void) {
        for (let system of this.system_listing.values()) {
            f(system);
        }
    }

    private forEachEnabledSystem(f: (system: System) => void) {
        this.forEachSystem((system) => {
            if (system.IsSystemEnabled()) f(system);
        });
    }

    // Register everything with the CSS instance.
    private go() {
        if (this.mount_enabled) return;
        CSS.OnActivate(() => {
            this.forEachEnabledSystem((system) => system.HandleActivate());
        });
        // TODO: Merge results
        CSS.OnBeforePlayerDamage((event) => {
            let result = null;
            this.forEachEnabledSystem((system) => {
                const tmp_result = system.HandleBeforePlayerDamage(event);
                result = tmp_result ?? result;
            });
            if (result !== null) return result;
        });
        CSS.OnBombDefuse((event) => {
            this.forEachEnabledSystem((system) => system.HandleBombDefuse(event));
        });
        CSS.OnBombPlant((event) => {
            this.forEachEnabledSystem((system) => system.HandleBombPlant(event));
        });
        CSS.OnBulletImpact((event) => {
            this.forEachEnabledSystem((system) => system.HandleBulletImpact(event));
        });
        CSS.OnGrenadeBounce((event) => {
            this.forEachEnabledSystem((system) => system.HandleGrenadeBounce(event));
        });
        CSS.OnGrenadeThrow((event) => {
            this.forEachEnabledSystem((system) => system.HandleGrenadeThrow(event));
        });
        CSS.OnGunFire((event) => {
            this.forEachEnabledSystem((system) => system.HandleGunFire(event));
        });
        CSS.OnGunReload((event) => {
            this.forEachEnabledSystem((system) => system.HandleGunReload(event));
        });
        CSS.OnKnifeAttack((event) => {
            this.forEachEnabledSystem((system) => system.HandleKnifeAttack(event));
        });
        CSS.OnPlayerActivate((event) => {
            this.forEachEnabledSystem((system) => system.HandlePlayerActivate(event));
        });
        CSS.OnPlayerChat((event) => {
            this.forEachEnabledSystem((system) => system.HandlePlayerChat(event));
        });
        CSS.OnPlayerConnect((event) => {
            this.forEachEnabledSystem((system) => system.HandlePlayerConnect(event));
        });
        CSS.OnPlayerDamage((event) => {
            this.forEachEnabledSystem((system) => system.HandlePlayerDamage(event));
        });
        CSS.OnPlayerDisconnect((event) => {
            this.forEachEnabledSystem((system) => system.HandlePlayerDisconnect(event));
        });
        CSS.OnPlayerJump((event) => {
            this.forEachEnabledSystem((system) => system.HandlePlayerJump(event));
        });
        CSS.OnPlayerKill((event) => {
            this.forEachEnabledSystem((system) => system.HandlePlayerKill(event));
        });
        CSS.OnPlayerLand((event) => {
            this.forEachEnabledSystem((system) => system.HandlePlayerLand(event));
        });
        CSS.OnPlayerPing((event) => {
            this.forEachEnabledSystem((system) => system.HandlePlayerPing(event));
        });
        CSS.OnPlayerReset((event) => {
            this.forEachEnabledSystem((system) => system.HandlePlayerReset(event));
        });
        CSS.OnRoundEnd((event) => {
            this.forEachEnabledSystem((system) => system.HandleRoundEnd(event));
        });
        CSS.OnRoundStart((event) => {
            this.forEachEnabledSystem((system) => system.HandleRoundStart(event));
        });
        CSS.OnScriptReload({
            before: () => {
                this.forEachEnabledSystem((system) => system.HandleScriptReloadBefore());
            },
            after: (memory) => {
                this.forEachEnabledSystem((system) => system.HandleScriptReloadAfter(memory));
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

    public _startSystems() {
        this.forEachSystem((system) => system.EnableSystem());        
    }
    
    public _stopSystems() {
        this.forEachSystem((system) => system.DisableSystem());
    }
    
    public static Start() {
        const mount = Mount.instance;
        mount.go();
        CSS.SetNextThink(CSS.GetGameTime());
    }

    public static Stop() {
        const mount = Mount.instance;
        mount._stopSystems();
    }
    
    public static Enable(name: string): bool {
        if (Mount.HasSystem(name)) {
            Mount.GetSystem(name).EnableSystem();
            return true;
        }
        return false;
    }

    public static Disable(name: string): bool {
        if (Mount.HasSystem(name)) {
            Mount.GetSystem(name).DisableSystem();
            return true;
        }
        return false;
    }

    public static List() {
        const mount = Mount.instance;
        return Array.from(mount.system_listing.keys());
    }
}
