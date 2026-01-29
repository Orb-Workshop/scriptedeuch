/**
   @see: https://playfulprogramming.com/posts/what-are-signals/
*/

export default class Signal {
    static Listener: Function = null;
    private subscribers: Set<Function> = new Set();
    private value: any;
    constructor(initial_value = false) {
        this.value = initial_value;
    }

    static Create(value: any = false): Signal {
        return new Signal(value);
    }

    static Computed(fn: Function) {
        const value_signal = Signal.Create(fn);

        Signal.Effect(() => {
            value_signal.set(fn());
        });

        return {
            get: value_signal.get,
        }
    }

    static Effect(fn: Function) {
        Signal.Listener = fn;
        fn();
        Signal.Listener = null;
    }
    
    get(): any {
        if (Signal.Listener) {
            this.subscribers.add(Signal.Listener);
        }
        return this.value;
    }

    set(value: any): void {
        if (this.value === value) return;
        this.value = value;
        this.subscribers.forEach(fn => fn());
    }
}
