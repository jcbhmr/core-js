import test from "node:test";
import assert from "node:assert/strict";
import shim from "../../src/Array.prototype.at/shim.js";

test("Array.prototype.at.length === 1", () => {
  assert.equal(Array.prototype.at.length, 1)
  assert.equal(shim.length, 1);
});

test("[1, 2, 3].at(1) === 2", () => {
  const array = [1, 2, 3];
  assert.equal(array.at(1), 2);
  assert.equal(shim.call(array, 1), 2);
});

test("[1, 2, 3].at(10) === undefined", () => {
  const array = [1, 2, 3];
  assert.equal(array.at(10), undefined);
  assert.equal(shim.call(array, 10), undefined);
});

test("[1, 2, 3].at(-1) === 3", () => {
  const array = [1, 2, 3];
  assert.equal(array.at(-1), 3);
  assert.equal(shim.call(array, -1), 3);
});

test("[1, 2, 3].at(1.5) === 2", () => {
  const array = [1, 2, 3];
  assert.equal(array.at(1.5), 2);
  assert.equal(shim.call(array, 1.5), 2);
});

test("[1, 2, 3].at(-10) === undefined", () => {
  const array = [1, 2, 3];
  assert.equal(array.at(-10), undefined);
  assert.equal(shim.call(array, -10), undefined);
});