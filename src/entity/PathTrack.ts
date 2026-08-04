/**
   Entity Adapter for 'path_track' cs2 entity.
 */
import {
    Instance as CSS,
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import {
    default as EntityHelper,
    ConnectOutputCallback,
} from "./EntityHelper";
import * as Base from "../base";
import * as Util from "../util";
import { default as BaseModelEntity } from "./BaseModelEntity";

export const CLASSNAME = "path_track";

export default class PathTrack extends BaseModelEntity {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): PathTrack {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`PathTrack - Classname Error: ${e?.GetClassName()}`);
        return new PathTrack(e);
    }
   
    public static Find(r: RegExp | string): PathTrack {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new PathTrack(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<PathTrack> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new PathTrack(e.raw));
    }

    // IO Event Inputs
    
    public TogglePath(opts = {}): void {
        this.FireIO({ input: "TogglePath", ...opts });
    }

    public EnablePath(opts = {}): void {
        this.FireIO({ input: "EnablePath", ...opts });
    }

    public DisablePath(opts = {}): void {
        this.FireIO({ input: "DisablePath", ...opts });
    }

    public ToggleAlternatePath(opts = {}): void {
        this.FireIO({ input: "ToggleAlternatePath", ...opts });
    }

    public EnableAlternatePath(opts = {}): void {
        this.FireIO({ input: "EnableAlternatePath", ...opts });
    }

    public DisableAlternatePath(opts = {}): void {
        this.FireIO({ input: "DisableAlternatePath", ...opts });
    }
    
    // IO Event Outputs
    
    public OnPass(callback: ConnectOutputCallback): PathTrack {
        return this.On("OnPass", callback) as PathTrack;
    }
    
}

