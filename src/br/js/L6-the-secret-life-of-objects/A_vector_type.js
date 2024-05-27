class Vec {
    constructor(numA, numB) {
        this.numA = numA;
        this.numB = numB;
    }

    plus(other) {
        return new Vec(this.numA + other.numA, this.numB + other.numB);
    }

    minus(other) {
        return new Vec(this.numA - other.numA, this.numB - other.numB);
    }

    get length() {
        return Math.sqrt(this.numA * this.numA + this.numB * this.numB);
    }
}
  
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
