import {
    Instance as CSS,
    Vector as VectorType,
} from "cs_script/point_script";
import * as Base from "../base";
import * as Math from "../math";

const DEFAULT_PLAYER_MASS = 80; //kg
const DEFAULT_DEBRIS_MASS = 3; //kg

export default class Explosion extends Base.Actor {
    constructor({
        position = Math.Vector3.Zero,
        radius = 50, // sphere radius
        
        player_force = 100,
        player_force_falloff = 0.01,
        player_damage = 100,
        player_damage_falloff = 0.5, // half damage at 50 units
        
        //debris_force = 10,
        //debris_damage = 100,
        //debris_damage_falloff = 0.0, // no falloff
    }) {
        super();
        this.position = position;
    }
}
