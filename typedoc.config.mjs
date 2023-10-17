import { rmSync } from "node:fs";
import { writeFile, readdir } from "node:fs/promises";

let index = `"use strict";\n`;
for (const file of await readdir("src")) {
  if (["index.js", "lib"].includes(file)) {
    continue;
  }
  const name = file.replace(/\.js$/, "");
  index += `exports["${name}"] = require("./${name}.js");\n`;
}
await writeFile("src/index.js", index);
process.on("exit", () => {
  rmSync("src/index.js");
});

export default {
  out: "out",
  entryPoints: ["src/index.js"],
  skipErrorChecking: true,
  plugin: ["typedoc-plugin-mdn-links"],
  navigationLinks: {
    Guide: "https://corejs.dev/core-js/guide/",
    Reference: "https://corejs.dev/core-js/reference/",
    GitHub: "https://github.com/corejs-dev/core-js",
  },
};
