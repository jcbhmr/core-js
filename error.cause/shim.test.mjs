import test from "node:test";
import assert from "node:assert/strict";
import {
  Error,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError,
  WebAssemblyCompileError,
  WebAssemblyLinkError,
  WebAssemblyRuntimeError,
} from "./shim.js";

test("Error()", () => {
  assert.equal(globalThis.Error("", { cause: 123 }), 123);
  assert.equal(Error("", { cause: 123 }), 123);
});
