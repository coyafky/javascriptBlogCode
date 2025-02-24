/**
 * 题目：将长度为3的数组元素向左旋转
 *
 * 编写一个 JavaScript 程序，将给定的长度为3的整数数组中的元素向左旋转。
 *
 * @param {number[]} arr - 要旋转的输入数组（应该包含3个整数）
 * @returns {number[]} - 旋转后的新数组，如果输入无效则返回 null
 */
function rotateElementsLeft(arr) {
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

  // 执行左旋转
  return [arr[1], arr[2], arr[0]];
}

// 测试函数
function testRotateElementsLeft() {
  console.log(rotateElementsLeft([1, 2, 3])); // 预期输出: [2, 3, 1]
  console.log(rotateElementsLeft([10, 20, 30])); // 预期输出: [20, 30, 10]
  console.log(rotateElementsLeft([0, -1, 5])); // 预期输出: [-1, 5, 0]
  console.log(rotateElementsLeft([100, 0, -100])); // 预期输出: [0, -100, 100]
  console.log(rotateElementsLeft([1, 2])); // 预期输出: null
  console.log(rotateElementsLeft([1, 2, 3, 4])); // 预期输出: null
  console.log(rotateElementsLeft([])); // 预期输出: null
  console.log(rotateElementsLeft([1.5, 2, 3])); // 预期输出: null
  console.log(rotateElementsLeft(["1", "2", "3"])); // 预期输出: null
  console.log(rotateElementsLeft([1, "two", 3])); // 预期输出: null
  console.log(rotateElementsLeft(123)); // 预期输出: null
  console.log(rotateElementsLeft(null)); // 预期输出: null
  console.log(rotateElementsLeft([NaN, 2, 3])); // 预期输出: null
  console.log(rotateElementsLeft([Infinity, -Infinity, 1])); // 预期输出: null
}

// 运行测试
testRotateElementsLeft();
