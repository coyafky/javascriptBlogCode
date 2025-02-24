/**
 * 题目77：检查数组是否包含1或3
 *
 * 编写一个 JavaScript 程序，测试长度为2的整数数组是否包含1或3。
 *
 * @param {number[]} arr - 要检查的输入数组（应该包含2个整数）
 * @returns {boolean} - 如果数组包含1或3则返回 true，否则返回 false；如果输入无效则返回 null
 */
function containsOneOrThree(arr) {
  // 检查输入是否为数组且长度为2
  if (!Array.isArray(arr) || arr.length !== 2) {
    return null;
  }

  // 检查所有元素是否为整数
  if (!arr.every((element) => Number.isInteger(element))) {
    return null;
  }

  // 检查数组是否包含1或3
  return arr.includes(1) || arr.includes(3);
}

/**
 * 题目78：检查数组是否不包含1或3
 *
 * 编写一个 JavaScript 程序，测试长度为2的整数数组是否不包含1或3。
 *
 * @param {number[]} arr - 要检查的输入数组（应该包含2个整数）
 * @returns {boolean} - 如果数组不包含1或3则返回 true，否则返回 false；如果输入无效则返回 null
 */
function doesNotContainOneOrThree(arr) {
  // 检查输入是否为数组且长度为2
  if (!Array.isArray(arr) || arr.length !== 2) {
    return null;
  }

  // 检查所有元素是否为整数
  if (!arr.every((element) => Number.isInteger(element))) {
    return null;
  }

  // 检查数组是否不包含1或3
  return !arr.includes(1) && !arr.includes(3);
}

// 测试函数
function testArrayChecks() {
  console.log("测试 containsOneOrThree 函数:");
  console.log(containsOneOrThree([1, 5])); // 预期输出: true
  console.log(containsOneOrThree([2, 3])); // 预期输出: true
  console.log(containsOneOrThree([7, 5])); // 预期输出: false
  console.log(containsOneOrThree([1, 3])); // 预期输出: true
  console.log(containsOneOrThree([1, 1])); // 预期输出: true
  console.log(containsOneOrThree([3, 3])); // 预期输出: true
  console.log(containsOneOrThree([1])); // 预期输出: null
  console.log(containsOneOrThree([1, 2, 3])); // 预期输出: null
  console.log(containsOneOrThree([1.5, 3])); // 预期输出: null
  console.log(containsOneOrThree(["1", "3"])); // 预期输出: null

  console.log("\n测试 doesNotContainOneOrThree 函数:");
  console.log(doesNotContainOneOrThree([2, 5])); // 预期输出: true
  console.log(doesNotContainOneOrThree([2, 3])); // 预期输出: false
  console.log(doesNotContainOneOrThree([1, 5])); // 预期输出: false
  console.log(doesNotContainOneOrThree([4, 6])); // 预期输出: true
  console.log(doesNotContainOneOrThree([1, 3])); // 预期输出: false
  console.log(doesNotContainOneOrThree([2, 2])); // 预期输出: true
  console.log(doesNotContainOneOrThree([1])); // 预期输出: null
  console.log(doesNotContainOneOrThree([1, 2, 3])); // 预期输出: null
  console.log(doesNotContainOneOrThree([1.5, 2])); // 预期输出: null
  console.log(doesNotContainOneOrThree(["2", "4"])); // 预期输出: null
}

// 运行测试
testArrayChecks();
