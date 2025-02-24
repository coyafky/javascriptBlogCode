/**
 * 题目：创建包含两个数组中间元素的新数组
 *
 * 编写一个 JavaScript 程序，创建一个新数组，该数组包含两个长度为3的整数数组的中间元素。
 *
 * @param {number[]} arr1 - 第一个输入数组（应该包含3个整数）
 * @param {number[]} arr2 - 第二个输入数组（应该包含3个整数）
 * @returns {number[]} - 包含两个输入数组中间元素的新数组，如果输入无效则返回 null
 */
function createMiddleArray(arr1, arr2) {
  // 检查两个输入是否都为数组
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return null;
  }

  // 检查两个数组的长度是否都为3
  if (arr1.length !== 3 || arr2.length !== 3) {
    return null;
  }

  // 检查所有元素是否为整数
  if (
    !arr1.every((element) => Number.isInteger(element)) ||
    !arr2.every((element) => Number.isInteger(element))
  ) {
    return null;
  }

  // 创建并返回包含两个数组中间元素的新数组
  return [arr1[1], arr2[1]];
}

// 测试函数
function testCreateMiddleArray() {
  console.log(createMiddleArray([1, 2, 3], [4, 5, 6])); // 预期输出: [2, 5]
  console.log(createMiddleArray([10, 20, 30], [40, 50, 60])); // 预期输出: [20, 50]
  console.log(createMiddleArray([0, -1, 5], [7, 8, 9])); // 预期输出: [-1, 8]
  console.log(createMiddleArray([100, 0, -100], [3, 2, 1])); // 预期输出: [0, 2]
  console.log(createMiddleArray([-1, -2, -3], [-4, -5, -6])); // 预期输出: [-2, -5]
  console.log(createMiddleArray([1, 1, 1], [2, 2, 2])); // 预期输出: [1, 2]
  console.log(createMiddleArray([1, 2], [3, 4, 5])); // 预期输出: null
  console.log(createMiddleArray([1, 2, 3], [4, 5])); // 预期输出: null
  console.log(createMiddleArray([], [1, 2, 3])); // 预期输出: null
  console.log(createMiddleArray([1.5, 2, 3], [4, 5, 6])); // 预期输出: null
  console.log(createMiddleArray(["1", "2", "3"], [4, 5, 6])); // 预期输出: null
  console.log(createMiddleArray([1, "two", 3], [4, 5, 6])); // 预期输出: null
  console.log(createMiddleArray(123, [1, 2, 3])); // 预期输出: null
  console.log(createMiddleArray([1, 2, 3], null)); // 预期输出: null
  console.log(createMiddleArray([NaN, 2, 3], [4, 5, 6])); // 预期输出: null
  console.log(createMiddleArray([1, Infinity, 3], [4, 5, 6])); // 预期输出: null
}

// 运行测试
testCreateMiddleArray();
