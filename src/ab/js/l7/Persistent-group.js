class PGroup {
  constructor(elements) {
    this.elements = elements;
  }

  add(value) {
    if (this.has(value)) return this;
    return new PGroup(this.elements.concat(value));
  }

  delete(value) {
    if (!this.has(value)) return this;
    return new PGroup(this.elements.filter((el) => el !== value));
  }

  has(value) {
    return this.elements.includes(value);
  }

  static get empty() {
    return new PGroup([]);
  }
}

// Ejemplo de uso:
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b")); // true
console.log(a.has("b")); // false
console.log(b.has("a")); // false
