/*
  Asset discovery, particularly point_template entities.
*/
import { Instance as CSS, PointTemplate } from "cs_script/point_script";
import { Memoize } from "../utils.ts";

export function FindByClass(classname, r: Regex) {
    const template = CSS.FindEntitiesByClass(classname);
    return templates.find(template => r.test(template.GetEntityName()));
}

export function FindTemplate(r: Regex): PointTemplate | undefined {
    return FindByClass("point_template", r)
}
//export const FindTemplate = Memoize(_FindTemplate);

export function FindSoundTemplate() {
    return FindTemplate(/scriptedeuch\.soundevent\.template/);
}

export function FindLightTemplate() {
    return FindTemplate(/scriptedeuch\.light\.template/);
}

export function FindDialogTemplate() {
    return FindTemplate(/scriptedeuch\.dialog\.template/);
}
