/*
  Defaults, from scriptedeuch prefabs and cs2 assets.
*/
import { PointTemplate } from "cs_script/point_script";
import { Asset } from "./index";

export const SOUND_EVENT_TEMPLATE = "scriptedeuch.soundevent.template";
export function SoundTemplate(): PointTemplate {
    return Asset.FindTemplate(SOUND_EVENT_TEMPLATE);
}

export const LIGHT_TEMPLATE = "scriptedeuch.light.template"
export function LightTemplate(): PointTemplate {
    return Asset.FindTemplate(LIGHT_TEMPLATE);
}

export const DIALOG_TEMPLATE = "scriptedeuch.dialog.template"
export function DialogTemplate(): PointTemplate {
    return Asset.FindTemplate(DIALOG_TEMPLATE);
}

export const PROJECTILE_TEMPLATE = "scriptedeuch.projectile.template"
export function ProjectileTemplate(): PointTemplate {
    return Asset.FindTemplate(PROJECTILE_TEMPLATE);
}
