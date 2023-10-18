"use strict";
var $Uint8Array;
try {
    $Uint8Array = Uint8Array
} catch (error) {}
exports.ArrayPrototypeAt = Array.prototype.at || require("./shim.js").ArrayPrototypeAt
exports.TypedArrayPrototypeAt = ($Uint8Array && $Uint8Array.prototype.at) || require("./shim.js").TypedArrayPrototypeAt
exports.StringPrototypeAt = String.prototype.at || require("./shim.js").StringPrototypeAt
