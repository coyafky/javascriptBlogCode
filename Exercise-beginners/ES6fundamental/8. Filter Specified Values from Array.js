/**
 * 从数组中过滤出指定的值
 *
 * @param {Array} arr - 原始数组
 * @param {*} ...args - 要过滤的值（可以是多个）
 * @returns {Array} - 过滤后的数组
 */
function filterArray(arr, ...args) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return "Invalid input: not an array";
  }

  // 使用 filter 方法创建一个新数组，排除指定的值
  return arr.filter((item) => !args.includes(item));
}

// 测试函数
function testFilterArray() {
  console.log("测试用例 1: 过滤数字");
  console.log(filterArray([1, 2, 3, 4, 5], 2, 4));
  // 预期输出: [1, 3, 5]

  console.log("\n测试用例 2: 过滤字符串");
  console.log(
    filterArray(["apple", "banana", "orange", "grape"], "banana", "grape")
  );
  // 预期输出: ['apple', 'orange']

  console.log("\n测试用例 3: 过滤混合类型");
  console.log(filterArray([1, "a", true, null, {}, []], 1, null, {}));
  // 预期输出: ['a', true, []]

  console.log("\n测试用例 4: 过滤不存在的值");
  console.log(filterArray([1, 2, 3], 4, 5));
  // 预期输出: [1, 2, 3]

  console.log("\n测试用例 5: 空数组");
  console.log(filterArray([], 1, 2, 3));
  // 预期输出: []

  console.log("\n测试用例 6: 不过滤任何值");
  console.log(filterArray([1, 2, 3]));
  // 预期输出: [1, 2, 3]

  console.log("\n测试用例 7: 无效输入");
  console.log(filterArray("not an array", 1, 2));
  // 预期输出: Invalid input: not an array
}

// 运行测试
testFilterArray();
