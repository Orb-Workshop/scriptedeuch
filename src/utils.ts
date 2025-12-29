/* Utility Functions */
import {
    Instance as CSS,
    CSPlayerPawn,
    CSPlayerController,
} from "cs_script/point_script";

export function DeepCopy(o) {
  return JSON.parse(JSON.stringify(o));
}

export function GetPlayerName(player_pawn: CSPlayerPawn): string | null {
    if (!(player_pawn instanceof CSPlayerPawn) ||
        !player_pawn.IsValid())
        return null;
    const player_controller = player_pawn.GetOriginalPlayerController();
    if (!(player_controller instanceof CSPlayerController) ||
        !player_controller.IsValid())
        return null;
    return player_controller.GetPlayerName();
}
