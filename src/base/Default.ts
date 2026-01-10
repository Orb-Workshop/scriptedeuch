/*
  Defaults, from scriptedeuch prefabs and cs2 assets.
*/
import { Asset } from "./index";

export const SOUND_EVENT_TEMPLATE = "scriptedeuch.soundevent.template";
export function SoundTemplate() {
    return Asset.FindTemplate(SOUND_EVENT_TEMPLATE);
}

export const LIGHT_TEMPLATE = "scriptedeuch.light.template"
export function LightTemplate() {
    return Asset.FindTemplate(LIGHT_TEMPLATE);
}

export const DIALOG_TEMPLATE = "scriptedeuch.dialog.template"
export function DialogTemplate() {
    return Asset.FindTemplate(DIALOG_TEMPLATE);
}

export const PROJECTILE_TEMPLATE = "scriptedeuch.projectile.template"
export function ProjectileTemplate() {
    return Asset.FindTemplate(PROJECTILE_TEMPLATE);
}
