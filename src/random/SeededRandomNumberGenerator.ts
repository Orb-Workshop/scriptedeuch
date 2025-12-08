/*
  Seeded Random Generator

  Notes:
  - https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript

*/
import { DeepCopy } from "../utils.ts";
import { RandomSeed } from "./utils.ts";

// Pad the input seed into a hashed value
function cyrb128(str: string): [number, number, number, number] {
    let h1 = 1779033703, h2 = 3144134277,
    h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
    return [h1>>>0, h2>>>0, h3>>>0, h4>>>0];
}


// Seeded Random Number Generator Algorithm
function sfc32(a: number, b: number, c: number, d: number): number {
    return function() {
        a |= 0; b |= 0; c |= 0; d |= 0;
        let t = (a + b | 0) + d | 0;
        d = d + 1 | 0;
        a = b ^ b >>> 9;
        b = c + (c << 3) | 0;
        c = (c << 21 | c >>> 11);
        c = c + t | 0;
        return (t >>> 0) / 4294967296;
    };
}


const DEFAULT_TOTAL_DISTRIBUTION = 10_000_000;
export default class SeededRandomNumberGenerator {
    total_distribution: number;
    seed: string;
    hashed_seed: string;
    generator: () => string;
    
    constructor(seed = RandomSeed(), options = {}) {
        this.total_distribution = options.total_distribution || DEFAULT_TOTAL_DISTRIBUTION;

        // Create cyrb128 state:
        this.seed = seed;
        this.hashed_seed = cyrb128(this.seed);
        // Four 32-bit component hashes provide the seed for sfc32.
        this.generator = sfc32(this.hashed_seed[0], this.hashed_seed[1],
			       this.hashed_seed[2], this.hashed_seed[3]);
    }

    _getDistribution(tupl, norm_factor) {
        let dist = [];
        let cstart = 0;
        for (let i = 0; i < tupl.length; i++) {
            let value =   tupl[i][0];
            let percent = tupl[i][1];
            let cend =    cstart + (percent * norm_factor);
            dist.push([cstart, cend, value]);
            cstart = cend;
        }
        return dist; // [[cstart, cend, value], ...]
    }
    
    /*
      Example:
      
      let srng = new SeededRandomNumberGenerator("Test2");
      let dist = {
        Head: 2,
        Chest: 3,
        Legs: 1,
      }
      let gen = () => { return srng.randomDistribution(dist); };
      console.log(gen()); // Head
      console.log(gen()); // Head
      console.log(gen()); // Legs
      console.log(gen()); // Chest
      console.log(gen()); // Chest
      console.log(gen()); // Chest
    */

    // Get random distribution based on keyvalue weights.
    randomDistribution(o: Object): string {
        let tupl = [];
        for (const [k, v] of Object.entries(o)) {
            if (v && v > 0) tupl.push([k, v]);
        }
        const percent_total: number = tupl.reduce((sum, pair) => {
            return (pair[1] + sum);
        }, 0);

        const norm_factor: number = this.total_distribution / percent_total;
        const distribution = this._getDistribution(tupl, norm_factor);
        const rpos: number = this.generator() * this.total_distribution;
        return distribution.find((tupl) => {
            const cstart: number = tupl[0];
            const cend: number = tupl[1];
            return (rpos >= cstart && rpos <= cend); 
        })[2];
    }

    // `norm` is a value between 0.0 and 1.0, and returns true if the
    // generated value is less than `norm`.
    /*
      Examples
      let srng = new SeededRandomNumberGenerator("Test");
      let coinFlip = () => { return srng.randomChance(0.5); };
      let quarter = () => { return coinFlip() && coinFlip(); };
      let deca = () => { return srng.randomChance(0.1); };
    */
    randomChance(norm: number): boolean {
        return (this.generator() <= norm);
    }

    randomFloat(start: number, end?: number): number {
        if (end === undefined) {
            end = start || 1;
            start = 0;
        }
        const result = (end - start) * this.generator() + start;
        return result;
    }

    randomInteger(start: number, end?: number): number {
        return Math.round(this.randomFloat(start, end));
    }

    // Returns a random choice from an array.
    // if `bDelete`, remove the element from the array.
    randomChoice<T = any>(array: Array<T>, bDelete: boolean = false): T | null {
        const idx: number = this.randomInteger(0, array.length-1);
        let result: T = array[idx];
        if (bDelete) array.splice(idx, 1);
        return (result !== undefined) ? result : null;
    }

    // Returns a random combination of values from the `array` as a
    // choice of values of size `count`
    // if `bDelete`, remove the elements from the array.
    randomCombination<T = any>(array: Array<T>, count: number = 1, bDelete: boolean = false): Array<T> {
        let a = null;
        if (bDelete)
            a = array;
        else
            a = DeepCopy(array);
        
        let result: Array<any> = [];
        for (let c = 0; c < count; c++) {
            const idx: number = this.randomInteger(0, a.length-1);
            result.push(a[idx]);
            a.splice(idx, 1);
        }
        return result;
    }

    // Shuffles the elements of an array.
    // if `bCopy`, returns a new array.
    randomShuffle<T = any>(array: Array<T>, bCopy: boolean = false): Array<T> {
        let a = null;
        if (bCopy)
            a = array.map((i) => i);
        else
            a = array;
        
        let cIdx: number = a.length;
        while (cIdx !== 0) {
            let rIdx = this.randomInteger(0, cIdx);
            cIdx -= 1;
            let swp = a[cIdx];
            a[cIdx] = a[rIdx];
            a[rIdx] = swp;
        }
        return a;
    }
}
