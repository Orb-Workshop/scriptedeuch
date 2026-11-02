/*
  Exhaustive List of easing functions to choose from.
  @see: https://easings.net/#
*/
import Easing from "./Easing";

export class EaseInSine extends Easing {
    constructor(start: number, end: number) { super(start, end); }
    protected override Calculate(x: number): number {
        return 1 - Math.cos((x * Math.PI) / 2);
    }
}

export class EaseOutSine extends Easing {
    constructor(start: number, end: number) { super(start, end); }
    protected override Calculate(x: number): number {
        return Math.sin((x * Math.PI) / 2);
    }
}

export class EaseInOutSine extends Easing {
    constructor(start: number, end: number) { super(start, end); }
    protected override Calculate(x: number): number {
        return -(Math.cos(Math.PI * x) - 1) / 2;
    }
}
