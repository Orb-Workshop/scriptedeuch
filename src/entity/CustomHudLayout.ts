/**
   Entity Adapter for 'custom_hud_layout' cs2 entity.
*/
import { Instance as CSS } from "cs_script/point_script";
import type {
    Entity,
    Vector as VectorType,
    QAngle as QAngleType,
} from "cs_script/point_script";
import { default as EntityHelper, MaybeEntity } from "./EntityHelper";
import * as Util from "../util";
import * as Event from "../event";

export const CLASSNAME = "custom_hud_layout";

export default class CustomHudLayout extends EntityHelper {
    constructor(entity: Entity) {
        super(entity);
    }

    public static From(e: Entity): CustomHudLayout {
        if (!Util.CheckClass(e, CLASSNAME))
            throw new Error(`CustomHudLayout - Classname Error: ${e?.GetClassName()}`);
        return new CustomHudLayout(e);
    }

    public static Find(r: RegExp | string): CustomHudLayout {
        // Overload with each entity helper
        const e = EntityHelper.FindByClass(CLASSNAME, r, true);
        return new CustomHudLayout(e.raw);
    }

    public static FindAll(r: RegExp | string): Array<CustomHudLayout> {
        const es = EntityHelper.FindAllByClass(CLASSNAME, r);
        return es.map(e => new CustomHudLayout(e.raw));
    }

    SetHasClass(panelId: string, className: string, hasClass?: bool): void {
	this.raw.SetHasClass(panelId, className, hasClass);
    }

    SetHasClassForPlayer(playerSlot: number, panelId: string, className: string, hasClass?: bool): void {
	this.raw.SetHasClassForPlayer(playerSlot, panelId, className, hasClass);
    }

    SetDialogVariableString(panelId: string, variableName: string, value: string): void {
	this.raw.SetDialogVariableString(panelId, variableName, value);
    }

    SetDialogVariableStringForPlayer(playerSlot: number, panelId: string, variableName: string, value: string): void {
	this.raw.SetDialogVariableStringForPlayer(playerSlot, panelId, variableName, value);
    }

    SetInputCaptureEnabled(playerSlot: number, enabled: bool): void {
	this.raw.SetInputCaptureEnabled(playerSlot, enabled);
    }

    IsInputCaptureEnabled(playerSlot: number): bool {
	return this.raw.IsInputCaptureEnabled(playerSlot);
    }
}
