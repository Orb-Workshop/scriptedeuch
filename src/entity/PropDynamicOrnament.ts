/**
   Entity Adapter for 'prop_dynamic_ornament'
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
import PropDynamic from "./PropDynamic";

export const CLASSNAME = "prop_dynamic_ornament";
export default class PropDynamicOrnament extends PropDynamic {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): PropDynamicOrnament {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`PropDynamicOrnament - Classname Error: ${e?.GetClassName()}`);
        return new PropDynamicOrnament(e);
    }

    public static Find(r: RegExp | string): PropDynamicOrnament {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new PropDynamicOrnament(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<PropDynamicOrnament> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new PropDynamicOrnament(e.raw));
    }

    // IO Event Inputs

    // activator or value
    public SetAttached(opts = {}): void {
        this.FireIO({ input: "SetAttached", ...opts });
    }

    public Detached(opts = {}): void {
        this.FireIO({ input: "Detached", ...opts });
    }
}
