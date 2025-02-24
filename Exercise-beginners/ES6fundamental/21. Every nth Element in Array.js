/**
 * 获取数组中的每第 n 个元素
 *
 * @param {Array} arr - 输入数组
 * @param {number} nth - 步长（每第几个元素）
 * @returns {Array} - 包含每第 n 个元素的新数组
 */
function getEveryNthElement(arr, nth) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return "Invalid input: first argument must be an array";
  }

  // 检查 nth 是否为正整数
  if (!Number.isInteger(nth) || nth <= 0) {
    return "Invalid input: second argument must be a positive integer";
  }

  // 使用 filter 方法获取每第 n 个元素
  return arr.filter((_, index) => (index + 1) % nth === 0);
}

// 测试函数
function testGetEveryNthElement() {
  console.log("测试用例 1: 获取每第 2 个元素");
  console.log(getEveryNthElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
  // 预期输出: [2, 4, 6, 8]

  console.log("\n测试用例 2: 获取每第 3 个元素");
  console.log(getEveryNthElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
  // 预期输出: [3, 6, 9]

  console.log("\n测试用例 3: 步长大于数组长度");
  console.log(getEveryNthElement([1, 2, 3, 4, 5], 6));
  // 预期输出: []

  console.log("\n测试用例 4: 步长等于数组长度");
  console.log(getEveryNthElement([1, 2, 3, 4, 5], 5));
  // 预期输出: [5]

  console.log("\n测试用例 5: 空数组");
  console.log(getEveryNthElement([], 2));
  // 预期输出: []

  console.log("\n测试用例 6: 包含不同类型元素的数组");
  console.log(getEveryNthElement([1, "a", true, null, {}, []], 2));
  // 预期输出: ['a', null, []]

  console.log("\n测试用例 7: 无效输入 - 第一个参数不是数组");
  console.log(getEveryNthElement("not an array", 2));
  // 预期输出: "Invalid input: first argument must be an array"

  console.log("\n测试用例 8: 无效输入 - 第二个参数不是正整数");
  console.log(getEveryNthElement([1, 2, 3], 0));
  // 预期输出: "Invalid input: second argument must be a positive integer"

  console.log("\n测试用例 9: 无效输入 - 第二个参数是小数");
  console.log(getEveryNthElement([1, 2, 3], 1.5));
  // 预期输出: "Invalid input: second argument must be a positive integer"
}

// 运行测试
testGetEveryNthElement();
