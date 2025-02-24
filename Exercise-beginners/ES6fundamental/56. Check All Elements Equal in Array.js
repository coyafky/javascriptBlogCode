/**
 * 检查数组中的所有元素是否相等
 * @param {Array} arr - 要检查的数组
 * @returns {boolean} - 如果所有元素相等返回true，否则返回false
 */
function areAllElementsEqual(arr) {
  // 如果数组为空或只有一个元素，认为所有元素相等
  if (arr.length <= 1) {
    return true;
  }

  // 获取第一个元素作为比较基准
  const firstElement = arr[0];

  // 使用every方法检查每个元素是否与第一个元素相等
  return arr.every((element) => element === firstElement);
}

// 测试函数
function testAreAllElementsEqual() {
  console.log("测试用例 1: 所有元素相等的数组");
  console.log(areAllElementsEqual([1, 1, 1, 1])); // 预期输出: true

  console.log("\n测试用例 2: 元素不全相等的数组");
  console.log(areAllElementsEqual([1, 2, 1, 1])); // 预期输出: false

  console.log("\n测试用例 3: 空数组");
  console.log(areAllElementsEqual([])); // 预期输出: true

  console.log("\n测试用例 4: 只有一个元素的数组");
  console.log(areAllElementsEqual([5])); // 预期输出: true

  console.log("\n测试用例 5: 包含不同类型元素的数组");
  console.log(areAllElementsEqual([1, "1", true])); // 预期输出: false

  console.log("\n测试用例 6: 包含对象的数组");
  console.log(areAllElementsEqual([{}, {}, {}])); // 预期输出: false（注意：对象比较的是引用）

  console.log("\n测试用例 7: 包含NaN的数组");
  console.log(areAllElementsEqual([NaN, NaN, NaN])); // 预期输出: false（注意：NaN !== NaN）
}

// 运行测试
testAreAllElementsEqual();
