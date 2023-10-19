"use strict";
/** @returns {<T>(this: T[], index: number) => T | undefined} */
module.exports = function () {
    return Array.prototype.at || require("./implementation.js")
}
