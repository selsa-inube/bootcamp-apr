function Flattening(arrays) {
    return arrays.reduce((accumulator, current) => accumulator.concat(current), []);
}
  
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(Flattening(arrays));
  