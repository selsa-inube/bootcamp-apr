function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { valor: array[i], resto: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.resto) {
    array.push(node.valor);
  }
  return array;
}

function prepend(valor, list) {
  return { valor, resto: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n === 0) return list.valor;
  else return nth(list.resto, n - 1);
}

function recursiveNth(list, n) {
  if (!list) return undefined;
  else if (n === 0) return list.valor;
  else return recursiveNth(list.resto, n - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
