/* Utility Functions */
import {
    Instance as CSS,
    CSPlayerPawn,
    CSPlayerController,
    Entity,
} from "cs_script/point_script";

/** Returns a deep copy of the provided object, `o`.
 */
export function DeepCopy(o) {
    return JSON.parse(JSON.stringify(o));
}

/** Return the player name of a CSPlayerPawn, or `null` if it isn't available. */
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

/** Standard Memoize Function */
export function Memoize(func: Function) {
    const cache = new Map();
    return (...args: any) => {
        const key = new Array(args);
        if(!cache.has(key)){
            cache.set(key, func.apply(this, args));
        }
        return cache.get(key);
    }
}

/** Generate an 'AddOutput' line for IO Events. */
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

/** Returns a generator for generating unique indexed names */
function* UniqueNameGenerator(s: string): Generator<string> {
    let id = 0;
    while(true) {
        yield (s + id++);
    }
}

/** Returns a function that generates unique indexed names prefixed with `s` */
export function UniqueGen(s: string = "ScriptedEuch-"): () => string {
    const gen = UniqueNameGenerator(s);
    return () => gen.next().value;
}


/** Returns 'true' if the given entity has the given classname */
export function CheckClass(e: Entity, classname: string): boolean {
    return (e?.GetClassName() == classname);
}
