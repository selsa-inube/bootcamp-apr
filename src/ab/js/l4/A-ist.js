function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, index) {
  if (!list) return undefined;
  else if (index === 0) return list.value;
  else return nth(list.rest, index - 1);
}

let exampleArray = [1, 2, 3];
let exampleList = arrayToList(exampleArray);
console.log(exampleList);
console.log(listToArray(exampleList));
console.log(prepend(0, exampleList));
console.log(nth(exampleList, 1));
