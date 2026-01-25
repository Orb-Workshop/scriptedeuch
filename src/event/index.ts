
// Create your own tagged event systems between actors and systems.
export { default as Listener } from "./Listener";
export { default as Sender } from "./Sender";

// Use the global events in your custom actors and helper functions.
export {
    GetGlobalListener,
    
    // Break-out Listeners. Similar to System instance events, except
    // you can't relay a return value. (no return on OnBeforePlayerDamage)
    OnActivate,
    OnRoundStart,
    OnRoundEnd,
    OnPlayerJump,
} from "./Global";
