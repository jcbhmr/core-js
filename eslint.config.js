"use strict";
// https://eslint.org/docs/latest/use/configure/configuration-files-new
/** @type {import('eslint').Linter.FlatConfig} */
module.exports = (async () => {
  const regexp = await import("eslint-plugin-regexp");

  return [
    // https://eslint.org/docs/latest/use/configure/configuration-files-new#using-configurations-included-in-plugins
    regexp.configs["regexp/recommended"],
    {
      files: ["*/**/*.js", "postinstall.js"],
      languageOptions: {
        ecmaVersion: 3,
        sourceType: "commonjs",
      },
    },
  ];
})();
