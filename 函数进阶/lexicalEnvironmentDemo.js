// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/lexicalEnvironmentDemo.js

// 全局词法环境
let globalVar = "I'm global";

// 1. 简单的词法环境示例
function simpleFunction() {
  let localVar = "I'm local";
  console.log(globalVar); // 可以访问全局变量
  console.log(localVar); // 可以访问局部变量
}

console.log("1. 简单的词法环境示例:");
simpleFunction();
try {
  console.log(localVar); // 这将抛出错误，因为localVar在全局环境中不可见
} catch (error) {
  console.log("Error:", error.message);
}

console.log("\n------------------------\n");

// 2. 嵌套函数和词法环境
function outerFunction(x) {
  let y = 10;

  function innerFunction(z) {
    console.log(x + y + z);
  }

  return innerFunction;
}

console.log("2. 嵌套函数和词法环境:");
let inner = outerFunction(5);
inner(3); // 输出 18 (5 + 10 + 3)

console.log("\n------------------------\n");

// 3. 闭包示例
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

console.log("3. 闭包示例:");
let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2)); // 输出 7
console.log(add10(2)); // 输出 12

console.log("\n------------------------\n");

// 4. 闭包中的变量修改
function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

console.log("4. 闭包中的变量修改:");
let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (独立的计数器)

console.log("\n------------------------\n");

// 5. 立即调用函数表达式 (IIFE) 和私有变量
let module = (function () {
  let privateVar = 0;

  function privateFunction() {
    console.log("私有函数被调用");
  }

  return {
    incrementPrivateVar: function () {
      privateVar++;
      privateFunction();
    },
    getPrivateVar: function () {
      return privateVar;
    },
  };
})();

console.log("5. IIFE 和私有变量:");
module.incrementPrivateVar();
console.log(module.getPrivateVar()); // 1
// console.log(module.privateVar); // 这将是 undefined，因为 privateVar 是私有的
