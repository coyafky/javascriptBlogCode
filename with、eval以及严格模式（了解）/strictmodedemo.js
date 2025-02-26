// 非严格模式下的代码
function nonStrictFunction() {
  var x = 10;
  y = 20; // 这里给全局变量赋值了
  console.log(x + y);
}
nonStrictFunction(); // 输出 30

// 严格模式下的代码
function strictFunction() {
  "use strict"; // 开启严格模式
  var x = 10;
  y = 20; // 这里会抛出错误，因为y未声明
  console.log(x + y);
}
// strictFunction(); // 如果取消注释，会抛出 ReferenceError: y is not defined

// 严格模式下的全局变量
function strictGlobal() {
  "use strict";
  globalVar = 30; // 这里会抛出错误，因为不能直接给全局变量赋值
}
// strictGlobal(); // 如果取消注释，会抛出 TypeError: Cannot create property 'globalVar' of [object Window]

// 严格模式下的函数声明
function strictModeFunction() {
  "use strict";
  if (true) {
    function foo() {
      console.log("Hello, world!");
    }
  }
  foo(); // 这里会抛出错误，因为foo函数在严格模式下不能在声明后立即使用
}
// strictModeFunction(); // 如果取消注释，会抛出 ReferenceError: foo is not defined
