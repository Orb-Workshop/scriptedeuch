/**
   Used to incorporate several different in-world Entities receiving
   damage effects, or environmental effects. By combining it into a
   system, something like someone under the effect of 'fire' could be
   extinguished with 'water' or an 'ice' effect. Someone 'wet' becomes
   weaker to 'lightning'. Dousing someone in gasoline/pee makes
   them take more fire damage.
 */
//import { Instance as CSS } from "cs_script/point_script";
import { System } from "../base";
import type  {
    Entity,
    CSPlayerPawn,
    BaseModelEntity,
} from "cs_script/point_script";
import type IEffect from "./IEffect";


export default class Controller extends System {
    effected_entities: Map<Entity, Array<IEffect>> = new Map();

    constructor() {
	super();
    }

    public registerEffect(): void {

    }
}
