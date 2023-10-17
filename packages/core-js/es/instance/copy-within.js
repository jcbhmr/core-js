"use strict";
var isPrototypeOf = require("../../internals/object-is-prototype-of");
var method = require("../array/virtual/copy-within");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.copyWithin;
  return it === ArrayPrototype ||
    (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.copyWithin)
    ? method
    : own;
};
