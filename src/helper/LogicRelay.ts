/**
   Entity Adapter for 'LogicRelay'
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


export const CLASSNAME = "logic_relay";
export default class LogicRelay extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): LogicRelay {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`LogicRelay - Classname Error: ${e?.GetClassName()}`);
        return new LogicRelay(e);
    }

    public static Find(r: RegExp | string): LogicRelay {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new LogicRelay(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<LogicRelay> {
        // Overload with each entity helper
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new LogicRelay(e.raw));
    }

    // IO Event Inputs
    public Enable(opts = {}): void {
        this.FireIO({ input: "Enable", ...opts });
    }

    public Disable(opts = {}): void {
        this.FireIO({ input: "Disable", ...opts });
    }

    public Toggle(opts = {}): void {
        this.FireIO({ input: "Toggle", ...opts });
    }

    public Trigger(opts = {}): void {
        this.FireIO({ input: "Trigger", ...opts });
    }
    
    // IO Event Outputs
    public OnTrigger(callback: ConnectOutputCallback): LogicRelay {
        return this.On("OnTrigger", callback) as LogicRelay;
    }
}
