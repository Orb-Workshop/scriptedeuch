import {
    Instance as CSS,
    PointTemplate,
    Entity,
    CSPlayerPawn,
    CSWeaponBase,
    TraceResult,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import System from "../base/System.ts";

export default class SchedulingSystem extends System {
    constructor() {
        super();
    }
    
    setTimeout(callback: () => void, ms: number) {

    }

    setInterval(callback: () => void, ms: number) {

    }

    override Think() {
        
    }
}
