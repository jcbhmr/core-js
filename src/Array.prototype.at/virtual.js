"use strict";
var method = require("./ponyfill.js");
module.exports = method.call.bind(method);
