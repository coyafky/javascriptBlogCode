// 全局作用域
console.log(this); // 在非严格模式下，输出全局对象（浏览器中的window，Node.js中的global）

// 严格模式下的全局作用域
(function () {
  "use strict";
  console.log(this); // 输出 undefined
})();

// 普通函数调用
function normalFunction() {
  console.log(this); // 在非严格模式下，输出全局对象
}
normalFunction();

(function () {
  "use strict";
  function strictFunction() {
    console.log(this); // 输出 undefined
  }
  strictFunction();
})();
