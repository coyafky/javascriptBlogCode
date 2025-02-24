/**
 * 题目：计算数组中相邻数字的绝对差之和
 *
 * 编写一个 JavaScript 程序，计算给定整数数组中相邻数字的绝对差之和。
 *
 * @param {number[]} arr - 输入的整数数组
 * @returns {number|null} - 相邻数字的绝对差之和，如果输入无效则返回 null
 */
function sumOfAbsoluteDifferences(arr) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return null;
  }

  // 检查数组长度是否至少为2
  if (arr.length < 2) {
    return null;
  }

  // 检查所有元素是否为整数
  if (!arr.every(Number.isInteger)) {
    return null;
  }

  let sum = 0;

  // 遍历数组，计算相邻数字的绝对差，并累加
  for (let i = 1; i < arr.length; i++) {
    sum += Math.abs(arr[i] - arr[i - 1]);
  }

  return sum;
}

// 测试函数
function testSumOfAbsoluteDifferences() {
  console.log(sumOfAbsoluteDifferences([1, 2, 3, 4, 5])); // 预期输出: 4
  console.log(sumOfAbsoluteDifferences([5, 3, 8, 1, 4])); // 预期输出: 14
  console.log(sumOfAbsoluteDifferences([1, 1, 1, 1])); // 预期输出: 0
  console.log(sumOfAbsoluteDifferences([10, -5, 3, 7, -2])); // 预期输出: 37
  console.log(sumOfAbsoluteDifferences([2, 2])); // 预期输出: 0
  console.log(sumOfAbsoluteDifferences([-1, -3, 0, 5, -2])); // 预期输出: 13
  console.log(sumOfAbsoluteDifferences([100, 0, 50, 75])); // 预期输出: 175
  console.log(sumOfAbsoluteDifferences([1])); // 预期输出: null
  console.log(sumOfAbsoluteDifferences([])); // 预期输出: null
  console.log(sumOfAbsoluteDifferences([1, 2, "3", 4, 5])); // 预期输出: null
  console.log(sumOfAbsoluteDifferences([1.5, 2, 3, 4, 5])); // 预期输出: null
  console.log(sumOfAbsoluteDifferences(123)); // 预期输出: null
  console.log(sumOfAbsoluteDifferences(null)); // 预期输出: null
  console.log(sumOfAbsoluteDifferences([NaN, 1, 2, 3])); // 预期输出: null
  console.log(sumOfAbsoluteDifferences([Infinity, 1, 2, 3])); // 预期输出: null
}

// 运行测试
testSumOfAbsoluteDifferences();
