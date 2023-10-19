import test from "node:test";
import assert from "node:assert/strict";
import {
  ArrayPrototypeAt,
  TypedArrayPrototypeAt,
  StringPrototypeAt,
} from "./shim.js";

test("ArrayPrototypeAt.call([1, 2, 3], 1) === 2", () => {
  const array = [1, 2, 3];
  assert.equal(array.at(1), 2);
  assert.equal(ArrayPrototypeAt.call(array, 1), 2);
});
