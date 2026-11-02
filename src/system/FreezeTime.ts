/**
   Simple System that returns whether the freeze time is up when a
   round starts. Can also be used to retrieve the actual round time.
   
   Notes:

   - Includes Automount functions.
*/
import { Instance as CSS } from "cs_script/point_script";
import * as Base from "../base";

const SystemName = "DefaultFreezeTime";

export default class FreezeTimeSystem extends Base.System {
    private freeze_start_time: number = CSS.GetGameTime();
    private freeze_end_time: number = CSS.GetGameTime();
    private round_start_time: number = CSS.GetGameTime();
    private round_end_time: number = CSS.GetGameTime();
    private is_round_ended: boolean = false;
    
    constructor() {
        super();
    }

    /**
       The elapsed amount of time since the round began, and the match has been frozen.
    */
    public GetElapsedFreezeTime(): number {
        return this.freeze_end_time - this.freeze_start_time;
    }

    /** 
        Returns the elapsed time since the round started, taking into
        account the freeze time.

        Note:

        - During the frozen period, this should be zero.
    */
    public GetElapsedRoundTime(): number {
        if (CSS.IsFreezePeriod()) return 0;
        return this.round_end_time - this.round_start_time;
    }
    
    override OnRoundStart() {
        this.freeze_start_time = CSS.GetGameTime();
        this.is_round_ended = false;
    }

    override OnRoundEnd() {
        this.is_round_ended = true;
    }
    
    override Think() {
        if (CSS.IsFreezePeriod()) {
            this.freeze_end_time = CSS.GetGameTime();
            this.round_start_time = CSS.GetGameTime();
            this.round_end_time = CSS.GetGameTime();
        }
        else if (!this.is_round_ended) {
            this.round_end_time = CSS.GetGameTime();
        }
    }
}

function AutoMount(): FreezeTimeSystem {
    if (!Base.Mount.HasSystem(SystemName)) {
        Base.Mount.Register(SystemName, new FreezeTimeSystem());
    }
    return Base.Mount.GetSystem(SystemName);
}

export function GetElapsedRoundTime(): number {
    return AutoMount().GetElapsedRoundTime();
}

export function GetElapsedFreezeTime(): number {
    return AutoMount().GetElapsedFreezeTime();
}


