// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/latestValueDemo.js

// 1. 基本示例
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

console.log("1. 基本示例:");
name = "Pete";
sayHi(); // 将输出 "Hi, Pete"

console.log("\n------------------------\n");

// 2. 延迟执行
function delayedGreeting() {
  let name = "Alice";

  setTimeout(function () {
    console.log("Hello, " + name);
  }, 1000);

  name = "Bob";
}

console.log("2. 延迟执行:");
delayedGreeting(); // 1秒后将输出 "Hello, Bob"

// 3. 闭包中的变量
function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

console.log("3. 闭包中的变量:");
let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

console.log("\n------------------------\n");

// 4. 函数参数
function greet(name) {
  setTimeout(function () {
    console.log("Welcome, " + name);
  }, 2000);
}

console.log("4. 函数参数:");
let userName = "Charlie";
greet(userName);
userName = "David";
// 2秒后将输出 "Welcome, Charlie"

console.log("\n------------------------\n");

// 5. 循环中的闭包
function createFunctions() {
  let funcs = [];

  for (var i = 0; i < 3; i++) {
    funcs.push(function () {
      console.log(i);
    });
  }

  return funcs;
}

console.log("5. 循环中的闭包:");
let functions = createFunctions();
functions[0](); // 3
functions[1](); // 3
functions[2](); // 3

console.log("\n------------------------\n");

// 6. 使用 let 修复循环中的闭包
function createFunctionsFixed() {
  let funcs = [];

  for (let i = 0; i < 3; i++) {
    funcs.push(function () {
      console.log(i);
    });
  }

  return funcs;
}

console.log("6. 使用 let 修复循环中的闭包:");
let fixedFunctions = createFunctionsFixed();
fixedFunctions[0](); // 0
fixedFunctions[1](); // 1
fixedFunctions[2](); // 2

// 基本示例：展示了函数如何使用外部变量的最新值。

// 延迟执行：演示了在异步操作中，函数仍然使用最新的变量值。

// 闭包中的变量：说明了闭包如何维护和更新其内部状态。

// 函数参数：展示了函数参数是按值传递的，不受后续外部变量更改的影响。

// 循环中的闭包：演示了使用 var 声明的变量在循环中创建闭包时可能出现的问题。

// 使用 let 修复循环中的闭包：说明了如何使用 let 来为每次迭代创建新的词法环境，从而解决闭包问题。