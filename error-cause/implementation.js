"use strict";
var $Error = Error;
/**
 * @function
 * @class
 * @param {string} message
 * @param {{ cause?: any }} [options]
 */
function MyError(message, options) {
  var error = $Error.call(this, message);
  if (options) {
    error.cause = options.cause;
  }
  return error;
}
MyError.prototype = Error.prototype;
module.exports = MyError;
