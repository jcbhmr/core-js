### [So, what's next?](https://corejs.dev/blog/so-whats-next.html)

# core-js

🟨 Polyfills for ECMAScript APIs & proposals

<p align=center>
  <img height=120 src="https://i.imgur.com/WoLunT0.png">
</p>

<p align=center>
  <a href="https://corejs.dev/core-js/guide/">🆕 Guide</a>
  | <a href="https://corejs.dev/core-js/reference/">🆕 Reference</a>
  | <a href="https://corejs.dev/">🆕 corejs.dev</a>
</p>

🚀 Use tomorrow's JavaScript functions **today**! \
🧓 Great for polyfilling old browsers \
🌟 Integrates well with [Babel] and [SWC] \
🌐 Works with Internet Explorer 11 \
📦 Modular: use only what you need \
🦄 Has pure [ponyfill] imports \
📖 Well documented 🆕

## Installation

## Usage

## Development

JSDoc meta tags:

- **`@category`:** for grouping methods in the reference section (ad-hoc)
- **`@stage`:** for indicating the stage of a proposal (0-4)
- **`@since`:** for indicating the ECMAScript version when the feature is
  available natively (ES2015-ESNext)

💡 Pro tip: you can run modern Safari (not ancient Safari v5) on Windows using
[Playwright]'s included WebKit browser:

```sh
npm install -g playwright
playwright install
playwright open --browser=webkit
```

[📚 Read more: Test Your Site In Every Browser](https://joyofcode.xyz/test-your-site-in-every-browser)

[babel]: https://babeljs.io/
[swc]: https://swc.rs/
[ponyfill]: https://ponyfill.com/
[playwright]: https://playwright.dev/
