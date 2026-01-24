import Easing from "./Easing";

/** Returns a value between 0.0 and 1.0. lerp.  */
export default class LinearEasing extends Easing {
    constructor(start, end) {
        super(start, end); // Initialized `this.start` and `this.end`.
    }

    /**
       Calculate linear easing between `this.start` and `this.end` domain.

       @param value - A normalized value between 0 and 1.

       @returns A value between 0.0 and 1.0.
     */
    override protected Calculate(value: number): number {
        return value;
    }

}
