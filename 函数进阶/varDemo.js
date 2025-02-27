// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/varDemo.js

console.log("1. var 的块级作用域问题:");
if (true) {
  var x = 10;
  let y = 20;
}
console.log(x); // 10
try {
  console.log(y); // 这里会抛出错误
} catch (error) {
  console.log("Error accessing y:", error.message);
}

console.log("\n------------------------\n");

console.log("2. var 在循环中的作用域:");
for (var i = 0; i < 3; i++) {
  var insideLoop = "I'm inside";
}
console.log(i); // 3
console.log(insideLoop); // "I'm inside"

console.log("\n------------------------\n");

console.log("3. var 的函数作用域:");
function testScope() {
  var functionScoped = "I'm function scoped";
  if (true) {
    var blockScoped = "I'm not actually block scoped";
  }
  console.log(functionScoped); // "I'm function scoped"
  console.log(blockScoped); // "I'm not actually block scoped"
}
testScope();
try {
  console.log(functionScoped); // 这里会抛出错误
} catch (error) {
  console.log("Error accessing functionScoped:", error.message);
}

console.log("\n------------------------\n");

console.log("4. var 允许重复声明:");
var a = 1;
var a = 2;
console.log(a); // 2

console.log("\n------------------------\n");

console.log("5. var 的提升:");
console.log(hoistedVar); // undefined
var hoistedVar = "I'm hoisted";
console.log(hoistedVar); // "I'm hoisted"

console.log("\n------------------------\n");

console.log("6. 函数中 var 的提升:");
function hoistingExample() {
  console.log(hoistedInFunction); // undefined
  var hoistedInFunction = "I'm hoisted in function";
  console.log(hoistedInFunction); // "I'm hoisted in function"
}
hoistingExample();

console.log("\n------------------------\n");

console.log("7. let vs var in loops:");
for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log("var j:", j), 0);
}
for (let k = 0; k < 3; k++) {
  setTimeout(() => console.log("let k:", k), 0);
}

// 注意：最后一个例子的输出将在其他所有输出之后显示，因为 setTimeout 是异步的
