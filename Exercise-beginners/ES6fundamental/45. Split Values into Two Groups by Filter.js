/**
 * 根据过滤条件将值分成两组
 *
 * @param {Array} arr - 要分组的数组
 * @param {Array|Function} filter - 过滤条件数组或函数
 * @returns {Array} - 包含两个分组的数组
 */
function splitIntoGroups(arr, filter) {
  // 检查输入是否有效
  if (!Array.isArray(arr)) {
    return "Invalid input: arr must be an array";
  }

  // 如果 filter 是函数，则使用 map 方法创建过滤数组
  const filterArray = typeof filter === "function" ? arr.map(filter) : filter;

  // 检查 filter 数组长度是否与输入数组匹配
  if (filterArray.length !== arr.length) {
    return "Invalid filter: length must match the array";
  }

  // 使用 reduce 方法将元素分到两个组中
  return arr.reduce(
    (result, item, index) => {
      // 如果 filter 对应位置为真，加入第一组，否则加入第二组
      result[filterArray[index] ? 0 : 1].push(item);
      return result;
    },
    [[], []]
  );
}

// 测试函数
function testSplitIntoGroups() {
  console.log("测试用例 1: 使用布尔值数组作为过滤条件");
  console.log(splitIntoGroups([1, 2, 3, 4], [true, true, false, true]));
  // 预期输出: [[1, 2, 4], [3]]

  console.log("\n测试用例 2: 使用函数作为过滤条件（偶数分到第一组）");
  console.log(splitIntoGroups([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0));
  // 预期输出: [[2, 4, 6], [1, 3, 5]]

  console.log("\n测试用例 3: 字符串数组和长度过滤");
  console.log(
    splitIntoGroups(
      ["apple", "banana", "cherry", "date"],
      (str) => str.length > 5
    )
  );
  // 预期输出: [['banana', 'cherry'], ['apple', 'date']]

  console.log("\n测试用例 4: 空数组");
  console.log(splitIntoGroups([], []));
  // 预期输出: [[], []]

  console.log("\n测试用例 5: 所有元素都满足条件");
  console.log(splitIntoGroups([1, 2, 3], [true, true, true]));
  // 预期输出: [[1, 2, 3], []]

  console.log("\n测试用例 6: 所有元素都不满足条件");
  console.log(splitIntoGroups([1, 2, 3], [false, false, false]));
  // 预期输出: [[], [1, 2, 3]]

  console.log("\n测试用例 7: 过滤条件长度不匹配");
  console.log(splitIntoGroups([1, 2, 3], [true, false]));
  // 预期输出: "Invalid filter: length must match the array"

  console.log("\n测试用例 8: 无效输入");
  console.log(splitIntoGroups("not an array", [true, false]));
  // 预期输出: "Invalid input: arr must be an array"
}

// 运行测试
testSplitIntoGroups();
