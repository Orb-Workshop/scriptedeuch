/**
   Math Classes and Functions. Adapters for Instance.Vector, Instance.QAngle interfaces.
 */

export { default as Vector2 } from "./Vector2";
export { default as Vector3 } from "./Vector3";
export { default as QAngle } from "./QAngle";
export { default as BBox2 } from "./BBox2";
export { default as BBox3 } from "./BBox3";
export { default as Point2 } from "./Point2";
export { default as Point3 } from "./Point3";
export { default as LineSegment2 } from "./LineSegment2";
export { default as LineSegment3 } from "./LineSegment3";
export { default as Voronoi } from "./Voronoi";

// Easing Functions
// FIXME: move to a new namespace?
export { default as LinearEasing } from "./LinearEasing";
export {
    EaseInSine as InSineEasing,
    EaseOutSine as OutSineEasing,
    EaseInOutSine as InOutSineEasing,
} from "./EasingFunctions";

