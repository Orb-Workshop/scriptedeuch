import {
    Instance as CSS,
    Entity,
    CSPlayerPawn,
    CSWeaponBase,
} from "cs_script/point_script";
import { Mount, System, Actor } from "../base/index.ts";

export default class Projectile extends Actor {
    public entity: Entity;
    public entity_children: Array<Entity>;
    public owner: CSPlayerPawn;
    
    constructor({position, rotation, velocity, template}) {
        super();
    }

    override Think() {
        CSS.Msg("Pew Pew!");
    }

    override ReceiveMessage(name, data) {
        if (name == "Die") this.Remove();
    }

    override Dispose() {
        CSS.Msg("Dead!");
    }
}
