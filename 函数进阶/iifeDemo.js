// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/iifeDemo.js

// 1. 全局作用域中的 var
var globalVar = "I'm global";

console.log("1. 全局作用域中的 var:");
console.log(globalVar); // "I'm global"

console.log("\n------------------------\n");

// 2. 基本的 IIFE
(function () {
  var privateVar = "I'm private";
  console.log("2. 基本的 IIFE:");
  console.log(privateVar); // "I'm private"
  console.log(globalVar); // "I'm global"
})();

try {
  console.log(privateVar); // 这会抛出错误
} catch (error) {
  console.log("Error accessing privateVar:", error.message);
}

console.log("\n------------------------\n");

// 3. IIFE 与参数
(function (name) {
  var greeting = "Hello, " + name + "!";
  console.log("3. IIFE 与参数:");
  console.log(greeting);
})("John");

console.log("\n------------------------\n");

// 4. IIFE 返回值
var result = (function () {
  var private = "You can't see me directly";
  return {
    getter: function () {
      return private;
    },
  };
})();

console.log("4. IIFE 返回值:");
console.log(result.getter()); // "You can't see me directly"

console.log("\n------------------------\n");

// 5. 模块模式
var counter = (function () {
  var count = 0;
  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    getValue: function () {
      return count;
    },
  };
})();

console.log("5. 模块模式:");
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getValue()); // 1

console.log("\n------------------------\n");

// 6. 不同的 IIFE 语法
console.log("6. 不同的 IIFE 语法:");

(function () {
  console.log("IIFE with parentheses at the end");
})();

(function () {
  console.log("IIFE with parentheses around everything");
})();

!(function () {
  console.log("IIFE started with !");
})();

+(function () {
  console.log("IIFE started with +");
})();

console.log("\n------------------------\n");

// 7. 在循环中使用 IIFE 解决 var 的问题
console.log("7. 在循环中使用 IIFE 解决 var 的问题:");

for (var i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(function () {
      console.log("IIFE in loop:", index);
    }, 100);
  })(i);
}

// 对比不使用 IIFE 的情况
for (var j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("Without IIFE:", j);
  }, 100);
}
