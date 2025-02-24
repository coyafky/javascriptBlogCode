/**
 * 题目：反转长度为3的数组元素
 *
 * 编写一个 JavaScript 程序，反转给定的长度为3的整数数组中的元素。
 *
 * @param {number[]} arr - 要反转的输入数组（应该包含3个整数）
 * @returns {number[]} - 反转后的新数组，如果输入无效则返回 null
 */
function reverseArrayOfThree(arr) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return null;
  }

  // 检查数组长度是否为3
  if (arr.length !== 3) {
    return null;
  }

  // 检查所有元素是否为整数
  if (!arr.every((element) => Number.isInteger(element))) {
    return null;
  }

  // 反转数组
  return [arr[2], arr[1], arr[0]];
}

// 测试函数
function testReverseArrayOfThree() {
  console.log(reverseArrayOfThree([1, 2, 3])); // 预期输出: [3, 2, 1]
  console.log(reverseArrayOfThree([10, 20, 30])); // 预期输出: [30, 20, 10]
  console.log(reverseArrayOfThree([0, -1, 5])); // 预期输出: [5, -1, 0]
  console.log(reverseArrayOfThree([100, 0, -100])); // 预期输出: [-100, 0, 100]
  console.log(reverseArrayOfThree([-1, -2, -3])); // 预期输出: [-3, -2, -1]
  console.log(reverseArrayOfThree([1, 1, 1])); // 预期输出: [1, 1, 1]
  console.log(reverseArrayOfThree([1, 2])); // 预期输出: null
  console.log(reverseArrayOfThree([1, 2, 3, 4])); // 预期输出: null
  console.log(reverseArrayOfThree([])); // 预期输出: null
  console.log(reverseArrayOfThree([1.5, 2, 3])); // 预期输出: null
  console.log(reverseArrayOfThree(["1", "2", "3"])); // 预期输出: null
  console.log(reverseArrayOfThree([1, "two", 3])); // 预期输出: null
  console.log(reverseArrayOfThree(123)); // 预期输出: null
  console.log(reverseArrayOfThree(null)); // 预期输出: null
  console.log(reverseArrayOfThree([NaN, 2, 3])); // 预期输出: null
  console.log(reverseArrayOfThree([Infinity, -Infinity, 1])); // 预期输出: null
}

// 运行测试
testReverseArrayOfThree();
