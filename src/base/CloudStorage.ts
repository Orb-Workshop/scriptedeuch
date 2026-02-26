/**
   Cloud Storage Instance. Takes advantage of the 1mb cloud data storage.
*/

// Generate a unique ID for this server instance
const UID = () => {
    rInt = (i) => Math.floor(Math.random() * i);
    let s = "";
    for (let i = 0; i < 32; i++) {
        s += "" + rInt(10);
    }
    return s;
}();

/**
   To guarantee write access
 */
export async function Transact(key, data) {
    
}

