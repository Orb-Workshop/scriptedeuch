/**

   Abstract class for Easing functions.

 */
export default abstract class Easing {
    private is_inverted: boolean = false;
    private start: number;
    private end: number;
    
    constructor(start = 0.0, end = 1.0) {
        if (start < end) {
            this.start = start;
            this.end = end;
            this.is_inverted = false;
        }
        else {
            this.start = end;
            this.end = start;
            this.is_inverted = true;
        }
    }

    /** 
        Calculate the easing at `value`.
        @param value - A value between `this.start` and `this.end`.

        @returns A value between 0.0 and 1.0 over the `this.start` and `this.end` domain.
    */
    public At(value: number): number {
        let result = null;
        if (value <= this.start) return 0.0;
        if (value >= this.end) return 1.0
                
        // normalize our value between 0. and 1.
        const normalized_value = (value - this.start) / (this.end - this.start)
        result = this.Calculate(normalized_value);

        return result;
    }

    /**
        Calculate the easing within the `this.start` and `this.end`
        window. This method is extended to provide different easing
        characteristics.

        @param value - Normalized value between 0 and 1, within the `this.start` and `this.end` window.

        @returns A constant of `1`. Useless abstract easing!
    */
    abstract protected Calculate(value: number): number {
        return 1.0;
    }
}
