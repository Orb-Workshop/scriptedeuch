/*
  Asset discovery, particularly point_template entities.
*/
import { Instance as CSS, PointTemplate } from "cs_script/point_script";
import { Memoize } from "../utils.ts";

export function FindByClass(classname: string, r: Regex): PointTemplate | undefined {
    const entities = CSS.FindEntitiesByClass(classname);
    return entities.find(entity => r.test(entity.GetEntityName()));
}

export function FindTemplate(r: Regex): PointTemplate | undefined {
    return FindByClass("point_template", r)
}
//export const FindTemplate = Memoize(_FindTemplate);

// default
export function FindSoundTemplate() {
    return FindTemplate(/scriptedeuch\.soundevent\.template/);
}

// default
export function FindLightTemplate() {
    return FindTemplate(/scriptedeuch\.light\.template/);
}

// default
export function FindDialogTemplate() {
    return FindTemplate(/scriptedeuch\.dialog\.template/);
}

// default
export function FindProjectileTemplate() {
    return FindTemplate(/scriptedeuch\.projectile\.template/);
}
