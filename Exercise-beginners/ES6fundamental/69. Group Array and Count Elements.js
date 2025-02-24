/**
 * 根据给定函数对数组元素进行分组，并计算每个组的元素数量
 * @param {Array} arr - 要分组的数组
 * @param {Function} fn - 用于确定分组的函数
 * @returns {Object} - 返回一个对象，键为分组标识，值为该组中元素的数量
 */
function groupAndCount(arr, fn) {
  // 使用reduce方法进行分组和计数
  return arr.reduce((groups, item) => {
    // 使用fn函数确定当前项的分组键
    const key = fn(item);
    // 如果该分组不存在，则初始化为0
    if (!groups[key]) {
      groups[key] = 0;
    }
    // 增加该分组的计数
    groups[key]++;
    return groups;
  }, {});
}

// 测试函数
function testGroupAndCount() {
  console.log("测试用例1 - 按数字的奇偶性分组：");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(
    groupAndCount(numbers, (num) => (num % 2 === 0 ? "even" : "odd"))
  );
  // 预期输出: { odd: 5, even: 4 }

  console.log("\n测试用例2 - 按字符串长度分组：");
  const words = ["one", "two", "three", "four", "five", "six"];
  console.log(groupAndCount(words, (word) => word.length));
  // 预期输出: { '3': 3, '4': 1, '5': 1, '6': 1 }

  console.log("\n测试用例3 - 按对象属性分组：");
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 25 },
    { name: "Eve", age: 30 },
  ];
  console.log(groupAndCount(people, (person) => person.age));
  // 预期输出: { '25': 2, '30': 2, '35': 1 }

  console.log("\n测试用例4 - 自定义复杂分组函数：");
  const data = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  console.log(
    groupAndCount(data, (num) => {
      if (num < 30) return "low";
      if (num < 70) return "medium";
      return "high";
    })
  );
  // 预期输出: { low: 2, medium: 4, high: 3 }

  console.log("\n测试用例5 - 空数组：");
  console.log(groupAndCount([], (item) => item));
  // 预期输出: {}
}

// 运行测试
testGroupAndCount();
