/** @module relative-indexing-method @category ES2022 */
declare global {
  interface Array<T> {
    at(index: number): T | undefined;
  }
}
export {};
