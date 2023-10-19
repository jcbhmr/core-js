"use strict"
module.exports = function () {
    var getPolyfill = require("./polyfill.js")
    var polyfill = getPolyfill()
    if (polyfill !== Error) {
        // @ts-ignore
        Error = polyfill
        Error.prototype.constructor = Error
    }
}