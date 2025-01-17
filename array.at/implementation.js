/** @module array.at */
"use strict";
var ToLength = require("../lib/ToLength.js");
var ToIntegerOrInfinity = require("../lib/ToIntegerOrInfinity.js");
/**
 * @template T
 * @param {number} index
 * @name Array.prototype.at
 * @this {ArrayLike<T>}
 */
module.exports = function at(index) {
  // 1. Let O be ? ToObject(this value).
  /** @type {T[]} */
  var O = Object(this);
  // 2. Let len be ? LengthOfArrayLike(O).
  var len = ToLength(O.length);
  // 3. Let relativeIndex be ? ToIntegerOrInfinity(index).
  var relativeIndex = ToIntegerOrInfinity(index);
  // 4. If relativeIndex ≥ 0, then
  /** @type {number} */
  var k;
  if (relativeIndex >= 0) {
    // a. Let k be relativeIndex.
    k = relativeIndex;
  }
  // 5. Else,
  else {
    // a. Let k be len + relativeIndex.
    k = len + relativeIndex;
  }
  // 6. If k < 0 or k ≥ len, return undefined.
  if (k < 0 || k >= len) {
    return undefined;
  }
  // 7. Return ? Get(O, ! ToString(𝔽(k))).
  return O[k];
};
