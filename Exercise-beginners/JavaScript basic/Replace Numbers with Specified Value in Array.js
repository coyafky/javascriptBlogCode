/**
 * 题目：将数组中的所有数字替换为指定的数字
 *
 * 编写一个 JavaScript 程序，将给定整数数组中的所有数字替换为指定的数字。
 *
 * @param {number[]} arr - 输入的整数数组
 * @param {number} replaceWith - 用于替换的数字
 * @returns {number[]|null} - 替换后的数组，如果输入无效则返回 null
 */
function replaceNumbersInArray(arr, replaceWith) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return null;
  }

  // 检查 replaceWith 是否为数字
  if (typeof replaceWith !== "number" || isNaN(replaceWith)) {
    return null;
  }

  // 检查所有元素是否为数字
  if (!arr.every((item) => typeof item === "number" && !isNaN(item))) {
    return null;
  }

  // 使用 map 方法创建一个新数组，将所有元素替换为 replaceWith
  return arr.map(() => replaceWith);
}

// 测试函数
function testReplaceNumbersInArray() {
  console.log(replaceNumbersInArray([1, 2, 3, 4, 5], 0)); // 预期输出: [0, 0, 0, 0, 0]
  console.log(replaceNumbersInArray([1, 2, 3, 4, 5], 10)); // 预期输出: [10, 10, 10, 10, 10]
  console.log(replaceNumbersInArray([-1, 0, 1], -5)); // 预期输出: [-5, -5, -5]
  console.log(replaceNumbersInArray([1.5, 2.3, 3.7], 4)); // 预期输出: [4, 4, 4]
  console.log(replaceNumbersInArray([], 1)); // 预期输出: []
  console.log(replaceNumbersInArray([1, 2, 3], 0.5)); // 预期输出: [0.5, 0.5, 0.5]
  console.log(replaceNumbersInArray([1, 2, "3", 4, 5], 0)); // 预期输出: null
  console.log(replaceNumbersInArray([1, 2, 3, 4, 5], "0")); // 预期输出: null
  console.log(replaceNumbersInArray([1, 2, 3, 4, 5], NaN)); // 预期输出: null
  console.log(replaceNumbersInArray(123, 0)); // 预期输出: null
  console.log(replaceNumbersInArray(null, 0)); // 预期输出: null
  console.log(replaceNumbersInArray([NaN, 1, 2, 3], 0)); // 预期输出: null
  console.log(replaceNumbersInArray([Infinity, 1, 2, 3], 0)); // 预期输出: [0, 0, 0, 0]
}

// 运行测试
testReplaceNumbersInArray();
