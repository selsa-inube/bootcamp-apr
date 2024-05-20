function range(start, end, step = 1) {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

function sum(array) {
  return array.reduce((total, num) => total + num, 0);
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 1, -1));
