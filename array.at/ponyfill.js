/** @module array.at */
"use strict";
var uncurryThis = require("../lib/uncurryThis.js");
module.exports = uncurryThis(Array.prototype.at || require("./shim.js"));
