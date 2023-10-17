// @ts-check
import { rmSync } from "node:fs";
import { writeFile, readdir } from "node:fs/promises";

let js = `"use strict";\n`;
for (const entry of await readdir("src")) {
  if (entry === "_lib") {
    continue;
  }
  js += `exports["${entry}"] = require("./${entry}/shim.js");\n`;
}
// This file is in .gitignore and excluded from tsconfig.json.
await writeFile("src/_TYPEDOC.js", js);
process.on("exit", () => {
  rmSync("src/_TYPEDOC.js");
});

export default {
  out: "out",
  entryPoints: ["src/_TYPEDOC.js"],
  skipErrorChecking: true,
  plugin: ["typedoc-plugin-mdn-links"],
  navigationLinks: {
    Guide: "https://corejs.dev/core-js/guide/",
    Reference: "https://corejs.dev/core-js/reference/",
    GitHub: "https://github.com/corejs-dev/core-js",
  },
};
