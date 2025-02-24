/**
 * 根据给定函数对数组元素进行分组
 *
 * @param {Array} arr - 要分组的数组
 * @param {Function} fn - 用于分组的函数
 * @returns {Object} - 分组后的对象
 */
function groupBy(arr, fn) {
  // 检查输入是否有效
  if (!Array.isArray(arr) || typeof fn !== "function") {
    return "Invalid input";
  }

  // 使用 reduce 方法进行分组
  return arr.reduce((grouped, item) => {
    // 使用 fn 函数获取分组键
    const key = fn(item);

    // 如果该键不存在，创建一个新数组
    if (!grouped[key]) {
      grouped[key] = [];
    }

    // 将当前项添加到对应的分组中
    grouped[key].push(item);

    return grouped;
  }, {});
}

// 测试函数
function testGroupBy() {
  // 测试用例 1: 按照数字的奇偶性分组
  console.log("测试用例 1: 按照数字的奇偶性分组");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(groupBy(numbers, (num) => (num % 2 === 0 ? "even" : "odd")));
  // 预期输出: { odd: [1, 3, 5, 7, 9], even: [2, 4, 6, 8, 10] }

  // 测试用例 2: 按照字符串长度分组
  console.log("\n测试用例 2: 按照字符串长度分组");
  const words = ["one", "two", "three", "four", "five", "six"];
  console.log(groupBy(words, (word) => word.length));
  // 预期输出: { '3': ['one', 'two', 'six'], '4': ['four', 'five'], '5': ['three'] }

  // 测试用例 3: 按照对象的某个属性分组
  console.log("\n测试用例 3: 按照对象的某个属性分组");
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 25 },
    { name: "Eve", age: 30 },
  ];
  console.log(groupBy(people, (person) => person.age));
  // 预期输出: {
  //   '25': [{ name: 'Alice', age: 25 }, { name: 'David', age: 25 }],
  //   '30': [{ name: 'Bob', age: 30 }, { name: 'Eve', age: 30 }],
  //   '35': [{ name: 'Charlie', age: 35 }]
  // }

  // 测试用例 4: 使用更复杂的分组函数
  console.log("\n测试用例 4: 使用更复杂的分组函数");
  const dates = [
    new Date("2023-01-01"),
    new Date("2023-02-15"),
    new Date("2023-03-20"),
    new Date("2023-04-05"),
    new Date("2023-05-10"),
    new Date("2023-06-25"),
  ];
  console.log(groupBy(dates, (date) => Math.floor(date.getMonth() / 3)));
  // 预期输出: {
  //   '0': [Date('2023-01-01'), Date('2023-02-15'), Date('2023-03-20')],
  //   '1': [Date('2023-04-05'), Date('2023-05-10'), Date('2023-06-25')]
  // }

  // 测试用例 5: 空数组
  console.log("\n测试用例 5: 空数组");
  console.log(groupBy([], (x) => x));
  // 预期输出: {}

  // 测试用例 6: 无效输入
  console.log("\n测试用例 6: 无效输入");
  console.log(groupBy("not an array", (x) => x));
  console.log(groupBy([1, 2, 3], "not a function"));
  // 预期输出: "Invalid input" (两次)
}

// 运行测试
testGroupBy();
