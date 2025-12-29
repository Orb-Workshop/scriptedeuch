/*
  Asset discovery, particularly point_template entities.
*/
import { Instance as CSS, PointTemplate } from "cs_script/point_script";

export function FindTemplate(r: Regex): PointTemplate | undefined {
    const templates = CSS.FindEntitiesByClass("point_template");
    return templates.find((template) => r.test(template.GetEntityName()));
}

export function FindSoundTemplate() {
    return FindTemplate(/scriptedeuch\.soundevent\.template/);
}

export function FindLightTemplate() {
    return FindTemplate(/scriptedeuch\.light\.template/);
}
