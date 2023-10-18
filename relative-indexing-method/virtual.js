"use strict";
var ponyfill = require("./ponyfill.js");
var uncurryThis = require("../lib/uncurryThis.js")
exports.ArrayPrototypeAt = uncurryThis(ponyfill.ArrayPrototypeAt);
exports.TypedArrayPrototypeAt = uncurryThis(ponyfill.TypedArrayPrototypeAt);
exports.StringPrototypeAt = uncurryThis(ponyfill.StringPrototypeAt);
