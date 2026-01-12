/**
   A Simplex Noise Implemetation.

   @see [SimpleNoise Java Implementation](https://github.com/SRombauts/SimplexNoise/blob/master/references/SimplexNoise.java)
 */

/** Array Gradient */
class Grad {
    x: number;
    y: number;
    z: number;
    
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

/** 2D Simplex Noise */
export default class SimplexNoise {
    static grad3: Array<Grad> = [
        new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
        new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
        new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1),
    ];

    static p: Array<number> = [
        151,160,137,91,90,15,
        131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
        190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
        88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,
        77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
        102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,
        135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,
        5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
        223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,
        129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,
        251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,
        49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,
        138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,
    ];

    static _fill_perm(): Array<number> {
        let p = SimplexNoise.p;
        let perm = [];
        SimplexNoise.p.forEach((v, i) => {
            perm.push(p[i & 255]);
        });
        return perm;
    }
    static perm: Array<number> = SimplexNoise._fill_perm();

    static _fill_permMod12(): Array<number> {
        let p: Array<number> = SimplexNoise.p;
        let permMod12: Array<number> = [];
        p.forEach((v, i) => {
            permMod12.push(p[i] % 12);
        });
        return permMod12;
    }
    static permMod12: Array<number> = SimplexNoise._fill_permMod12();

    // Skewing and Unskewing Factors
    static F2: number = 0.5*(Math.sqrt(3.0)-1.0);
    static G2: number = (3.0-Math.sqrt(3.0))/6.0;

    // Matrix Functions
    static dot(g: Grad, x: number, y: number): number {
        return g.x*x + g.y*y;
    }

    /** Main Static Method */
    static noise(xin: number, yin: number): number {
        // Import our static members
        const grad3: Array<Grad> = SimplexNoise.grad3;
        const perm: Array<number> = SimplexNoise.perm;
        const permMod12: Array<number> = SimplexNoise.permMod12;
        const F2: number = SimplexNoise.F2;
        const G2: number = SimplexNoise.G2;
        const dot: Function = SimplexNoise.dot;
        //
        let n0: number = 0.;
        let n1: number = 0.;
        let n2: number = 0.;
        let s: number = (xin+yin)*F2;
        let i: number = Math.floor(xin+s);
        let j: number = Math.floor(yin+s);
        let t: number = (i+j)*G2;
        let X0: number = i-t;
        let Y0: number = j-t;
        let x0: number = xin-X0;
        let y0: number = yin-Y0;

        // Determine which simplex cell we are in.
        let i1: number = 0;
        let j1: number = 0;
        if (x0>y0)
            i1 = 1;
        else
            j1 = 1;

        let x1: number = x0 - i1 + G2;
        let y1: number = y0 - j1 + G2;
        let x2: number = x0 - 1.0 + 2.0 * G2;
        let y2: number = y0 - 1.0 + 2.0 * G2;
        // Work out the hashed gradient indices of the three simplex corners
        let ii: number = i & 255;
        let jj: number = j & 255;
        let gi0: number = permMod12[ii+perm[jj]];
        let gi1: number = permMod12[ii+i1+perm[jj+j1]];
        let gi2: number = permMod12[ii+1+perm[jj+1]];
        // Calculate the contribution from the three corners
        let t0: number = 0.5 - x0*x0-y0*y0;
        if (t0 < 0) {
            n0 = 0.;
        }
        else {
            t0 *= t0;
            n0 = t0 * t0 * dot(grad3[gi0], x0, y0);
        }
        let t1: number = 0.5 - x1*x1-y1*y1;
        if (t1 < 0) {
            n1 = 0.;
        }
        else {
            t1 *= t1;
            n1 = t1 * t1 * dot(grad3[gi1], x1, y1);
        }
        let t2: number = 0.5 - x2*x2-y2*y2;
        if (t2 < 0) {
            n2 = 0.;
        }
        else {
            t2 *= t2;
            n2 = t2 * t2 * dot(grad3[gi2], x2, y2);
        }

        return 70.0 * (n0 + n1 + n2);
    }
}
