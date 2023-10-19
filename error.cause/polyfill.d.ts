/**
 * If the error were thrown from deep internal methods, the thrown error may not be straightforward to be easily conducted without proper exception design pattern. Catching an error and throwing it with additional contextual data is a common approach of error handling pattern. Multiple methods are available to augment the caught error with additional contextual information:
 *
 * @module error.cause
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
  