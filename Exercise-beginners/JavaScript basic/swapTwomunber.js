//  交换2个数字的值

function swapTwoNumber(a, b) {
  let temp;
  temp = a;
  a = b;
  b = temp;
  return [a, b];
}
console.log(swapTwoNumber(3, 5)); // [5, 3]
console.log(swapTwoNumber(10, 20)); // [20, 10]
console.log(swapTwoNumber(30, 50)); // [50, 30]
