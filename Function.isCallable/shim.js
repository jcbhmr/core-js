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
/** @type {FunctionConstructor["isCallable"]} */
module.exports = function (argument) {
  return typeof argument === "function" && !isClassConstructor(argument);
};
