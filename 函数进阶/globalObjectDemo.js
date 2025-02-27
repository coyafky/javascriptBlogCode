// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/globalObjectDemo.js

// 1. 使用全局对象的内置方法
console.log("1. 使用全局对象的内置方法:");
window.alert("这是一个全局 alert");
console.log("window.innerWidth:", window.innerWidth);
console.log("window.innerHeight:", window.innerHeight);

console.log("\n------------------------\n");

// 2. var 声明的全局变量
console.log("2. var 声明的全局变量:");
var globalVar = "我是用 var 声明的全局变量";
console.log("window.globalVar:", window.globalVar);

console.log("\n------------------------\n");

// 3. let 声明的变量
console.log("3. let 声明的变量:");
let globalLet = "我是用 let 声明的变量";
console.log("window.globalLet:", window.globalLet);

console.log("\n------------------------\n");

// 4. const 声明的变量
console.log("4. const 声明的变量:");
const globalConst = "我是用 const 声明的变量";
console.log("window.globalConst:", window.globalConst);

console.log("\n------------------------\n");

// 5. 直接给全局对象添加属性
console.log("5. 直接给全局对象添加属性:");
window.customGlobal = "我是直接添加到 window 的属性";
console.log("window.customGlobal:", window.customGlobal);
console.log("直接访问 customGlobal:", customGlobal);

console.log("\n------------------------\n");

// 6. 全局函数声明
console.log("6. 全局函数声明:");
function globalFunction() {
  return "我是全局函数";
}
console.log("window.globalFunction:", window.globalFunction);
console.log("调用全局函数:", globalFunction());

console.log("\n------------------------\n");

// 7. 使用 globalThis
console.log("7. 使用 globalThis:");
console.log("globalThis === window:", globalThis === window);
globalThis.globalThisProperty = "我是通过 globalThis 添加的属性";
console.log("window.globalThisProperty:", window.globalThisProperty);

console.log("\n------------------------\n");

// 8. 尝试修改只读的全局属性
console.log("8. 尝试修改只读的全局属性:");
try {
  window.Infinity = 100;
} catch (error) {
  console.log("无法修改 Infinity:", error.message);
}

console.log("\n------------------------\n");

// 9. 检查是否在浏览器环境中
console.log("9. 检查是否在浏览器环境中:");
if (typeof window !== "undefined") {
  console.log("当前在浏览器环境中");
} else {
  console.log("当前不在浏览器环境中");
}
