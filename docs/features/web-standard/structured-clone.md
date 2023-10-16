---
category: feature
tag:
  - web-standard
---

# `structuredClone`

[Spec](https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone)

## Module

[`web.structured-clone`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/web.structured-clone.js)

## Types

```ts
function structuredClone<T extends Transferable>(
  value: T,
  options: { transfer?: Sequence<Transferable> }
): T;
```

## Entry points

```
core-js(-pure)/stable|actual|full/structured-clone
```

## Example

[_Example_](https://is.gd/RhK7TW):

```js
const structured = [{ a: 42 }];
const sclone = structuredClone(structured);
console.log(sclone); // => [{ a: 42 }]
console.log(structured !== sclone); // => true
console.log(structured[0] !== sclone[0]); // => true

const circular = {};
circular.circular = circular;
const cclone = structuredClone(circular);
console.log(cclone.circular === cclone); // => true

structuredClone(42); // => 42
structuredClone({ x: 42 }); // => { x: 42 }
structuredClone([1, 2, 3]); // => [1, 2, 3]
structuredClone(new Set([1, 2, 3])); // => Set{ 1, 2, 3 }
structuredClone(
  new Map([
    ["a", 1],
    ["b", 2],
  ])
); // => Map{ a: 1, b: 2 }
structuredClone(new Int8Array([1, 2, 3])); // => new Int8Array([1, 2, 3])
structuredClone(new AggregateError([1, 2, 3], "message")); // => new AggregateError([1, 2, 3], 'message'))
structuredClone(new TypeError("message", { cause: 42 })); // => new TypeError('message', { cause: 42 })
structuredClone(new DOMException("message", "DataCloneError")); // => new DOMException('message', 'DataCloneError')
structuredClone(document.getElementById("myfileinput")); // => new FileList
structuredClone(new DOMPoint(1, 2, 3, 4)); // => new DOMPoint(1, 2, 3, 4)
structuredClone(new Blob(["test"])); // => new Blob(['test'])
structuredClone(new ImageData(8, 8)); // => new ImageData(8, 8)
// etc.

structuredClone(new WeakMap()); // => DataCloneError on non-serializable types
```

## Caveats when using `structuredClone` polyfill

- `ArrayBuffer` instances and many platform types cannot be transferred in most engines since we have no way to polyfill this behavior, however `.transfer` option works for some platform types. I recommend avoiding this option.
- Some specific platform types can't be cloned in old engines. Mainly it's very specific types or very old engines, but here are some exceptions. For example, we have no sync way to clone `ImageBitmap` in Safari 14.0- or Firefox 83-, so it's recommended to look to the [polyfill source](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/web.structured-clone.js) if you wanna clone something specific.
