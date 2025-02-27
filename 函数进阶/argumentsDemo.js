// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/argumentsDemo.js

// 1. 基本使用
function showArguments() {
  console.log("Arguments length:", arguments.length);
  console.log("First argument:", arguments[0]);
  console.log("Second argument:", arguments[1]);
  console.log("All arguments:", arguments);
}

console.log("1. 基本使用：");
showArguments("Hello", "World");
console.log("\n");
showArguments("JavaScript");

console.log("\n------------------------\n");

// 2. 遍历 arguments
function iterateArguments() {
  console.log("遍历 arguments：");
  for (let arg of arguments) {
    console.log(arg);
  }
}

console.log("2. 遍历 arguments：");
iterateArguments(1, 2, 3, 4, 5);

console.log("\n------------------------\n");

// 3. arguments 不是数组
function argumentsNotArray() {
  console.log("arguments 是数组吗？", Array.isArray(arguments));
  console.log("arguments 的类型：", typeof arguments);

  // 尝试使用数组方法会失败
  try {
    arguments.push(4);
  } catch (e) {
    console.log("Error:", e.message);
  }
}

console.log("3. arguments 不是数组：");
argumentsNotArray(1, 2, 3);

console.log("\n------------------------\n");

// 4. 将 arguments 转换为数组
function convertToArray() {
  const args = Array.from(arguments);
  console.log("转换后是数组吗？", Array.isArray(args));
  args.push(4);
  console.log("可以使用数组方法了：", args);
}

console.log("4. 将 arguments 转换为数组：");
convertToArray(1, 2, 3);

console.log("\n------------------------\n");

// 5. arguments 与 rest 参数的对比
function compareWithRest(a, b, ...rest) {
  console.log("Regular params:", a, b);
  console.log("Rest params:", rest);
  console.log("Arguments object:", arguments);
}

console.log("5. arguments 与 rest 参数的对比：");
compareWithRest(1, 2, 3, 4, 5);

console.log("\n------------------------\n");

// 6. arguments 在箭头函数中不可用
const arrowFunction = () => {
  console.log(
    "Arguments in arrow function:",
    typeof arguments !== "undefined" ? arguments : "Not available"
  );
};

console.log("6. arguments 在箭头函数中不可用：");
arrowFunction(1, 2, 3);
