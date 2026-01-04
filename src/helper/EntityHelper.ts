import {
    Instance as CSS,
    Entity,
} from "cs_script/point_script";

export default class EntityHelper {
    private entity: Entity;
    constructor(entity: Entity) {
        this.entity = entity;
    }

    public get raw(): Entity { return this.entity }
    
    FireEvent(opts = {}) {
        opts["target"] = this.entity;
        CSS.FireAtTarget(opts);
    }
}
