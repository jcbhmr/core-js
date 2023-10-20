"use strict";
module.exports = function () {
  if (new Error("", { cause: 1 }).cause) {
    return Error;
  } else {
    return require("./implementation.js");
  }
};
