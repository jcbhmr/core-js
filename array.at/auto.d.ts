/**
 * @module array.at
 * @category ES2022
 * @see https://github.com/tc39/proposal-relative-indexing-method
 * @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
 */
declare global {
  interface Array<T> {
    at(index: number): T | undefined;
  }
}
export {};
