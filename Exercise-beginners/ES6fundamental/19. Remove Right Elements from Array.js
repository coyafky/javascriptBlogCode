/**
 * 从数组右侧移除指定数量的元素
 *
 * @param {Array} arr - 原始数组
 * @param {number} n - 要移除的元素数量（默认为1）
 * @returns {Array} - 移除元素后的新数组
 */
function removeRightElements(arr, n = 1) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return "Invalid input: first argument must be an array";
  }

  // 检查 n 是否为非负整数
  if (!Number.isInteger(n) || n < 0) {
    return "Invalid input: second argument must be a non-negative integer";
  }

  // 使用 slice 方法从数组右侧移除元素
  return arr.slice(0, -n || arr.length);
}

// 测试函数
function testRemoveRightElements() {
  console.log("测试用例 1: 移除默认数量的元素（1个）");
  console.log(removeRightElements([1, 2, 3, 4, 5]));
  // 预期输出: [1, 2, 3, 4]

  console.log("\n测试用例 2: 移除指定数量的元素");
  console.log(removeRightElements([1, 2, 3, 4, 5], 3));
  // 预期输出: [1, 2]

  console.log("\n测试用例 3: 移除的数量超过数组长度");
  console.log(removeRightElements([1, 2, 3], 5));
  // 预期输出: []

  console.log("\n测试用例 4: 移除0个元素");
  console.log(removeRightElements([1, 2, 3], 0));
  // 预期输出: [1, 2, 3]

  console.log("\n测试用例 5: 空数组");
  console.log(removeRightElements([], 2));
  // 预期输出: []

  console.log("\n测试用例 6: 包含不同类型元素的数组");
  console.log(removeRightElements([1, "a", true, null, {}, []], 2));
  // 预期输出: [1, 'a', true, null]

  console.log("\n测试用例 7: 无效输入 - 第一个参数不是数组");
  console.log(removeRightElements("not an array", 2));
  // 预期输出: "Invalid input: first argument must be an array"

  console.log("\n测试用例 8: 无效输入 - 第二个参数不是非负整数");
  console.log(removeRightElements([1, 2, 3], -1));
  // 预期输出: "Invalid input: second argument must be a non-negative integer"

  console.log("\n测试用例 9: 无效输入 - 第二个参数是小数");
  console.log(removeRightElements([1, 2, 3], 1.5));
  // 预期输出: "Invalid input: second argument must be a non-negative integer"
}

// 运行测试
testRemoveRightElements();
