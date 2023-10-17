"use strict";
/**
 * @param {any} argument
 * @returns {number}
 * @see https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tointegerorinfinity
 */
module.exports = function (argument) {
  // 1. Let number be ? ToNumber(argument).
  var number = +argument;

  // 2. If number is one of NaN, +0𝔽, or -0𝔽, return 0.
  if (!number) {
    return 0;
  }

  // 3. If number is +∞𝔽, return +∞.
  // 4. If number is -∞𝔽, return -∞.
  if (number === Infinity || number === -Infinity) {
    return number;
  }

  // 5. Return truncate(ℝ(number)).
  return number < 0 ? Math.ceil(number) : Math.floor(number);
};
