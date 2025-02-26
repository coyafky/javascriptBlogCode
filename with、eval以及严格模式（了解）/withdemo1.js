// with 的典型用法
const person = {
  name: "Alice",
  age: 30,
  job: "Engineer",
};

// 使用 with 简化对象访问
with (person) {
  console.log(`${name} is ${age} years old`); // Alice is 30 years old
  job = "Developer"; // 修改的是 person.job
}

// ------------------------------------------------------------
// 危险案例演示
let x = 10;
const obj = { x: 20 };

// 问题 1：作用域优先冲突问题
function demoConflict() {
  with (obj) {
    console.log(x); // 20 (优先使用 obj.x)
    x = 30; // 修改的是 obj.x
    let y = x + 5; // y = 35 (使用 obj.x)
  }
  console.log(x); // 10 (此处使用的全局 x)
  console.log(obj.x); // 30 (已在 with 中修改)
}

// 问题 2：动态标识符导致的意外行为
function demoDynamic(obj) {
  with (obj) {
    console.log(id); // 可能访问 obj.id 或外部 id
  }
}

const obj1 = { id: "obj1" };
let id = "global";
demoDynamic(obj1); // obj1
demoDynamic({}); // global
