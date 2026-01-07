/*
  Asset discovery, particularly point_template entities.
*/
import { Instance as CSS, PointTemplate } from "cs_script/point_script";
import { Memoize } from "../utils.ts";

export function FindByClass(classname: string, r: RegExp | string): PointTemplate | undefined {
    const entities = CSS.FindEntitiesByClass(classname);
    if (typeof r == "string")
        return entities.find(entity => entity.GetEntityName().includes(r));
    else if (r.constructor.name === "RegExp")
        return entities.find(entity => r.test(entity.GetEntityName()));
    else
        throw new Error("Unknown pattern type: " + typeof r);
}

export function FindTemplate(r: RegExp | string): PointTemplate | undefined {
    return FindByClass("point_template", r)
}
//export const FindTemplate = Memoize(_FindTemplate);

// default
export function FindSoundTemplate() {
    return FindTemplate("scriptedeuch.soundevent.template");
}

// default
export function FindLightTemplate() {
    return FindTemplate("scriptedeuch.light.template");
}

// default
export function FindDialogTemplate() {
    return FindTemplate("scriptedeuch.dialog.template");
}
