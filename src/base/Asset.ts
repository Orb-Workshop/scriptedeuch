/**
   Asset discovery, particularly point_template entities.
*/
import {
    Instance as CSS,
    PointTemplate,
    Entity,
} from "cs_script/point_script";
import { Memoize } from "../util";

/** 
    Search for a class type partially matching a given entity
    name. This can be expressed as a Regular Expression.

    - This lookup can be used to get around Fixup Entity prefabs,
      since it will match against partial strings.

    @see [Entity List](https://cs2.poggu.me/dumped-data/entity-list)
    @returns The first entity encountered partially matching the string, or matching the regex. If nothing is found, it returns `null`.
 */
export function FindByClass(classname: string, r: RegExp | string): Entity | null {
    const entities = CSS.FindEntitiesByClass(classname);
    if (typeof r == "string")
        return entities.find(entity => entity.GetEntityName().includes(r)) ?? null;
    else if (r.constructor.name === "RegExp")
        return entities.find(entity => r.test(entity.GetEntityName())) ?? null;
    else
        throw new Error("Unknown pattern type: " + typeof r);
}

/** 
    Search through cs2 entities of type `classname` partially matching multiple entity
    names. This can be expressed as a Regular Expression.

    - This lookup can be used to get around Fixup Entity prefabs,
      since it will match against partial strings.

    @see [Entity List](https://cs2.poggu.me/dumped-data/entity-list)
    @returns A list of entities partially matching the string, or matching the regex. If nothing is found, it returns an empty list.
 */
export function FindAllByClass(classname: string, r: RegExp | string): Array<Entity> {
    const entities = CSS.FindEntitiesByClass(classname);
    if (typeof r == "string")
        return entities.filter(entity => entity.GetEntityName().includes(r));
    else if (r.constructor.name === "RegExp")
        return entities.filter(entity => r.test(entity.GetEntityName()));
    else
        throw new Error("Unknown pattern type: " + typeof r);
}



/** Find a 'point_template' entity partially matching `r`. */
export function FindTemplate(r: RegExp | string): PointTemplate | null {
    return FindByClass("point_template", r)
}
//export const FindTemplate = Memoize(_FindTemplate);


