"use strict";
module.exports = function () {
  var getPolyfill = require("./polyfill.js");
  var polyfill = getPolyfill();
  if (polyfill !== Array.prototype.at) {
    Array.prototype.at = polyfill;
  }
};
