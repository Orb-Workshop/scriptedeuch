// Main Entity Helper. Base Adapter Entity.
export { default as EntityHelper } from "./EntityHelper";

// Inherits `Helper.EntityHelper` to resemble cs2 entities
export { default as BaseModelEntity } from "./BaseModelEntity";
export { default as EnvironmentFade } from "./EnvironmentFade";
export { default as EnvironmentHudHint } from "./EnvironmentHudHint";
export { default as FuncBreakable } from "./FuncBreakable";
export { default as FuncButton } from "./FuncButton";
export { default as LogicRelay } from "./LogicRelay";
export { default as PointSoundEvent } from "./PointSoundEvent";
export { default as PointTemplate } from "./PointTemplate";
export { default as PropDynamic } from "./PropDynamic";
export { default as TriggerMultiple } from "./TriggerMultiple";

// Extensions to cs2 entities. Often make up multiple entities
export { default as MoveableSoundEvent } from "./MoveableSoundEvent";

// Color class, implements point_script `Color` interface.
export { default as Color } from "./Color";

