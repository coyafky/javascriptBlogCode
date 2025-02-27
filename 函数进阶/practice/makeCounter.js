function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 输出 0
console.log(counter()); // 输出 1

console.log(counter2()); // 输出 0
console.log(counter2()); // 输出 1

// 继续使用 counter
console.log(counter()); // 输出 2
console.log(counter()); // 输出 3

// 继续使用 counter2
console.log(counter2()); // 输出 2
console.log(counter2()); // 输出 3
