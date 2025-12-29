import {
    Instance as CSS,
    CSPlayerPawn,
} from "cs_script/point_script";
import {
    // Base Mountpoint Singleton
    Mount, System,
    GetPlayerName,
} from "./index.ts";
let mount = Mount.instance;

CSS.Msg("Scriptedeuch!");

class EventMessageSystem extends System {
    constructor() {
        super();
        this.SetTickInterval(1); // 1 Tick Per Second
        this.num_ticks = 0;
    }

    private getPlayerName(player_pawn) {
        return GetPlayerName(player_pawn) ?? "N/A";
    }
    
    HandleActivate() {
        CSS.Msg("Event: OnActivate!");
    }

    HandleScriptReloadBefore() {
        CSS.Msg("Event: OnScriptReload:Before");
    }
    
    HandlePlayerKill(event) {
        CSS.Msg("Event: OnPlayerKill - " + this.getPlayerName(event.player));
    }

    HandlePlayerLand(event) {
        CSS.Msg("Event: OnPlayerLand - " + this.getPlayerName(event.player));
    }
    
    Think() {
        CSS.Msg("Event: Think - " + this.num_ticks);
        this.num_ticks++;
    }
}
mount.register("EventMessages", new EventMessageSystem());
CSS.Msg("Systems: " + mount.list().join(", "))
mount.start(); // go
