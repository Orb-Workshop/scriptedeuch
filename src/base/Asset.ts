/*
  Asset discovery, particularly point_template entities.
*/
import { Instance as CSS, PointTemplate } from "cs_script/point_script";
import { Memoize } from "../utils.ts";

export function FindTemplate(r: Regex): PointTemplate | undefined {
    const templates = CSS.FindEntitiesByClass("point_template");
    for (const template of templates) CSS.Msg(template.GetEntityName());
    return templates.find((template) => r.test(template.GetEntityName()));
}
//export const FindTemplate = Memoize(_FindTemplate);

export function FindSoundTemplate() {
    return FindTemplate(/scriptedeuch\.soundevent\.template/);
}

export function FindLightTemplate() {
    return FindTemplate(/scriptedeuch\.light\.template/);
}
