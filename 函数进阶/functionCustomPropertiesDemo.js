// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/functionCustomPropertiesDemo.js

// 1. 基本的函数属性示例
function sayHi() {
  console.log("Hi");
  sayHi.counter++;
}
sayHi.counter = 0; // 初始化计数器

console.log("1. 基本的函数属性示例:");
sayHi();
sayHi();
sayHi();
console.log(`sayHi 被调用了 ${sayHi.counter} 次`);

console.log("\n------------------------\n");

// 2. 使用函数属性替代闭包
function makeCounter() {
  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  return counter;
}

console.log("2. 使用函数属性替代闭包:");
let counter1 = makeCounter();
console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter1()); // 2

// 可以直接访问和修改计数器
counter1.count = 10;
console.log(counter1()); // 10

console.log("\n------------------------\n");

// 3. 比较：使用闭包的计数器
function makeCounterWithClosure() {
  let count = 0;
  return function () {
    return count++;
  };
}

console.log("3. 比较：使用闭包的计数器:");
let counter2 = makeCounterWithClosure();
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2

// 无法直接访问或修改计数器
// counter2.count = 10; // 这不会影响计数器

console.log("\n------------------------\n");

// 4. 使用函数属性存储其他信息
function greet(name) {
  console.log(`Hello, ${name}!`);
  greet.lastGreeted = name;
}
greet.lastGreeted = null;

console.log("4. 使用函数属性存储其他信息:");
greet("Alice");
greet("Bob");
console.log(`最后问候的人是: ${greet.lastGreeted}`);

console.log("\n------------------------\n");

// 5. 使用函数属性实现记忆化（缓存）
function fibonacci(n) {
  if (n <= 1) return n;
  if (fibonacci.cache[n] !== undefined) {
    return fibonacci.cache[n];
  }
  let result = fibonacci(n - 1) + fibonacci(n - 2);
  fibonacci.cache[n] = result;
  return result;
}
fibonacci.cache = {};

console.log("5. 使用函数属性实现记忆化（缓存）:");
console.log(fibonacci(10)); // 计算并缓存
console.log(fibonacci(10)); // 直接从缓存中获取
console.log("缓存的结果:", fibonacci.cache);
