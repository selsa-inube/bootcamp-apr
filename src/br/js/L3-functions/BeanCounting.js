function countBs(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "B") {
      count++;
    }
  }
  return count;
}

function countChar(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
