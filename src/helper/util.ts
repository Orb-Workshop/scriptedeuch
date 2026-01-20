/**
   
 */
import * as Event from "../event";

export function RemoveActorOnRoundEnd(a: Actor): void {
    const listener = Event.GetGlobalListener();
    listener.On("RoundEnd", () => { a.Remove(); listener.Remove(); })
}
