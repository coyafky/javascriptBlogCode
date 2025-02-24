/**
 * 题目：交换数组的第一个和最后一个元素
 *
 * 编写一个 JavaScript 程序，交换给定整数数组的第一个和最后一个元素。
 * 数组长度应至少为1。
 *
 * @param {number[]} arr - 要处理的输入数组（至少包含1个整数）
 * @returns {number[]} - 交换后的新数组，如果输入无效则返回 null
 */
function swapFirstLastElements(arr) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return null;
  }

  // 检查数组长度是否至少为1
  if (arr.length < 1) {
    return null;
  }

  // 检查所有元素是否为整数
  if (!arr.every((element) => Number.isInteger(element))) {
    return null;
  }

  // 如果数组长度为1，直接返回原数组的副本
  if (arr.length === 1) {
    return [...arr];
  }

  // 创建数组的副本
  const newArr = [...arr];

  // 交换第一个和最后一个元素
  [newArr[0], newArr[newArr.length - 1]] = [
    newArr[newArr.length - 1],
    newArr[0],
  ];

  return newArr;
}

// 测试函数
function testSwapFirstLastElements() {
  console.log(swapFirstLastElements([1, 2, 3, 4])); // 预期输出: [4, 2, 3, 1]
  console.log(swapFirstLastElements([10, 20, 30, 40, 50])); // 预期输出: [50, 20, 30, 40, 10]
  console.log(swapFirstLastElements([1])); // 预期输出: [1]
  console.log(swapFirstLastElements([1, 2])); // 预期输出: [2, 1]
  console.log(swapFirstLastElements([0, -1, 5, 100])); // 预期输出: [100, -1, 5, 0]
  console.log(swapFirstLastElements([-1, -2, -3])); // 预期输出: [-3, -2, -1]
  console.log(swapFirstLastElements([1, 1, 1, 1])); // 预期输出: [1, 1, 1, 1]
  console.log(swapFirstLastElements([])); // 预期输出: null
  console.log(swapFirstLastElements([1.5, 2, 3])); // 预期输出: null
  console.log(swapFirstLastElements(["1", "2", "3"])); // 预期输出: null
  console.log(swapFirstLastElements([1, "two", 3])); // 预期输出: null
  console.log(swapFirstLastElements(123)); // 预期输出: null
  console.log(swapFirstLastElements(null)); // 预期输出: null
  console.log(swapFirstLastElements([NaN, 2, 3])); // 预期输出: null
  console.log(swapFirstLastElements([Infinity, 2, 3])); // 预期输出: null
}

// 运行测试
testSwapFirstLastElements();
