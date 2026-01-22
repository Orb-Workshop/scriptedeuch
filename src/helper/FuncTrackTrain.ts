/**
   Entity Adapter for 'func_tracktrain' cs2 entity.
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

export const CLASSNAME = "func_tracktrain";

export default class FuncTrackTrain extends BaseModelEntity {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): FuncTrackTrain {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`FuncTrackTrain - Classname Error: ${e?.GetClassName()}`);
        return new FuncTrackTrain(e);
    }
   
    public static Find(r: RegExp | string): FuncTrackTrain {
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new FuncTrackTrain(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<FuncTrackTrain> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new FuncTrackTrain(e.raw));
    }

    // IO Event Inputs
    
    public DisableShadows(opts = {}): void {
        this.FireIO({ input: "DisableShadows", ...opts });
    }

    public EnableShadows(opts = {}): void {
        this.FireIO({ input: "EnableShadows", ...opts });
    }

    public SetSpeed(value: number, opts = {}): void {
        this.FireIO({ input: "SetSpeed", value, ...opts });
    }

    public SetMaxSpeed(value: number, opts = {}): void {
        this.FireIO({ input: "SetMaxSpeed", value, ...opts });
    }

    public SetMoveDistanceFromEnd(value: number, opts = {}): void {
        this.FireIO({ input: "SetMoveDistanceFromEnd", value, ...opts });
    }
    
    public SetSpeedDir(value: number, opts = {}): void {
        this.FireIO({ input: "SetSpeedDir", value, ...opts });
    }

    public Stop(opts = {}): void {
        this.FireIO({ input: "Stop", ...opts });
    }

    public StartForward(opts = {}): void {
        this.FireIO({ input: "StartForward", ...opts });
    }

    public StartBackward(opts = {}): void {
        this.FireIO({ input: "StartBackward", ...opts });
    }

    public Resume(opts = {}): void {
        this.FireIO({ input: "Resume", ...opts });
    }

    public Reverse(opts = {}): void {
        this.FireIO({ input: "Reverse", ...opts });
    }

    public Toggle(opts = {}): void {
        this.FireIO({ input: "Toggle", ...opts });
    }

    public MoveToPathNode(value: string, opts = {}): void {
        this.FireIO({ input: "MoveToPathNode", value, ...opts });
    }

    public TeleportToPathNode(value: string, opts = {}): void {
        this.FireIO({ input: "TeleportToPathNode", value, ...opts });
    }

    public LockOrientation(opts = {}): void {
        this.FireIO({ input: "LockOrientation", ...opts });
    }

    public UnlockOrientation(opts = {}): void {
        this.FireIO({ input: "UnlockOrientation", ...opts });
    }
    
    // IO Event Outputs
    
    public OnStart(callback: ConnectOutputCallback): FuncTrackTrain {
        return this.On("OnStart", callback) as FuncTrackTrain;
    }

    public OnNext(callback: ConnectOutputCallback): FuncTrackTrain {
        return this.On("OnNext", callback) as FuncTrackTrain;
    }

    public OnArrivedAtDestinationNode(callback: ConnectOutputCallback): FuncTrackTrain {
        return this.On("OnArrivedAtDestinationNode", callback) as FuncTrackTrain;
    }

    public OnKilled(callback: ConnectOutputCallback): FuncTrackTrain {
        return this.On("OnKilled", callback) as FuncTrackTrain;
    }
    
}

