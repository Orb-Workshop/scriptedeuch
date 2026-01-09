/*
  Defaults, from scriptedeuch prefabs and cs2 assets.
*/
import { Asset } from "./index.ts";

export function SoundTemplate() {
    return Asset.FindTemplate("scriptedeuch.soundevent.template");
}

export function LightTemplate() {
    return Asset.FindTemplate("scriptedeuch.light.template");
}

export function DialogTemplate() {
    return Asset.FindTemplate("scriptedeuch.dialog.template");
}

export function ProjectileTemplate() {
    return Asset.FindTemplate("scriptedeuch.projectile.template");
}
