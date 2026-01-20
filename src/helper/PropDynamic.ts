/**
   Entity Adapter for 'prop_dynamic'
 */
import {
    Instance as CSS,
    Entity,
    Color as ColorType,
} from "cs_script/point_script";
import * as Util from "../util";
import {
    default as EntityHelper,
    ConnectOutputCallback,
} from "./EntityHelper";
import BaseModelEntity from "./BaseModelEntity";
import FuncBreakable from "./FuncBreakable";

export const CLASSNAME = "prop_dynamic";
export default class PropDynamic extends FuncBreakable {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): PropDynamic {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`PropDynamic - Classname Error: ${e?.GetClassName()}`);
        return new PropDynamic(e);
    }

    public static Find(r: RegExp | string): PropDynamic {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new PropDynamic(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<PropDynamic> {
        // Overload with each entity helper
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new PropDynamic(e.raw));
    }
}
