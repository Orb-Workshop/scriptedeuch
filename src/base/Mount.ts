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
            this.forEachEnabledSystem((system) => system.OnActivate());
        });
        // TODO: Merge results
        CSS.OnBeforePlayerDamage((event) => {
            let result = null;
            this.forEachEnabledSystem((system) => {
                const tmp_result = system.OnBeforePlayerDamage(event);
                result = tmp_result ?? result;
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
        CSS.OnScriptReload({
            before: () => {
                this.forEachEnabledSystem((system) => system.OnScriptReloadBefore());
            },
            after: (memory) => {
                this.forEachEnabledSystem((system) => system.OnScriptReloadAfter(memory));
            }});
        
        // Handle tick intervals in each system.
        CSS.SetThink(() => {
            this.forEachEnabledSystem((system) => {
                system.MaybeThink();
            });
            CSS.SetNextThink(CSS.GetGameTime()); // Pegged at highest tick rate (64-Tick)
        });
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
