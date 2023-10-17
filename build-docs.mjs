import {
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { join } from "node:path";
import DOMParser from "dom-parser";
import { $ } from "execa";

const d = "out";

await rm(d, { recursive: true, force: true });

const names = [];
for (const file of await readdir("src")) {
  if (file === "lib") {
    continue;
  }
  let text = await readFile(join("src", file), "utf8");

  let tags = [...text.matchAll(/\* @category (.+)/g)].map((x) => x[1]);
  text = text.replace(/\* @category (.+)(\r?\n)?/g, "");
  tags = tags.map((x) => x.trim().toLowerCase());

  let stage = text.match(/\* @stage (.+)/)?.[1];
  text = text.replace(/\* @stage (.+)(\r?\n)?/, "");
  stage = stage?.trim().toLowerCase();
  stage =
    {
      0: "stage-0",
      1: "stage-1",
      2: "stage-2",
      3: "stage-3",
      4: "stage-4",
    }[stage] ?? stage;
  tags.push(stage);

  let since = text.match(/\* @since (.+)/)?.[1];
  text = text.replace(/\* @since (.+)(\r?\n)?/, "");
  since = since?.trim().toLowerCase();
  since =
    {
      es6: "es2015",
      es7: "es2016",
      esfuture: "esnext",
    }[since] ?? since;
  tags.push(since);

  tags = [...new Set(tags)];

  /** @type {string[]} */
  const commentLines = [];

  const mdn = text.match(/\* @see (https:\/\/developer.mozilla.org\/.+)/)?.[1];
  if (mdn) {
    try {
      const response = await fetch(mdn);
      const text = await response.text();
      /** @type {Document} */
      const document = new DOMParser().parseFromString(text, "text/html");
      const hydration = document.getElementById("hydration");
      const json = JSON.parse(hydration.textContent);
      const { summary } = json.doc;
      commentLines.push(`@summary ${summary}`);
    } catch (error) {
      // console.warn(error);
    }
  }

  text = text.replace(
    "/**",
    `/**${commentLines.map((x) => `\n * ${x}`).join("")}`
  );

  await mkdir(d, { recursive: true });
  await writeFile(join(d, file), text);
  console.debug(`wrote ${file}`);

  const name = file.replace(/\.js$/, "");
  names.push(name);
}

let index = "";
for (const name of names) {
  index += `exports["${name}"] = require("./${name}.js");\n`;
}
await writeFile(join(d, "index.js"), index);

const tsconfig = {
  compilerOptions: {
    allowJs: true,
    checkJs: true,
  },
  typedocOptions: {
    entryPoints: ["index.js"],
    skipErrorChecking: true,
  },
};
await writeFile(join(d, "tsconfig.json"), JSON.stringify(tsconfig));
console.debug("wrote tsconfig.json");
await $({ cwd: d, stdio: "inherit" })`npx typedoc`;
console.debug("ran typedoc");

await $({ stdio: "inherit" })`npx vitepress build`;
console.debug("ran vitepress");

await rename(join("docs", ".vitpress", "dist"), "_site");
console.debug("moved VitePress output to '_site'");

await rename(join(d, "docs"), join("_site", "reference"));
console.debug("moved TypeDoc output to '_site/reference'");
