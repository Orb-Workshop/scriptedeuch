/**
   Interface used by Grid3D and SubGrid.
*/
export interface GridType<T> {
    width: number;
    height: number;
    depth: number;
    size(): number;
    index(x: number, y: number, z: number): number;
    forEachIndex(f: (i: number, j: number, k: number) => void): void;
    getAt(i: number, j: number, k: number): T;
    setAt(i: number, j: number, k: number, v: T): void;
    hasAt(i: number, j: number, k: number): bool;
    locateElement(x: number, y: number, z: number): T;
}
