/** @ignore @module */
"use strict";
/**
 * @template {ErrorConstructor} T
 * @param {T} Error
 */
function wrap(Error) {
  /**
   * @param {Parameters<T>[0]} x
   * @param {{ cause: any }} [options]
   * @returns {T["prototype"]}
   */
  function MyError(x, options) {
    var error = Error(x);
    if (options && options.cause) {
      // @ts-ignore
      error.cause = options.cause;
    }
    return error;
  }
  MyError.prototype = Error.prototype;
  return MyError;
}
exports.Error = wrap(Error);
exports.EvalError = wrap(EvalError);
exports.RangeError = wrap(RangeError);
exports.ReferenceError = wrap(ReferenceError);
exports.SyntaxError = wrap(SyntaxError);
exports.TypeError = wrap(TypeError);
exports.URIError = wrap(URIError);
var supportsWebAssembly;
try {
  // @ts-ignore
  supportsWebAssembly = !!WebAssembly;
} catch (error) {}
exports.WebAssemblyCompileError =
  // @ts-ignore
  supportsWebAssembly && wrap(WebAssembly.CompileError);
exports.WebAssemblyLinkError =
  // @ts-ignore
  supportsWebAssembly && wrap(WebAssembly.LinkError);
exports.WebAssemblyRuntimeError =
  // @ts-ignore
  supportsWebAssembly && wrap(WebAssembly.RuntimeError);
