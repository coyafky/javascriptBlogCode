// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/namedFunctionExpressionDemo.js

console.log("1. 基本的命名函数表达式:");
let sayHi = function func(who) {
  console.log(`Hello, ${who}`);
};

sayHi("John"); // 输出: Hello, John

try {
  func("John"); // 这会抛出错误
} catch (error) {
  console.log("Error when calling func directly:", error.message);
}

console.log("\n------------------------\n");

console.log("2. 使用 NFE 进行递归调用:");
let factorial = function fac(n) {
  return n <= 1 ? 1 : n * fac(n - 1);
};

console.log("5! =", factorial(5)); // 输出: 5! = 120

console.log("\n------------------------\n");

console.log("3. NFE 解决函数自引用问题:");
let sayHiToGuest = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest");
  }
};

let welcome = sayHiToGuest;
sayHiToGuest = null;

welcome(); // 输出: Hello, Guest
// 注意：即使 sayHiToGuest 被设为 null，函数仍然可以正常工作

console.log("\n------------------------\n");

console.log("4. 比较：不使用 NFE 的问题:");
let problematicSayHi = function (who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    problematicSayHi("Guest");
  }
};

let problematicWelcome = problematicSayHi;
problematicSayHi = null;

try {
  problematicWelcome(); // 这会抛出错误
} catch (error) {
  console.log("Error in problematic function:", error.message);
}

console.log("\n------------------------\n");

console.log("5. NFE 在循环中的应用:");
let funcs = [];

for (let i = 0; i < 3; i++) {
  funcs[i] = function func() {
    console.log(i);
    if (i > 0) func.count++;
  };
  func.count = 0;
}

funcs[0](); // 输出: 0
funcs[1](); // 输出: 1
funcs[1](); // 输出: 1
funcs[2](); // 输出: 2

console.log("函数调用次数:");
for (let i = 0; i < 3; i++) {
  console.log(`funcs[${i}].count =`, funcs[i].count);
}

console.log("\n------------------------\n");

console.log("6. NFE 与立即调用函数表达式 (IIFE):");
(function initialize(initialValue) {
  let value = initialValue;
  console.log("Initialized with:", value);

  // 这里可以进行更多的初始化操作
})(10);

// initialize 在这里不可见
try {
  initialize(20);
} catch (error) {
  console.log("Error when trying to call initialize:", error.message);
}
