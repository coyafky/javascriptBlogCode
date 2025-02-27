// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/closureVsNewFunctionDemo.js

console.log("1. 闭包示例:");
function createClosureFunction() {
  let value = "test";
  return function () {
    console.log(value);
  };
}

let closureFunc = createClosureFunction();
closureFunc(); // 输出: test

console.log("\n------------------------\n");

console.log("2. new Function 示例:");
function createNewFunction() {
  let value = "test";
  return new Function("console.log(value)");
}

let newFunc = createNewFunction();
try {
  newFunc(); // 这会抛出错误
} catch (error) {
  console.log("Error in newFunc:", error.message);
}

console.log("\n------------------------\n");

console.log("3. new Function 访问全局变量:");
global.globalValue = "I'm global";
let globalFunc = new Function("console.log(globalValue)");
globalFunc(); // 输出: I'm global

console.log("\n------------------------\n");

console.log("4. 模拟代码压缩的影响:");
function simulateMinification() {
  let a = "原始变量名";
  return new Function("console.log(a)");
}

try {
  let minifiedFunc = simulateMinification();
  minifiedFunc(); // 这会抛出错误
} catch (error) {
  console.log("Error after minification:", error.message);
}

console.log("\n------------------------\n");

console.log("5. 正确使用 new Function 传递数据:");
function createFunctionWithData(data) {
  return new Function("data", 'console.log("Data:", data)');
}

let funcWithData = createFunctionWithData("Hello");
funcWithData("Hello"); // 输出: Data: Hello

console.log("\n------------------------\n");

console.log("6. 从'服务器'接收代码的模拟:");
function simulateServerCode(code) {
  // 在实际情况中，这里的代码可能来自服务器
  return new Function(code);
}

let serverCode = 'return "Code from server: " + Math.random()';
let serverFunc = simulateServerCode(serverCode);
console.log(serverFunc()); // 输出: Code from server: [随机数]
