// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/timerDemo.js

console.log("定时器 Demo 开始");

// 1. 基本的 setTimeout 用法
console.log("1. 基本的 setTimeout 用法:");
setTimeout(() => {
  console.log("这条消息会在 2 秒后显示");
}, 2000);

// 2. setTimeout 带参数
console.log("\n2. setTimeout 带参数:");
function greet(name) {
  console.log(`Hello, ${name}!`);
}
setTimeout(greet, 3000, "Alice");

// 3. 取消 setTimeout
console.log("\n3. 取消 setTimeout:");
let timerId = setTimeout(() => {
  console.log("这条消息不会显示，因为定时器被取消了");
}, 4000);
clearTimeout(timerId);
console.log("定时器已被取消");

// 4. 基本的 setInterval 用法
console.log("\n4. 基本的 setInterval 用法:");
let counter = 0;
let intervalId = setInterval(() => {
  console.log(`计数器: ${++counter}`);
  if (counter >= 5) {
    clearInterval(intervalId);
    console.log("setInterval 已停止");
  }
}, 1000);

// 5. 嵌套的 setTimeout vs setInterval
console.log("\n5. 嵌套的 setTimeout vs setInterval:");
let nestedTimeoutId;
function nestedTimeout() {
  console.log("嵌套的 setTimeout 执行");
  nestedTimeoutId = setTimeout(nestedTimeout, 2000);
}
nestedTimeoutId = setTimeout(nestedTimeout, 2000);

// 6. 零延迟的 setTimeout
console.log("\n6. 零延迟的 setTimeout:");
setTimeout(() => {
  console.log("零延迟的 setTimeout 执行");
}, 0);
console.log("这条消息会先于零延迟的 setTimeout 显示");

// 清理函数
function cleanup() {
  clearTimeout(nestedTimeoutId);
  console.log("所有定时器已清理");
  console.log("定时器 Demo 结束");
}

// 10 秒后清理所有定时器
setTimeout(cleanup, 10000);
