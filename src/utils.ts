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

export const Memoize = (func) => {
    const cache = {};
    return (...args) => {
        let strKey = args.join(',');
        if(!cache[strKey]){
            cache[strKey] = func.apply(this, args);
        }
        return cache[strKey];
    }
}

export function GenerateAddOutput(opts) {
    const {
        output_name,
        target_name,
        input_name,
        parameter = "",
        delay = 0,
        max = -1, // infinite
    } = opts;
    return `${output_name}>${target_name}>${input_name}>${parameter}>${delay}>${max}`;
}

let unique_names = new Map();
export function GenerateUniqueName(s: string = "ScriptedEuch") {
    const id = unique_names.getOrInsert(s, 0);
    unique_names.set(s, id+1);
    return s+id;
}
export let GenName = GenerateUniqueName;
