/**
   Asset discovery, particularly point_template entities.
*/
import { Instance as CSS, PointTemplate } from "cs_script/point_script";
import { Memoize } from "../util";

/** 
    Search for a single class partially matching a given entity
    name. This can be expressed as a Regular Expression.

    - This lookup can be used to get around Fixup Entity prefabs.

    @see [Entity List](https://cs2.poggu.me/dumped-data/entity-list)
 */
export function FindByClass(classname: string, r: RegExp | string): PointTemplate | undefined {
    const entities = CSS.FindEntitiesByClass(classname);
    if (typeof r == "string")
        return entities.find(entity => entity.GetEntityName().includes(r));
    else if (r.constructor.name === "RegExp")
        return entities.find(entity => r.test(entity.GetEntityName()));
    else
        throw new Error("Unknown pattern type: " + typeof r);
}

/** Find a 'point_template' entity partially matching `r`. */
export function FindTemplate(r: RegExp | string): PointTemplate | undefined {
    return FindByClass("point_template", r)
}
//export const FindTemplate = Memoize(_FindTemplate);

