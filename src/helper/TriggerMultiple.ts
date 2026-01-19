import {
    Instance as CSS,
    Entity,
} from "cs_script/point_script";
import {
    default as EntityHelper,
    ConnectOutputCallback,
} from "./EntityHelper";

const CLASSNAME = "trigger_multiple";

/* 
   An adapter class for 'trigger_multiple' entities
 */
export default class TriggerMultiple extends EntityHelper {    
    constructor(entity: Entity) {
        super(entity);
    }

    public static From<T = TriggerMultiple>(e: MaybeEntity): T | null {
        return EntityHelper.From<TriggerMultiple>(e);
    }

    abstract public static Find<T = TriggerMultiple>(r: RegExp | string): T | null {
        return EntityHelper.FindByClass<TriggerMultiple>(CLASSNAME, r);
    }

    abstract public static FindAll<T = TriggerMultiple>(r: RegExp | string): Array<T> {
        return EntityHelper.FindByClass<TriggerMultiple>(CLASSNAME, r);
    }
    
    OnStartTouch(callback: ConnectOutputCallback): TriggerMultiple {
        return this.On<TriggerMultiple>("OnStartTouch", callback)
    }

    OnStartTouchAll(callback: ConnectOutputCallback): TriggerMultiple {
        return this.On<TriggerMultiple>("OnStartTouchAll", callback);
    }

    OnEndTouch(callback: ConnectOutputCallback): TriggerMultiple {
        return this.On<TriggerMultiple>("OnEndTouch", callback);
    }
    
    OnEndTouchAll(callback: ConnectOutputCallback): TriggerMultiple {
        return this.On<TriggerMultiple>("OnEndTouchAll", callback);
    }
}
