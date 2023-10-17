#!/usr/bin/env node
// @ts-check
const { readFileSync, writeFileSync, statSync } = require("fs");
const { join } = require("path");
const { tmpdir } = require("os");

/**
 * Based on the 'ci-info' package which powers 'is-ci'.
 * @see https://github.com/watson/ci-info/blob/54e74d014ebed90aa5684c9812d8e14f49c194b0/index.js#L56-L69
 */
const isCI = !!(
  process.env.CI !== "false" && // Bypass all checks if CI env is explicitly set to 'false'
  (process.env.BUILD_ID || // Jenkins, Cloudbees
    process.env.BUILD_NUMBER || // Jenkins, TeamCity
    process.env.CI || // Travis CI, CircleCI, Cirrus CI, Gitlab CI, Appveyor, CodeShip, dsari
    process.env.CI_APP_ID || // Appflow
    process.env.CI_BUILD_ID || // Appflow
    process.env.CI_BUILD_NUMBER || // Appflow
    process.env.CI_NAME || // Codeship and others
    process.env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI
    process.env.RUN_ID || // TaskCluster, dsari
    false)
);

const parseBoolean = (x) => !!x && x !== "0" && x !== "false";
const teal = (x) => `\x1B[96m${x}\x1B[0m`;
const blue = (x) => `\x1B[94m${x}\x1B[0m`;
const stripANSI = (x) => x.replace(/\x1B\[\d+m/g, "");

// prettier-ignore
const bannerText =
`${teal("Thank you for using core-js ( ")}${blue("https://github.com/zloirock/core-js")}${teal(" ) for polyfilling JavaScript standard library!")}

${teal("The project needs your help! Please consider supporting core-js:")}
${blue("> https://opencollective.com/core-js")}
${blue("> https://patreon.com/zloirock")}
${blue("> https://boosty.to/zloirock")}
${blue("> bitcoin: bc1qlea7544qtsmj2rayg0lthvza9fau63ux0fstcz")}

${teal("I highly recommend reading this: ")}${blue("https://github.com/zloirock/core-js/blob/master/docs/2023-02-14-so-whats-next.md")}
`;

show_banner: {
  if (
    isCI ||
    parseBoolean(process.env.ADBLOCK) ||
    parseBoolean(process.env.DISABLE_OPENCOLLECTIVE) ||
    parseBoolean(process.env.SILENT) ||
    parseBoolean(process.env.OPEN_SOURCE_CONTRIBUTOR)
  ) {
    break show_banner;
  }

  const cachePath = join(tmpdir(), "core-js-banners");
  let stats;
  try {
    stats = statSync(cachePath);
  } catch (error) {
    // console.warn(error);
  }
  // Modified within the last 3 minutes
  if (stats && stats.mtimeMs > Date.now() - 1000 * 60 * 3) {
    break show_banner;
  }

  let banners;
  try {
    banners = JSON.parse(readFileSync(cachePath, "utf8"));
  } catch (error) {
    // console.warn(error);
    banners = [];
  }
  if (banners.includes(bannerText)) {
    break show_banner;
  }

  banners.push(bannerText);
  try {
    writeFileSync(cachePath, JSON.stringify(banners));
  } catch (error) {
    // console.warn(error);
  }

  if (parseBoolean(process.env.npm_config_color)) {
    console.log(bannerText);
  } else {
    console.log(stripANSI(bannerText));
  }
}
