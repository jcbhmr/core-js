"use strict";
var $Uint8Array;
try {
    $Uint8Array = Uint8Array
} catch (error) {}
if (!Array.prototype.at) {
  Array.prototype.at = require("./shim.js").ArrayPrototypeAt;
}
if ($Uint8Array && !$Uint8Array.prototype.at) {
  $Uint8Array.prototype.at = require("./shim.js").TypedArrayPrototypeAt
}
if (!String.prototype.at) {
  String.prototype.at = require("./shim.js").StringPrototypeAt
}
