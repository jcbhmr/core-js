/** @module relative-indexing-method @category ES2022 */
/* eslint-disable es/no-typed-arrays */
"use strict";
var uncurryThis = require("../lib/uncurryThis.js");
exports.ArrayPrototypeAt = uncurryThis(
  Array.prototype.at || require("./shim.js").ArrayPrototypeAt
);
var $Uint8Array;
try {
  $Uint8Array = Uint8Array;
} catch (error) {}
exports.TypedArrayPrototypeAt = uncurryThis(
  ($Uint8Array && $Uint8Array.prototype.at) ||
    require("./shim.js").TypedArrayPrototypeAt
);
exports.StringPrototypeAt = uncurryThis(
  String.prototype.at || require("./shim.js").StringPrototypeAt
);
