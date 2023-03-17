---
category: feature
tag:
  - es-proposal
---

# [`AsyncIterator` helpers](https://github.com/tc39/proposal-async-iterator-helpers)

## Modules

- [`esnext.async-iterator.constructor`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.constructor.js)
- [`esnext.async-iterator.drop`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.drop.js)
- [`esnext.async-iterator.every`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.every.js)
- [`esnext.async-iterator.filter`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.filter.js)
- [`esnext.async-iterator.find`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.find.js)
- [`esnext.async-iterator.flat-map`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.flat-map.js)
- [`esnext.async-iterator.for-each`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.for-each.js)
- [`esnext.async-iterator.from`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.from.js)
- [`esnext.async-iterator.indexed`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.indexed.js)
- [`esnext.async-iterator.map`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.map.js)
- [`esnext.async-iterator.reduce`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.reduce.js)
- [`esnext.async-iterator.some`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.some.js)
- [`esnext.async-iterator.take`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.take.js)
- [`esnext.async-iterator.to-array`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.async-iterator.to-array.js)
- [`esnext.iterator.to-async`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.iterator.to-async.js)

## types

```ts
class Iterator {
  toAsync(): AsyncIterator<any>;
}

class AsyncIterator {
  static from(iterable: AsyncIterable<any> | Iterable<any> | AsyncIterator<any>): AsyncIterator<any>;
  drop(limit: number): AsyncIterator<any>;
  every(async callbackfn: (value: any, couner: number) => boolean): Promise<boolean>;
  filter(async callbackfn: (value: any, couner: number) => boolean): AsyncIterator<any>;
  find(async callbackfn: (value: any, couner: number) => boolean)): Promise<any>;
  flatMap(async callbackfn: (value: any, couner: number) => AsyncIterable<any> | Iterable<any> | AsyncIterator<any>): AsyncIterator<any>;
  forEach(async callbackfn: (value: any, couner: number) => void): Promise<void>;
  map(async callbackfn: (value: any, couner: number) => any): AsyncIterator<any>;
  reduce(async callbackfn: (memo: any, value: any, couner: number) => any, initialValue: any): Promise<any>;
  some(async callbackfn: (value: any, couner: number) => boolean): Promise<boolean>;
  take(limit: number): AsyncIterator<any>;
  toArray(): Promise<Array>;
  @@toStringTag: 'AsyncIterator'
}
```

## Entry points

```
core-js/proposals/async-iterator-helpers
core-js(-pure)/actual|full/async-iterator
core-js(-pure)/actual|full/async-iterator/drop
core-js(-pure)/actual|full/async-iterator/every
core-js(-pure)/actual|full/async-iterator/filter
core-js(-pure)/actual|full/async-iterator/find
core-js(-pure)/actual|full/async-iterator/flat-map
core-js(-pure)/actual|full/async-iterator/for-each
core-js(-pure)/actual|full/async-iterator/from
core-js(-pure)/actual|full/async-iterator/indexed
core-js(-pure)/actual|full/async-iterator/map
core-js(-pure)/actual|full/async-iterator/reduce
core-js(-pure)/actual|full/async-iterator/some
core-js(-pure)/actual|full/async-iterator/take
core-js(-pure)/actual|full/async-iterator/to-array
```

## Example

[_Example_](https://tinyurl.com/28tet4ek)

```js
await AsyncIterator.from([1, 2, 3, 4, 5, 6, 7])
  .drop(1)
  .take(5)
  .filter((it) => it % 2)
  .map((it) => it ** 2)
  .toArray(); // => [9, 25]
await [1, 2, 3]
  .values()
  .toAsync()
  .map(async (it) => it ** 2)
  .toArray(); // => [1, 4, 9]
```

## Caveats

- For preventing prototypes pollution, in the `pure` version, new `%AsyncIteratorPrototype%` methods are not added to the real `%AsyncIteratorPrototype%`, they available only on wrappers - instead of `[].values().toAsync().map(fn)` use `AsyncIterator.from([]).map(fn)`.
- Now, we have access to the real `%AsyncIteratorPrototype%` only with usage async generators syntax. So, for compatibility the library with old browsers, we should use `Function` constructor. However, that breaks compatibility with CSP. So, if you wanna use the real `%AsyncIteratorPrototype%`, you should set `USE_FUNCTION_CONSTRUCTOR` option in the `core-js/configurator` to `true`:

```js
const configurator = require("core-js/configurator");
configurator({ USE_FUNCTION_CONSTRUCTOR: true });
require("core-js/actual/async-iterator");
(async function* () {
  /* empty */
})() instanceof AsyncIterator; // => true
```