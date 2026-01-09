import {
    Instance as CSS, CSPlayerPawn,
    CSWeaponBase, CSWeaponData,
    CSGearSlot,
} from "cs_script/point_script";
import { System } from "../base/index";

// Weapon replacement example
/*
  weaponReplacement = new WeaponReplacementSystem({primary: {
    "weapon_g3sg1": "weapon_famas",
    "weapon_aug": "weapon_sg556",
  }})
*/

type Dict = {[key: string]: string};
export default class WeaponReplacementSystem extends System {
    private primary: Dict;
    private secondary: Dict;
    private melee: Dict;
    
    constructor({
        primary = {},
        secondary = {},
        melee = {},
    }) {
        super();
        this.primary = primary;
        this.secondary = secondary;
        this.melee = melee;
    }

    override OnActivate() {
        CSS.Msg("Weapon Replacement System Activated!");
    }
    
    private replacePrimary(player_pawn: CSPlayerPawn) {
        const weapon_primary: CSWeaponBase | undefined = player_pawn.FindWeaponBySlot(
            CSGearSlot.RIFLE);
        const weapon_name = weapon_primary?.GetData()?.GetName()
        if (!weapon_name) return;
        const replacement_weapon = this.primary[weapon_name];
        if (!replacement_weapon) return;
        weapon_primary.Remove();
        player_pawn.GiveNamedItem(replacement_weapon, true);
    }

    public ReplaceWeapons(player_pawn: CSPlayerPawn) {
        this.replacePrimary(player_pawn);
    }
    
    override Tick() {
        const players = CSS.FindEntitiesByClass("player"); // CSPlayerPawn
        players.forEach(player_pawn => this.ReplaceWeapons(player_pawn))
    }

    override OnPlayerReset(event) {
        const player_pawn: CSPlayerPawn = event.player;
        this.ReplaceWeapons(player_pawn);
    }
}
