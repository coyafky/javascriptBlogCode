// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/printListDemo.js

// 定义链表
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// 使用循环实现
function printListLoop(list) {
  console.log("使用循环输出链表：");
  let current = list;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

// 使用递归实现
function printListRecursive(list) {
  console.log(list.value);
  if (list.next) {
    printListRecursive(list.next);
  }
}

// 测试循环方法
printListLoop(list);

console.log("\n------------------------\n");

// 测试递归方法
console.log("使用递归输出链表：");
printListRecursive(list);

// 创建一个更长的链表来测试性能
function createLongList(length) {
  let dummy = { value: 0, next: null };
  let current = dummy;
  for (let i = 1; i <= length; i++) {
    current.next = { value: i, next: null };
    current = current.next;
  }
  return dummy.next;
}

let longList = createLongList(10000);

console.log("\n------------------------\n");

// 测试长链表的性能
console.log("测试长链表（10000个节点）的性能：");

console.time("循环方法");
printListLoop(longList);
console.timeEnd("循环方法");

console.log("\n");

console.time("递归方法");
try {
  printListRecursive(longList);
} catch (e) {
  console.log("递归方法导致栈溢出");
}
console.timeEnd("递归方法");
