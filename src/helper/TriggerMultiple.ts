import {
    Instance as CSS,
    Entity,
} from "cs_script/point_script";
import { FindByClass } from "../base/Asset.ts";

/* 
   A helper class for 'trigger_multiple' entities
 */
export default TriggerMultiple {
    private entity: Entity;
    
    constructor(entity: Entity) {
        this.entity = entity;
    }

    HandleTouchStart(callback) {
        // ...
    }
}
