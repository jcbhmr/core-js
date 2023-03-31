---
category: development
icon: form
tag:
  - untranslated
---

# 更新`core-js-compat`

::: tip
如果你没有设备运行对应的浏览器，可以使用 [Sauce Labs](https://saucelabs.com/)、[BrowserStack](https://www.browserstack.com/) 以及[Cloud Browser](https://ieonchrome.com/)。
:::

## 更新现有数据

For updating `core-js-compat` data:

- If you want to add new data for NodeJS, run `npm run compat-node` with the installed required NodeJS version and you will see the results in the console. Use `npm run compat-node json` if you want to get the result as JSON.
- If you want to add new data for Deno, run `npm run compat-deno` with the installed required Deno version and you will see the results in the console. Use `npm run compat-deno json` if you want to get the result as JSON.
- If you want to add new data for Bun, run `npm run compat-bun` with the installed required Bun version and you will see the results in the console.
- If you want to add new data for Rhino, set the required Rhino version in `compat-rhino` NPM script in [`package.json`](https://github.com/zloirock/core-js/blob/master/package.json), run `npm run compat-rhino` and you will see the results in the console.
- If you want to add new data for Hermes (incl. shipped with React Native), run `npm run compat-hermes YOR_PATH_TO_HERMES` and you will see the results in the console.
- After getting this data, add it to [`packages/core-js-compat/src/data.mjs`](https://github.com/zloirock/core-js/blob/master/packages/core-js-compat/src/data.mjs).

## 创建新的版本映射

If you want to add new mapping (for example, to add a new iOS Safari version based on Safari or NodeJS based on Chrome), add it to [`packages/core-js-compat/src/mapping.mjs`](https://github.com/zloirock/core-js/blob/master/packages/core-js-compat/src/mapping.mjs).

| engine            | how to run tests | base data inherits from    | mandatory check  | mapping for a new version          |
| ----------------- | ---------------- | -------------------------- | ---------------- | ---------------------------------- |
| `android`         | browser runner   | `chrome`, `chrome-android` |                  |                                    |
| `bun`             | bun runner       | `safari` (only ES)         | required         |                                    |
| `chrome`          | browser runner   |                            | required         |                                    |
| `chrome-android`  | browser runner   | `chrome`                   |                  |                                    |
| `deno`            | deno runner      | `chrome` (only ES)         | non-ES features  | required                           |
| `edge`            | browser runner   | `ie`, `chrome`             | required (<= 18) |                                    |
| `electron`        | browser runner   | `chrome`                   |                  | required                           |
| `firefox`         | browser runner   |                            | required         |                                    |
| `firefox-android` | browser runner   | `firefox`                  |                  |                                    |
| `hermes`          | hermes runner    |                            | required         |                                    |
| `ie`              | browser runner   |                            | required         |                                    |
| `ios`             | browser runner   | `safari`                   |                  | if inconsistent (!= `safari`)      |
| `node`            | node runner      | `chrome` (only ES)         | non-ES features  | required                           |
| `opera`           | browser runner   | `chrome`                   |                  | if inconsistent (!= `chrome` - 14) |
| `opera-android`   | browser runner   | `opera`, `chrome-android`  |                  | required                           |
| `phantom`         | browser runner   | `safari`                   |                  |                                    |
| `quest`           | browser runner   | `chrome-android`           |                  | required                           |
| `react-native`    | hermes runner    | `hermes`                   | required         |                                    |
| `rhino`           | rhino runner     |                            | required         |                                    |
| `safari`          | browser runner   |                            | required         |                                    |
| `samsung`         | browser runner   | `chrome-android`           |                  | required                           |