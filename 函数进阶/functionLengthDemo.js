// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/functionLengthDemo.js

// 1. 基本函数的 length 属性
function noParams() {}
function oneParam(a) {}
function twoParams(a, b) {}
function manyParams(a, b, c, d, e) {}

console.log("1. 基本函数的 length 属性:");
console.log("noParams.length:", noParams.length); // 输出: 0
console.log("oneParam.length:", oneParam.length); // 输出: 1
console.log("twoParams.length:", twoParams.length); // 输出: 2
console.log("manyParams.length:", manyParams.length); // 输出: 5

console.log("\n------------------------\n");

// 2. 带有默认参数的函数
function withDefault(a, b = 1, c) {}
console.log("2. 带有默认参数的函数:");
console.log("withDefault.length:", withDefault.length); // 输出: 1

console.log("\n------------------------\n");

// 3. 带有 rest 参数的函数
function withRest(a, b, ...rest) {}
console.log("3. 带有 rest 参数的函数:");
console.log("withRest.length:", withRest.length); // 输出: 2

console.log("\n------------------------\n");

// 4. 箭头函数
const arrowNoParams = () => {};
const arrowOneParam = (a) => {};
const arrowTwoParams = (a, b) => {};

console.log("4. 箭头函数:");
console.log("arrowNoParams.length:", arrowNoParams.length); // 输出: 0
console.log("arrowOneParam.length:", arrowOneParam.length); // 输出: 1
console.log("arrowTwoParams.length:", arrowTwoParams.length); // 输出: 2

console.log("\n------------------------\n");

// 5. 使用 length 属性实现函数多态性
function polymorphic(param1, param2) {
  if (polymorphic.length === arguments.length) {
    console.log("Called with expected number of arguments");
  } else if (arguments.length > polymorphic.length) {
    console.log("Called with more arguments than expected");
  } else {
    console.log("Called with fewer arguments than expected");
  }
}

console.log("5. 使用 length 属性实现函数多态性:");
polymorphic(1, 2); // 输出: Called with expected number of arguments
polymorphic(1); // 输出: Called with fewer arguments than expected
polymorphic(1, 2, 3); // 输出: Called with more arguments than expected

console.log("\n------------------------\n");

// 6. 高级示例：根据参数数量调用不同的处理函数
function ask(question, ...handlers) {
  let isYes = Math.random() < 0.5; // 模拟用户的回答

  console.log(`Question: ${question}`);
  console.log(`Answer: ${isYes ? "Yes" : "No"}`);

  for (let handler of handlers) {
    if (handler.length === 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}

console.log("6. 高级示例：根据参数数量调用不同的处理函数:");
ask(
  "Do you agree?",
  () => console.log("Handler for positive answer called"),
  (result) => console.log(`Generic handler called with result: ${result}`)
);
