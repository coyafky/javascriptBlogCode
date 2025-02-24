/**
 * 题目：将数组分成两部分并计算和
 *
 * 编写一个 JavaScript 程序，将给定的正整数数组分成两部分。
 * 第一个元素属于第一部分，第二个元素属于第二部分，
 * 第三个元素属于第一部分，以此类推。
 * 然后计算两部分的和，并将结果存储在一个长度为2的数组中。
 *
 * @param {number[]} arr - 要处理的正整数数组
 * @returns {number[]} - 包含两部分和的数组，如果输入无效则返回 null
 */
function splitArrayAndSum(arr) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return null;
  }

  // 检查数组是否为空
  if (arr.length === 0) {
    return null;
  }

  // 检查所有元素是否为正整数
  if (!arr.every((num) => Number.isInteger(num) && num > 0)) {
    return null;
  }

  // 初始化两部分的和
  let sum1 = 0;
  let sum2 = 0;

  // 遍历数组，将元素分配到两部分并计算和
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      // 偶数索引（包括0）属于第一部分
      sum1 += arr[i];
    } else {
      // 奇数索引属于第二部分
      sum2 += arr[i];
    }
  }

  // 返回包含两部分和的数组
  return [sum1, sum2];
}

// 测试函数
function testSplitArrayAndSum() {
  console.log(splitArrayAndSum([1, 2, 3, 4, 5, 6])); // 预期输出: [9, 12]
  console.log(splitArrayAndSum([1, 2, 3, 4, 5])); // 预期输出: [9, 6]
  console.log(splitArrayAndSum([1, 2])); // 预期输出: [1, 2]
  console.log(splitArrayAndSum([1])); // 预期输出: [1, 0]
  console.log(splitArrayAndSum([10, 20, 30, 40, 50])); // 预期输出: [90, 60]
  console.log(splitArrayAndSum([1, 1, 1, 1, 1, 1])); // 预期输出: [3, 3]
  console.log(splitArrayAndSum([])); // 预期输出: null
  console.log(splitArrayAndSum([1, 2, 3, -4, 5])); // 预期输出: null
  console.log(splitArrayAndSum([1.5, 2, 3, 4])); // 预期输出: null
  console.log(splitArrayAndSum(["1", "2", "3"])); // 预期输出: null
  console.log(splitArrayAndSum(123)); // 预期输出: null
  console.log(splitArrayAndSum(null)); // 预期输出: null
  console.log(splitArrayAndSum(undefined)); // 预期输出: null
}

// 运行测试
testSplitArrayAndSum();
