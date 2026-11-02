/**
   Cloud Storage Instance. Takes advantage of the 1mb cloud data storage. WIP
*/

// Generate a unique ID for this server instance
function generateUID(): string {
    rInt = (i: number) => Math.floor(Math.random() * i);
    let s = "";
    for (let i = 0; i < 32; i++) {
        s += "" + rInt(10);
    }
    return s;
};

const UID = generateUID();

/**
   To guarantee write access
 */
export async function Transact(key: string, data: any) {

}
