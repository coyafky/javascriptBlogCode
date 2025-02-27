// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/restParamsNotesDemo.js

// 1. 正确用法：Rest 参数在参数列表的末尾
function correctUsage(arg1, arg2, ...restArgs) {
  console.log("Regular arguments:", arg1, arg2);
  console.log("Rest arguments:", restArgs);
}

console.log("1. 正确用法示例：");
correctUsage(1, 2, 3, 4, 5);

console.log("\n------------------------\n");

// 2. 错误用法：Rest 参数不在末尾（这会导致语法错误）
// 取消注释下面的函数定义会导致错误
// function incorrectUsage(arg1, ...restArgs, arg2) {
//     console.log("This will cause a SyntaxError");
// }

console.log("2. 错误用法示例（已注释掉以避免语法错误）");
console.log("function incorrectUsage(arg1, ...restArgs, arg2) { ... }");
console.log("SyntaxError: Rest parameter must be last formal parameter");

console.log("\n------------------------\n");

// 3. 只能有一个 Rest 参数
function singleRestParam(...args1 /*, ...args2*/) {
  console.log("Args:", args1);
  // 取消注释第二个 rest 参数会导致语法错误
}

console.log("3. 只能有一个 Rest 参数示例：");
singleRestParam(1, 2, 3);

console.log("\n------------------------\n");

// 4. Rest 参数和 arguments 对象的区别
function restVsArguments(a, b, ...rest) {
  console.log("Rest parameters:", rest);
  console.log("arguments object:", arguments);
}

console.log("4. Rest 参数和 arguments 对象的区别：");
restVsArguments(1, 2, 3, 4, 5);

console.log("\n------------------------\n");

// 5. 箭头函数中的 Rest 参数
const arrowWithRest = (...args) => {
  console.log("Arrow function with rest params:", args);
};

console.log("5. 箭头函数中的 Rest 参数：");
arrowWithRest(1, 2, 3);

console.log("\n------------------------\n");

// 6. 解构赋值中的 Rest 参数
function destructuringWithRest([first, ...rest]) {
  console.log("First:", first);
  console.log("Rest:", rest);
}

console.log("6. 解构赋值中的 Rest 参数：");
destructuringWithRest([1, 2, 3, 4, 5]);
