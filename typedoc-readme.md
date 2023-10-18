### [Go to reference index](./modules.html)

⚠️ This is a **generalized index** that doesn't include duplicate documentation
for all of the variant imports. Here's a quick summary & demo to exemplify this:

```js
Array.prototype.at; // on this website!

// 👇 ...but 'Array.prototype.at' has these importables:

import "core-js/Array.prototype.at/polyfill";
[1, 2, 3].at(1);
//=> 2

import Array_prototype_at from "core-js/Array.prototype.at/ponyfill";
Array_prototype_at.call([1, 2, 3], 1);
//=> 2

import ArrayPrototypeAt from "core-js/Array.prototype.at/virtual";
ArrayPrototypeAt([1, 2, 3], 1);
//=> 2

import Array_prototype_at_shim from "core-js/Array.prototype.at/shim";
Array_prototype_at_shim.call([1, 2, 3], 1);
//=> 2
```

<sup>For non-prototype methods there won't be a `core-js/<thing>/virtual`
import</sup>

As a reminder, the source code for these polyfill items is written and
distributed in ES5 (except where indicated). You can use any of these items
as-is without a transpilation step. If you're bundling for browsers you'll still
need a CommonJS-supporting bundler.
