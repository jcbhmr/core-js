/* eslint-disable */
"use strict";
// https://eslint.org/docs/latest/use/configure/configuration-files-new
// https://eslint.org/docs/latest/use/configure/migration-guide
module.exports = (async () => {
  const { FlatCompat } = await import("@eslint/eslintrc");
  const compat = new FlatCompat({ baseDirectory: __dirname });
  return [
    ...compat.extends("plugin:es/restrict-to-es3"),
    ...compat.extends("plugin:regexp/recommended"),
    {
      ignores: [
        "**/node_modules/**",
        "docs/**",
        "**/*.test.{js,mjs,cjs,ts,mts,cts}",
      ],
    },
  ];
})();
