/**
 * 题目：找出数组中所有数对的最大差值
 *
 * 编写一个 JavaScript 程序，找出给定整数数组中所有可能的数对之间的最大差值。
 *
 * @param {number[]} arr - 输入的整数数组
 * @returns {number|null} - 所有数对之间的最大差值，如果输入无效则返回 null
 */
function findMaxDifferenceAllPairs(arr) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return null;
  }

  // 检查数组长度是否至少为2
  if (arr.length < 2) {
    return null;
  }

  // 检查所有元素是否为数字
  if (!arr.every((num) => typeof num === "number" && !isNaN(num))) {
    return null;
  }

  // 找出数组中的最大值和最小值
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // 返回最大值和最小值的差
  return max - min;
}

// 测试函数
function testFindMaxDifferenceAllPairs() {
  console.log(findMaxDifferenceAllPairs([1, 5, 3, 19, 18, 25])); // 预期输出: 24
  console.log(findMaxDifferenceAllPairs([1, 2, 3, 4, 5])); // 预期输出: 4
  console.log(findMaxDifferenceAllPairs([5, 5, 5, 5])); // 预期输出: 0
  console.log(findMaxDifferenceAllPairs([1, 10])); // 预期输出: 9
  console.log(findMaxDifferenceAllPairs([-3, 0, 5, -1, 10])); // 预期输出: 13
  console.log(findMaxDifferenceAllPairs([100, 0, 50, 75])); // 预期输出: 100
  console.log(findMaxDifferenceAllPairs([1])); // 预期输出: null
  console.log(findMaxDifferenceAllPairs([])); // 预期输出: null
  console.log(findMaxDifferenceAllPairs([1, 2, "3", 4, 5])); // 预期输出: null
  console.log(findMaxDifferenceAllPairs([1.5, 2, 3, 4, 5])); // 预期输出: 3.5
  console.log(findMaxDifferenceAllPairs(123)); // 预期输出: null
  console.log(findMaxDifferenceAllPairs(null)); // 预期输出: null
  console.log(findMaxDifferenceAllPairs([NaN, 1, 2, 3])); // 预期输出: null
  console.log(findMaxDifferenceAllPairs([Infinity, 1, 2, 3])); // 预期输出: Infinity
}

// 运行测试
testFindMaxDifferenceAllPairs();
