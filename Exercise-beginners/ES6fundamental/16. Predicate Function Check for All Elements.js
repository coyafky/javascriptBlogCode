/**
 * 检查谓词函数是否对集合中的所有元素都返回 true
 *
 * @param {Array} collection - 要检查的集合（数组）
 * @param {Function} predicate - 谓词函数，用于测试每个元素
 * @returns {boolean} - 如果谓词函数对所有元素都返回 true 则返回 true，否则返回 false
 */
function checkAllElements(collection, predicate) {
  // 检查输入是否为数组
  if (!Array.isArray(collection)) {
    return "Invalid input: first argument must be an array";
  }

  // 检查谓词是否为函数
  if (typeof predicate !== "function") {
    return "Invalid input: second argument must be a function";
  }

  // 使用 every 方法检查所有元素
  return collection.every(predicate);
}

// 测试函数
function testCheckAllElements() {
  console.log("测试用例 1: 所有元素都是正数");
  console.log(checkAllElements([1, 2, 3, 4, 5], (num) => num > 0));
  // 预期输出: true

  console.log("\n测试用例 2: 不是所有元素都是偶数");
  console.log(checkAllElements([2, 4, 6, 7, 8], (num) => num % 2 === 0));
  // 预期输出: false

  console.log("\n测试用例 3: 所有字符串长度大于 3");
  console.log(
    checkAllElements(["apple", "banana", "cherry"], (str) => str.length > 3)
  );
  // 预期输出: true

  console.log("\n测试用例 4: 空数组");
  console.log(checkAllElements([], () => false));
  // 预期输出: true（空数组对任何谓词都返回 true）

  console.log("\n测试用例 5: 对象数组");
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  console.log(checkAllElements(people, (person) => person.age > 20));
  // 预期输出: true

  console.log("\n测试用例 6: 无效输入 - 第一个参数不是数组");
  console.log(checkAllElements("not an array", (x) => x > 0));
  // 预期输出: "Invalid input: first argument must be an array"

  console.log("\n测试用例 7: 无效输入 - 第二个参数不是函数");
  console.log(checkAllElements([1, 2, 3], "not a function"));
  // 预期输出: "Invalid input: second argument must be a function"
}

// 运行测试
testCheckAllElements();
