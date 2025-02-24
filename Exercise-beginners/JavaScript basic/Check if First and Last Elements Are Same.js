/**
 * 题目：检查数组的首尾元素是否相同
 *
 * 编写一个 JavaScript 程序，检查给定整数数组的第一个和最后一个元素是否相同。
 * 数组长度至少为1。
 *
 * @param {number[]} arr - 要检查的输入数组（至少包含1个整数）
 * @returns {boolean} - 如果首尾元素相同返回 true，否则返回 false；如果输入无效则返回 null
 */
function checkFirstLastSame(arr) {
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

  // 如果数组长度为1，首尾元素必然相同
  if (arr.length === 1) {
    return true;
  }

  // 比较第一个和最后一个元素
  return arr[0] === arr[arr.length - 1];
}

// 测试函数
function testCheckFirstLastSame() {
  console.log(checkFirstLastSame([1, 2, 3, 1])); // 预期输出: true
  console.log(checkFirstLastSame([1, 2, 3, 4])); // 预期输出: false
  console.log(checkFirstLastSame([1])); // 预期输出: true
  console.log(checkFirstLastSame([1, 1])); // 预期输出: true
  console.log(checkFirstLastSame([1, 2, 1])); // 预期输出: true
  console.log(checkFirstLastSame([0, 1, 0])); // 预期输出: true
  console.log(checkFirstLastSame([-1, 0, 1, -1])); // 预期输出: true
  console.log(checkFirstLastSame([10, 20, 30, 40, 10])); // 预期输出: true
  console.log(checkFirstLastSame([5, 5, 5, 5])); // 预期输出: true
  console.log(checkFirstLastSame([1, 2, 3, 4, 5])); // 预期输出: false
  console.log(checkFirstLastSame([])); // 预期输出: null
  console.log(checkFirstLastSame([1.5, 2, 3, 1.5])); // 预期输出: null
  console.log(checkFirstLastSame(["1", "2", "3", "1"])); // 预期输出: null
  console.log(checkFirstLastSame([1, "two", 3, 1])); // 预期输出: null
  console.log(checkFirstLastSame(123)); // 预期输出: null
  console.log(checkFirstLastSame(null)); // 预期输出: null
}

// 运行测试
testCheckFirstLastSame();
