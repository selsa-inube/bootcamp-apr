function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    typeof a === "object" &&
    a !== null &&
    typeof b === "object" &&
    b !== null
  ) {
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

console.log(deepEqual("5", "5"));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }));
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }));
