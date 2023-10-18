"use strict";
// https://eslint.org/docs/latest/use/configure/configuration-files-new
module.exports = (async () => {
  const { FlatCompat } = await import("@eslint/eslintrc");
  const compat = new FlatCompat({ baseDirectory: __dirname });
  return [
    // https://eslint.org/docs/latest/use/configure/configuration-files-new#using-configurations-included-in-plugins
    // https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
    ...compat.extends("plugin:es/restrict-to-es5").map((config) => ({
      ignores: [
        "postinstall.js",
        "eslint.config.js",
        "my-typedoc-plugin.mjs",
        "**/*.mjs",
        "**/*.test.{js,mjs,cjs}",
      ],
      ...config,
    })),
    ...compat.extends("plugin:regexp/recommended").map((config) => ({
      ignores: [
        "postinstall.js",
        "eslint.config.js",
        "my-typedoc-plugin.mjs",
        "**/*.test.{js,mjs,cjs}",
      ],
      ...config,
    })),
    {
      ignores: [
        "node_modules/**",
        "out/**",
        "_site/**",
        "docs/**",
        ".github/**",
      ],
    },
  ];
})();
