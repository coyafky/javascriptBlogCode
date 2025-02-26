// ====================
// 基础用例（危险演示）
// ====================
// 基础数学运算
const mathExpression = "2 + 3 * 5";
console.log(eval(mathExpression)); // 17 （但永远不要这样处理数学表达式！）

// 动态变量创建（可能污染作用域）
eval('var dynamicVar = "创建于eval"');
console.log(dynamicVar); // "创建于eval" （全局作用域被污染）

// ====================
// 安全隐患案例
// ====================
// 案例1：执行恶意代码
const userInput1 = 'alert("恶意弹窗！")'; // 模拟用户输入
// eval(userInput1); // 如果执行，会弹出警告框

// 案例2：访问敏感信息
const sensitiveData = { password: "123456" };
const userInput2 = "sensitiveData.password";
console.log("Eval获取密码:", eval(userInput2)); // '123456' （敏感数据泄漏）

// ====================
// 作用域问题案例
// ====================
function scopeDemo() {
  const localVar = "安全值";
  eval('localVar = "被篡改值";'); // 直接修改了函数作用域的变量
  console.log(localVar); // "被篡改值" （非预期行为）
}
scopeDemo();

// ====================
// 性能问题对比测试
// ====================
const iterations = 1000000;
const expression = "Math.sqrt(i) * 2";

// eval测试
console.time("eval");
for (let i = 0; i < iterations; i++) {
  eval(expression); // 每次循环重新解析
}
console.timeEnd("eval"); // 约 250ms (具体时间取决于环境)

// 直接执行测试
console.time("direct");
for (let i = 0; i < iterations; i++) {
  Math.sqrt(i) * 2; // 纯计算
}
console.timeEnd("direct"); // 约 5ms

// ====================
// 现代替代方案
// ====================
// 方案1：使用 Function 构造函数（比eval稍安全）
const safeEval = (code) => new Function(`return ${code}`)();
console.log("安全计算:", safeEval("2 + 3")); // 5 （有独立作用域）

// 方案2：对象属性访问
const data = { x: 10, y: 20 };
console.log("安全访问:", data["x"] + data["y"]); // 30 （完全可控）

// 方案3：严格模式限制
function strictDemo() {
  "use strict";
  eval("var strictVar = 1"); // 在严格模式下创建局部变量
  // console.log(strictVar); // ReferenceError （变量不会泄漏）
}
strictDemo();
