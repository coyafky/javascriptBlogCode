/**
 * 从数组中提取指定索引的值
 *
 * @param {Array} arr - 源数组
 * @param {number[]} indexes - 要提取的索引数组
 * @returns {Array} - 提取的值组成的新数组
 */
function extractValuesByIndexes(arr, indexes) {
  // 检查输入是否为数组
  if (!Array.isArray(arr) || !Array.isArray(indexes)) {
    return "Invalid input: both arguments must be arrays";
  }

  // 使用 map 方法提取指定索引的值
  // 如果索引无效（超出范围或非整数），则返回 undefined
  return indexes.map((index) => {
    // 检查索引是否为有效的整数
    if (Number.isInteger(index) && index >= 0 && index < arr.length) {
      return arr[index];
    }
    return undefined;
  });
}

// 测试函数
function testExtractValuesByIndexes() {
  console.log("测试用例 1: 基本数组和有效索引");
  console.log(extractValuesByIndexes(["a", "b", "c", "d"], [1, 3]));
  // 预期输出: ['b', 'd']

  console.log("\n测试用例 2: 包含无效索引");
  console.log(extractValuesByIndexes([1, 2, 3, 4, 5], [0, 2, 5, 7]));
  // 预期输出: [1, 3, undefined, undefined]

  console.log("\n测试用例 3: 空数组");
  console.log(extractValuesByIndexes([], [0, 1]));
  // 预期输出: [undefined, undefined]

  console.log("\n测试用例 4: 负数索引");
  console.log(extractValuesByIndexes(["a", "b", "c"], [-1, 0, 1]));
  // 预期输出: [undefined, 'a', 'b']

  console.log("\n测试用例 5: 非整数索引");
  console.log(extractValuesByIndexes([1, 2, 3], [0.5, 1, 2]));
  // 预期输出: [undefined, 2, 3]

  console.log("\n测试用例 6: 混合类型数组");
  console.log(extractValuesByIndexes([1, "a", true, null, {}], [0, 2, 4]));
  // 预期输出: [1, true, {}]

  console.log("\n测试用例 7: 无效输入 - 非数组");
  console.log(extractValuesByIndexes("not an array", [0, 1]));
  // 预期输出: Invalid input: both arguments must be arrays

  console.log("\n测试用例 8: 无效输入 - 索引不是数组");
  console.log(extractValuesByIndexes([1, 2, 3], "not an array"));
  // 预期输出: Invalid input: both arguments must be arrays
}

// 运行测试
testExtractValuesByIndexes();
