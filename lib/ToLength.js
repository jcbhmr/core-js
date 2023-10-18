"use strict";
var ToIntegerOrInfinity = require("./ToIntegerOrInfinity.js");
/**
 * @param {any} argument
 * @returns {number}
 * @see https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tolength
 */
module.exports = function (argument) {
  // 1. Let len be ? ToIntegerOrInfinity(argument).
  var len = ToIntegerOrInfinity(argument);

  // 2. If len ≤ 0, return +0𝔽.
  if (len <= 0) {
    return +0;
  }

  // 3. Return 𝔽(min(len, 2**53 - 1)).
  return Math.min(len, Number.MAX_SAFE_INTEGER);
};
