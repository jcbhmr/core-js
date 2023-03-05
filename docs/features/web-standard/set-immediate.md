# `setImmediate`

Module [`web.immediate`](/packages/core-js/modules/web.immediate.js). [`setImmediate`](https://w3c.github.io/setImmediate/) polyfill.

## Types

```ts
function setImmediate(callback: any, ...args: Array<mixed>): number;
function clearImmediate(id: number): void;
```

## Entry points



```
core-js(-pure)/stable|actual|full/set-immediate
core-js(-pure)/stable|actual|full/clear-immediate
```

[_Examples_](https://goo.gl/6nXGrx):

```js
setImmediate(
  (arg1, arg2) => {
    console.log(arg1, arg2); // => Message will be displayed with minimum delay
  },
  "Message will be displayed",
  "with minimum delay"
);

clearImmediate(
  setImmediate(() => {
    console.log("Message will not be displayed");
  })
);
```