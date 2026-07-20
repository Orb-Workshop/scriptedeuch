/**
   Grid Utility Functions
*/

/**
   Displays given Z-depth of a 3D Grid as a slice. Default z=0.
 */
export function Display2D(g: Grid3D, z: number = 0): void {
    for (let j = g.height-1; j >= 0; j--) {
	let line = "";
	for (let i = 0; i < g.width; i++) {
	    line += " ";
	    let v = g.getAt(i, j, z);
	    if (typeof v == "string")
		v = (v.length > 0) ? v[0] : "!";
	    else if (typeof v == "number")
		v = v.toString()[0];
	    else {
		v = "X";
	    }
	    line += v;
	}
	console.log(line);
    }
}
