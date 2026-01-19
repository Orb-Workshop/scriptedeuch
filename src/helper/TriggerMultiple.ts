import {
    Instance as CSS,
    Entity,
} from "cs_script/point_script";
import EntityHelper from "./EntityHelper";


/* 
   A helper class for 'trigger_multiple' entities
 */
export default class TriggerMultiple extends EntityHelper {    
    constructor(entity: Entity) {
        super(entity);
    }

    public static From<T = TriggerMultiple>(e: MaybeEntity): T | null {
        return EntityHelper.From<T>(e);
    }

    abstract public static Find<T = TriggerMultiple>(r: RegExp | string): T | null {
        // Overload with each entity helper
        return EntityHelper.FindByClass<TriggerMultiple>("trigger_multiple", r);
    }
    
    OnStartTouch(callback): TriggerMultiple {
        return this.ConnectOutput<TriggerMultiple>("OnStartTouch", callback)
    }

    OnStartTouchAll(callback): TriggerMultiple {
        return this.ConnectOutput<TriggerMultiple>("OnStartTouchAll", callback);
    }

    OnEndTouch(callback): TriggerMultiple {
        return this.ConnectOutput<TriggerMultiple>("OnEndTouch", callback);
    }
    
    OnEndTouchAll(callback): TriggerMultiple {
        return this.ConnectOutput<TriggerMultiple>("OnEndTouchAll", callback);
    }
}
