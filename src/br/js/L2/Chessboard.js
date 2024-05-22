let size = 8;
let space = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      space += " ";
    } else {
      space += "#";
    }
  }
  space += "\n";
}

console.log(space);
