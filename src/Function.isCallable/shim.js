"use strict";
function isClassConstructor(value) {
  if (!value.prototype) {
    return false;
  }
  try {
    return /^\s*class\b/.test(value);
  } catch (error) {
    return false;
  }
}
/**
 * @param {any} argument
 * @returns {boolean}
 * @see https://github.com/caitp/TC39-Proposals/blob/trunk/tc39-reflect-isconstructor-iscallable.md#functioniscallable--argument-
 * @category Stage 0
 */
module.exports = function (argument) {
  return typeof argument === "function" && !isClassConstructor(argument);
};
