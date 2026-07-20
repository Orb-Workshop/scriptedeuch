/**
   Errors for the Grid.
 */

export default class GridError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "GridError";
        Object.setPrototypeOf(this, GridError.prototype);
    }
}
