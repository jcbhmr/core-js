"use strict";
require("../../modules/es.object.to-string");
require("../../modules/esnext.iterator.constructor");
require("../../modules/esnext.iterator.to-array");

var entryUnbind = require("../../internals/entry-unbind");

module.exports = entryUnbind("Iterator", "toArray");
