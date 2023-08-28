const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function multiply(number) {
  for (const arr of number) {
    console.log(`${arr} * 2 = ${arr * 2}`);
  }
}
multiply(array);
