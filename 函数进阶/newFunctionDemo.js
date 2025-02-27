// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/newFunctionDemo.js

console.log("1. 基本的 new Function 用法:");
let sum = new Function("a", "b", "return a + b");
console.log("sum(2, 3) =", sum(2, 3)); // 输出: 5

console.log("\n------------------------\n");

console.log("2. 创建无参数的函数:");
let sayHello = new Function('console.log("Hello, world!")');
sayHello(); // 输出: Hello, world!

console.log("\n------------------------\n");

console.log("3. 动态创建函数:");
let operation = "multiply";
let createMathFunction = function (operation) {
  if (operation === "add") {
    return new Function("a", "b", "return a + b");
  } else if (operation === "multiply") {
    return new Function("a", "b", "return a * b");
  }
};

let mathFunc = createMathFunction(operation);
console.log("2 * 3 =", mathFunc(2, 3)); // 输出: 6

console.log("\n------------------------\n");

console.log("4. 使用字符串创建复杂函数:");
let functionBody = `
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
`;
let sumAll = new Function(functionBody);
console.log("sumAll(1, 2, 3, 4) =", sumAll(1, 2, 3, 4)); // 输出: 10

console.log("\n------------------------\n");

console.log("5. 模拟从服务器接收函数:");
// 假设这是从服务器接收的字符串
let serverCode = `
    return function(name) {
        console.log("Welcome, " + name + "!");
    }
`;
let createGreeter = new Function(serverCode);
let greeter = createGreeter();
greeter("Alice"); // 输出: Welcome, Alice!

console.log("\n------------------------\n");

console.log("6. new Function 和闭包的区别:");
let value = "Hello";

let funcWithClosure = function () {
  return value;
};
let funcWithNewFunction = new Function("return value;");

console.log("funcWithClosure() =", funcWithClosure()); // 输出: Hello
try {
  console.log("funcWithNewFunction() =", funcWithNewFunction());
} catch (error) {
  console.log("Error in funcWithNewFunction:", error.message);
}

console.log("\n------------------------\n");

console.log("7. 使用 new Function 进行简单的代码注入防护:");
let userInput = "console.log('Malicious code')"; // 假设这是用户输入
let safeEval = new Function(
  "code",
  `
    // 这里可以添加一些安全检查
    // 例如，禁止某些关键字或限制执行时间
    if (code.includes('Malicious')) {
        throw new Error('Potentially malicious code detected');
    }
    return eval(code);
`
);

try {
  safeEval(userInput);
} catch (error) {
  console.log("Safely caught:", error.message);
}
