// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/restParamsDemo.js

// 示例1：求和函数
function sumAll(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

console.log("示例1：求和函数");
console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(1, 2, 3, 4, 5)); // 15

console.log("\n------------------------\n");

// 示例2：结合常规参数使用
function showName(firstName, lastName, ...titles) {
  console.log(`${firstName} ${lastName}`); // 输出名字
  console.log(titles.length); // 剩余参数的数量
  console.log(titles.join(", ")); // 剩余参数组成的数组
}

console.log("示例2：结合常规参数使用");
showName("Julius", "Caesar", "Consul", "Imperator");

console.log("\n------------------------\n");

// 示例3：使用箭头函数
const max = (...numbers) => Math.max(...numbers);

console.log("示例3：使用箭头函数找最大值");
console.log(max(3, 5, 1)); // 5
console.log(max(1, 2, 3, 4, 5, 6, 7)); // 7

console.log("\n------------------------\n");

// 示例4：对象方法中使用 Rest 参数
let meeting = {
  attendees: [],
  add(...names) {
    this.attendees.push(...names);
  },
  get latest() {
    return this.attendees[this.attendees.length - 1];
  },
};

console.log("示例4：对象方法中使用 Rest 参数");
meeting.add("John", "Jane", "Alice");
console.log(meeting.attendees); // ["John", "Jane", "Alice"]
console.log(meeting.latest); // "Alice"

console.log("\n------------------------\n");

// 示例5：结合解构使用
function showTeam(manager, lead, ...members) {
  console.log("Manager:", manager);
  console.log("Lead:", lead);
  console.log("Team members:", members.join(", "));
}

console.log("示例5：结合解构使用");
showTeam("John", "Jane", "Alice", "Bob", "Charlie");
