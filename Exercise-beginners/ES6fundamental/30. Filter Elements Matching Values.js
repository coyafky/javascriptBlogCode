/**
 * 从数组中过滤出不匹配指定值的元素
 *
 * @param {Array} arr - 要过滤的数组
 * @param {...*} values - 要排除的值（可以是多个）
 * @returns {Array} - 过滤后的新数组
 */
function filterElements(arr, ...values) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return "Invalid input: first argument must be an array";
  }

  // 使用 Set 来存储要排除的值，提高查找效率
  const excludeSet = new Set(values);

  // 使用 filter 方法创建新数组，只包含不在 excludeSet 中的元素
  return arr.filter((item) => !excludeSet.has(item));
}

// 测试函数
function testFilterElements() {
  console.log("测试用例 1: 基本数字数组");
  console.log(filterElements([1, 2, 3, 4, 5], 2, 4));
  // 预期输出: [1, 3, 5]

  console.log("\n测试用例 2: 字符串数组");
  console.log(
    filterElements(["apple", "banana", "orange", "grape"], "banana", "grape")
  );
  // 预期输出: ['apple', 'orange']

  console.log("\n测试用例 3: 混合类型数组");
  console.log(filterElements([1, "a", true, null, {}, []], 1, null, {}));
  // 预期输出: ['a', true, []]

  console.log("\n测试用例 4: 空数组");
  console.log(filterElements([], 1, 2, 3));
  // 预期输出: []

  console.log("\n测试用例 5: 没有匹配的值");
  console.log(filterElements([1, 2, 3], 4, 5));
  // 预期输出: [1, 2, 3]

  console.log("\n测试用例 6: 所有元素都被过滤");
  console.log(filterElements([1, 2, 3], 1, 2, 3));
  // 预期输出: []

  console.log("\n测试用例 7: 包含重复元素");
  console.log(filterElements([1, 2, 2, 3, 3, 3], 2, 3));
  // 预期输出: [1]

  console.log("\n测试用例 8: 使用不同类型的值进行过滤");
  console.log(filterElements([1, "1", true, "true"], 1, "true"));
  // 预期输出: ['1', true]

  console.log("\n测试用例 9: 无效输入 - 非数组");
  console.log(filterElements("not an array", 1, 2));
  // 预期输出: "Invalid input: first argument must be an array"

  console.log("\n测试用例 10: 不提供过滤值");
  console.log(filterElements([1, 2, 3]));
  // 预期输出: [1, 2, 3]
}

// 运行测试
testFilterElements();
