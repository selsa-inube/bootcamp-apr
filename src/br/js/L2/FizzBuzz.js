for (let num = 1; num <= 100; num++) {
  let res = "";
  if (num % 3 === 0) {
    res += "Fizz";
  }
  if (num % 5 === 0) {
    res += "Buzz";
  }
  console.log(res || num);
}
