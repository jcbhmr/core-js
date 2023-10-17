import test from "node:test";
import assert from "node:assert";
import ArrayPrototypeAtRaw from "../src/Array.prototype.at.js";

test("metadata", () => {
  assert.equal(ArrayPrototypeAtRaw.length, 1);
});

test("[1, 2, 3].at(1) === 2", () => {
  const array = [1, 2, 3];
  assert.equal(array.at(1), 2);
  assert.equal(ArrayPrototypeAtRaw.call(array, 1), 2);
});

test("[1, 2, 3].at(10) === undefined", () => {
  const array = [1, 2, 3];
  assert.equal(array.at(10), undefined);
  assert.equal(ArrayPrototypeAtRaw.call(array, 10), undefined);
});

test("[1, 2, 3].at(-1) === 3", () => {
  const array = [1, 2, 3];
  assert.equal(array.at(-1), 3);
  assert.equal(ArrayPrototypeAtRaw.call(array, -1), 3);
});

test("[1, 2, 3].at(1.5) === 2", () => {
  const array = [1, 2, 3];
  assert.equal(array.at(1.5), 2);
  assert.equal(ArrayPrototypeAtRaw.call(array, 1.5), 2);
});

test("[1, 2, 3].at(-10) === undefined", () => {
  const array = [1, 2, 3];
  assert.equal(array.at(-10), undefined);
  assert.equal(ArrayPrototypeAtRaw.call(array, -10), undefined);
});
