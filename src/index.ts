/* Library Framework */

/** Main Mounter for Base.System and Base.Actor. 'Mounts' onto the
 * `point_script` instance event callbacks, with each `Base.System`
 * and `Base.Actor`.
 */
export { Mount } from "./mount";

/** Base Library Framework Components */
export * as Base from "./base";

/** Mountable Systems that extend `Base.System` */
export * as System from "./system";

/** Spawnable Actors (Auto-Mounting) that extend `Base.Actor` */
export * as Actor from "./actor";

/** Effects that can react to each other. */
export * as Effect from "./effect";

/** Event Listener and Sender */
export * as Event from "./event";

/** Utility Library */
export * as Util from "./util";

/** Math Library */
export * as Math from "./math";

/** Grid Library */
export * as Grid from "./grid";

/** Randomness Library */
export * as Random from "./random";

/** Noisy Library */
export * as Noise from "./noise";

/** Entity Helper Library */
export * as Entity from "./entity";

/** Procedural Generation Library */
export * as Procgen from "./procgen";

/** Color Library */
export { Color } from "./color";
