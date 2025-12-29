import {
    CSS,
    // Base Mountpoint Singleton
    Mount, System,
} from "./index.ts";
let mount = Mount.instance;


class ReloadMessageSystem extends System {
    HandleScriptReloadBefore() {
        CSS.Msg("Script Reloaded!!");
    }
}
let reloadMessageSystem = new ReloadMessageSystem();
mount.register("ReloadMessage", reloadMessageSystem);
mount.start(); // go

CSS.Msg("Scriptedeuch Main Script Activated!!");
