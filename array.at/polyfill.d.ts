/**
 * The at() method of Array instances takes an integer value and returns the
 * item at that index, allowing for positive and negative integers. Negative
 * integers count back from the last item in the array.
 *
 * @module array.at
 * @category ES2022
 * @example
 *   [1, 2, 3].at(-1);
 *   //=> 3
 *
 * @see [Proposal for an .at() method on all the built-in indexables](https://github.com/tc39/proposal-relative-indexing-method)
 * @see [Array.prototype.at() | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
 * @see [23.1.3.1 Array.prototype.at ( index ) | ECMA262](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at)
 */
declare global {
  interface Array<T> {
    at(index: number): T | undefined;
  }
}
export {};
