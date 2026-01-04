import {
    Instance as CSS,
    Entity,
} from "cs_script/point_script";
import { FindByClass } from "../base/Asset.ts";
import EntityHelper from "./EntityHelper.ts";


/* 
   A helper class for 'trigger_multiple' entities
 */
export default class TriggerMultiple extends EntityHelper {    
    constructor(entity: Entity) {
        super(entity);
    }

    HandleStartTouch(callback): number {
        return CSS.ConnectOutput(this.raw, "OnStartTouch", callback)
    }

    HandleStartTouchAll(callback): number {
        return CSS.ConnectOutput(this.raw, "OnStartTouchAll", callback);
    }

    HandleEndTouch(callback): number {
        return CSS.ConnectOutput(this.raw, "OnEndTouch", callback);
    }
    
    HandleEndTouchAll(callback): number {
        return CSS.ConnectOutput(this.raw, "OnEndTouchAll", callback);
    }
}
