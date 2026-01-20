/**
   Entity Adapter for 'info_map_parameters' cs2 entity.
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import { default as EntityHelper, MaybeEntity } from "./EntityHelper";
import * as Util from "../util";
import * as Event from "../event";
import { RemoveActorOnRoundEnd } from "./util";

export const CLASSNAME = "info_map_parameters";

export default class InfoMapParameters extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
        //RemoveActorOnRoundEnd(this);
    }

    public static From(e: Entity): InfoMapParameters {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`InfoMapParameters - Classname Error: ${e?.GetClassName()}`);
        return new InfoMapParameters(e);
    }

    public static Find(r: RegExp | string): InfoMapParameters {
        // Overload with each entity helper
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new InfoMapParameters(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<InfoMapParameters> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new InfoMapParameters(e.raw));
    }

    // IO Event Inputs
    
    public FireWinCondition(value: WinCondition, opts = {}): void {
        this.FireIO({ input: "FireWinCondition", value, ...opts });
    }
}

/** @see: https://developer.valvesoftware.com/wiki/Info_map_parameters_(Counter-Strike_series) */
export enum WinCondition {
    TARGET_BOMBED =      0,    // T
    VIP_ESCAPED =        1,    // CT
    VIP_ASSASSINATED =   2,    // T
    TERRORISTS_ESCAPED = 3,    // T
    CTS_PREVENT_ESCAPE = 4,    // CT
    ESCAPING_TERRORISTS_NEUTRALIZED = 5, // CT
    BOMB_DEFUSED =       6,    // CT
    CTS_WIN =            7,    // CT
    TERRORISTS_WIN =     8,    // T
    DRAW =               9,    // DRAW
    ALL_HOSTAGES_RESCUED=10,   // CT
    TARGET_SAVED =       11,   // CT
    HOSTAGES_NOT_RESCUED=12,   // T
    TERRORISTS_NOT_ESCAPED=13, // CT
    VIP_NOT_ESCAPED =    14,   // T
    GAME_COMMENCING =    15,   // DRAW
}
