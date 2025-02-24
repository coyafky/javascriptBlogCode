/**
 * 题目：找出数组中第 k 大的元素
 *
 * 编写一个 JavaScript 程序，找出给定整数数组中第 k 大的元素。
 *
 * @param {number[]} arr - 输入的整数数组
 * @param {number} k - 要找的第 k 大元素的 k 值
 * @returns {number|null} - 第 k 大的元素，如果输入无效则返回 null
 */
function findKthGreatest(arr, k) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return null;
  }

  // 检查数组是否为空
  if (arr.length === 0) {
    return null;
  }

  // 检查 k 是否为正整数且不大于数组长度
  if (!Number.isInteger(k) || k <= 0 || k > arr.length) {
    return null;
  }

  // 检查所有元素是否为数字
  if (!arr.every((num) => typeof num === "number" && !isNaN(num))) {
    return null;
  }

  // 对数组进行降序排序
  const sortedArr = [...arr].sort((a, b) => b - a);

  // 返回第 k 大的元素
  return sortedArr[k - 1];
}

// 测试函数
function testFindKthGreatest() {
  console.log(findKthGreatest([10, 5, 8, 12, 3, 7], 3)); // 预期输出: 8
  console.log(findKthGreatest([1, 2, 3, 4, 5], 1)); // 预期输出: 5
  console.log(findKthGreatest([5, 5, 5, 5, 5], 2)); // 预期输出: 5
  console.log(findKthGreatest([3], 1)); // 预期输出: 3
  console.log(findKthGreatest([1, 2, 3, 4, 5], 5)); // 预期输出: 1
  console.log(findKthGreatest([10, 10, 9, 9, 8, 8, 7], 3)); // 预期输出: 9
  console.log(findKthGreatest([-1, -5, 0, 10, -3], 2)); // 预期输出: 0
  console.log(findKthGreatest([1, 2, 3, 4, 5], 0)); // 预期输出: null
  console.log(findKthGreatest([1, 2, 3, 4, 5], 6)); // 预期输出: null
  console.log(findKthGreatest([], 1)); // 预期输出: null
  console.log(findKthGreatest([1, 2, "3", 4, 5], 3)); // 预期输出: null
  console.log(findKthGreatest([1, 2, NaN, 4, 5], 3)); // 预期输出: null
  console.log(findKthGreatest(123, 1)); // 预期输出: null
  console.log(findKthGreatest([1, 2, 3], 1.5)); // 预期输出: null
}

// 运行测试
testFindKthGreatest();
