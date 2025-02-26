// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/with、eval以及严格模式（了解）/strictdemo4.js

"use strict";

// 演示严格模式下的this指向和全局方法使用

// 自执行函数示例
function foo() {
  console.log("foo中的this:", this);
  //通常在自执行函数里面我们想要调用window中的属性时，不使用this
  localStorage.setItem("testKey", "testValue"); // localStorage会自动指向全局对象
}
foo(); // 在严格模式下，this指向undefined

// setTimeout中的this指向示例
setTimeout(() => {
  console.log("箭头函数中的this:", this);
}, 2000); // this指向window

setTimeout(function () {
  console.log("普通函数中的this:", this);
}, 2000); // 即使在严格模式下，this仍指向window

// 之前的代码保持不变
function foo1() {
  console.log("foo1", this);
}

function foo2() {
  console.log("foo2", this);
  foo1();
}

function foo3() {
  console.log("foo3", this);
  foo2();
}

foo3();
