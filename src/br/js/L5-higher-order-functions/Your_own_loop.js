const loop = (start, test, update, body) => {
    let value = start;
    while (test(value)) {
      body(value);
      value = update(value);
    }
}
  
loop(3, n => n > 0, n => n - 1, console.log);