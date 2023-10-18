import test from "node:test";
import assert from "node:assert";
import shim from "./shim.js";

test("Function.isCallable.length === 1", () => {
  assert.equal(shim.length, 1);
});

test("Function.isCallable(() => {}) === true", () => {
  const f = () => {};
  assert.equal(shim(f), true);
});

test("Function.isCallable(function () {}) === true", () => {
  const f = function () {};
  assert.equal(shim(f), true);
});

test("Function.isCallable(class {}) === false", () => {
  const f = class {};
  assert.equal(shim(f), false);
});
