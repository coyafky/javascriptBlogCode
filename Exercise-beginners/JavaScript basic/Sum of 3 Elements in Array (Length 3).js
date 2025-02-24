/**
 * 题目：计算长度为3的数组中三个元素的和
 *
 * 编写一个 JavaScript 程序，计算给定的长度为3的整数数组中三个元素的和。
 *
 * @param {number[]} arr - 要计算和的输入数组（应该包含3个整数）
 * @returns {number} - 数组元素的和，如果输入无效则返回 null
 */
function sumOfThreeElements(arr) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return null;
  }

  // 检查数组长度是否为3
  if (arr.length !== 3) {
    return null;
  }

  // 检查所有元素是否为数字
  if (!arr.every((element) => typeof element === "number" && !isNaN(element))) {
    return null;
  }

  // 计算并返回三个元素的和
  return arr[0] + arr[1] + arr[2];
}

// 测试函数
function testSumOfThreeElements() {
  console.log(sumOfThreeElements([1, 2, 3])); // 预期输出: 6
  console.log(sumOfThreeElements([10, -5, 7])); // 预期输出: 12
  console.log(sumOfThreeElements([0, 0, 0])); // 预期输出: 0
  console.log(sumOfThreeElements([-1, -2, -3])); // 预期输出: -6
  console.log(sumOfThreeElements([100, 200, 300])); // 预期输出: 600
  console.log(sumOfThreeElements([1.5, 2.5, 3.5])); // 预期输出: 7.5
  console.log(sumOfThreeElements([1, 2])); // 预期输出: null
  console.log(sumOfThreeElements([1, 2, 3, 4])); // 预期输出: null
  console.log(sumOfThreeElements([])); // 预期输出: null
  console.log(sumOfThreeElements(["1", "2", "3"])); // 预期输出: null
  console.log(sumOfThreeElements([1, "two", 3])); // 预期输出: null
  console.log(sumOfThreeElements(123)); // 预期输出: null
  console.log(sumOfThreeElements(null)); // 预期输出: null
  console.log(sumOfThreeElements([NaN, 2, 3])); // 预期输出: null
  console.log(sumOfThreeElements([Infinity, -Infinity, 1])); // 预期输出: NaN
}

// 运行测试
testSumOfThreeElements();
