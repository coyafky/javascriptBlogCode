// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/garbageCollectionDemo.js

// 用于模拟内存使用的简单函数
function memoryUsage() {
  return Math.floor(Math.random() * 100);
}

// 1. 简单函数调用
function simpleFunction() {
  let localVar = "I'm local";
  console.log(localVar);
}

console.log("1. 简单函数调用:");
console.log("内存使用前:", memoryUsage());
simpleFunction();
console.log("内存使用后:", memoryUsage());
console.log("localVar 应该被垃圾收集器清理");

console.log("\n------------------------\n");

// 2. 返回内部函数的闭包
function createClosure() {
  let value = Math.random();

  return function () {
    console.log(value);
  };
}

console.log("2. 返回内部函数的闭包:");
console.log("内存使用前:", memoryUsage());
let closure = createClosure();
console.log("内存使用后:", memoryUsage());
closure();
console.log("value 仍然存在于内存中");

console.log("\n------------------------\n");

// 3. 多个闭包
function createMultipleClosures() {
  return [createClosure(), createClosure(), createClosure()];
}

console.log("3. 多个闭包:");
console.log("内存使用前:", memoryUsage());
let closures = createMultipleClosures();
console.log("内存使用后:", memoryUsage());
closures.forEach((closure) => closure());
console.log("多个 value 实例仍然存在于内存中");

console.log("\n------------------------\n");

// 4. 清理闭包
function cleanupClosures() {
  console.log("清理闭包前内存使用:", memoryUsage());
  closures = null;
  closure = null;
  console.log("清理闭包后内存使用:", memoryUsage());
  console.log("闭包应该被垃圾收集器清理");
}

console.log("4. 清理闭包:");
cleanupClosures();

console.log("\n------------------------\n");

// 5. 循环引用
function createCircularReference() {
  let obj1 = {};
  let obj2 = {};

  obj1.ref = obj2;
  obj2.ref = obj1;

  return function () {
    console.log(obj1, obj2);
  };
}

console.log("5. 循环引用:");
console.log("创建循环引用前内存使用:", memoryUsage());
let circularClosure = createCircularReference();
console.log("创建循环引用后内存使用:", memoryUsage());
circularClosure();
console.log("即使存在循环引用，现代的垃圾收集器也能处理");

console.log("\n------------------------\n");

// 6. 模拟内存泄漏
function simulateMemoryLeak() {
  let leakedArray = [];

  return function addToArray(item) {
    leakedArray.push(item);
    console.log("数组长度:", leakedArray.length);
  };
}

console.log("6. 模拟内存泄漏:");
let leakyFunction = simulateMemoryLeak();
console.log("添加项目前内存使用:", memoryUsage());
for (let i = 0; i < 1000; i++) {
  leakyFunction(i);
}
console.log("添加项目后内存使用:", memoryUsage());
console.log("leakedArray 持续增长，可能导致内存问题");

// 注意：在实际应用中，应该避免这种模式，或在不再需要时清理引用
leakyFunction = null;
