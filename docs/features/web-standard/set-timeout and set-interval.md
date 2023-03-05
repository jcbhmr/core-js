# `setTimeout` and `setInterval`

Module [`web.timers`](/packages/core-js/modules/web.timers.js). Additional arguments fix for IE9-.

## Types

```ts
function setTimeout(callback: any, time: any, ...args: Array<mixed>): number;
function setInterval(callback: any, time: any, ...args: Array<mixed>): number;
```

## Entry points



```
core-js(-pure)/stable|actual|full/set-timeout
core-js(-pure)/stable|actual|full/set-interval
```

```js
// Before:
setTimeout(log.bind(null, 42), 1000);
// After:
setTimeout(log, 1000, 42);
```