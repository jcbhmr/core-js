---
category: feature
tag:
  - es-proposal
---

# [`Function.prototype.demethodize`](https://github.com/js-choi/proposal-function-demethodize)

## Module

[`esnext.function.demethodize`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.function.demethodize.js)

## Types

```ts
interface Function {
  demethodize(): Function;
}
```

## Entry points

```
core-js/proposals/function-demethodize
core-js(-pure)/full/function/demethodize
core-js(-pure)/full/function/virtual/demethodize
```

## Example

[_Example_](https://tinyurl.com/2ltmohgl):

```js
const slice = Array.prototype.slice.demethodize();

slice([1, 2, 3], 1); // => [2, 3]
```
