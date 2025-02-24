/**
 * 查找数组中除第一个元素外的所有元素
 * 如果数组长度为1，则返回整个数组
 *
 * @param {Array} arr - 输入数组
 * @returns {Array} - 结果数组
 */
function allExceptFirst(arr) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return "Invalid input: argument must be an array";
  }

  // 如果数组长度为0或1，直接返回原数组
  if (arr.length <= 1) {
    return arr;
  }

  // 使用 slice 方法返回从第二个元素开始的所有元素
  return arr.slice(1);
}

// 测试函数
function testAllExceptFirst() {
  console.log("测试用例 1: 普通数组");
  console.log(allExceptFirst([1, 2, 3, 4, 5]));
  // 预期输出: [2, 3, 4, 5]

  console.log("\n测试用例 2: 只有两个元素的数组");
  console.log(allExceptFirst(["a", "b"]));
  // 预期输出: ['b']

  console.log("\n测试用例 3: 只有一个元素的数组");
  console.log(allExceptFirst([42]));
  // 预期输出: [42]

  console.log("\n测试用例 4: 空数组");
  console.log(allExceptFirst([]));
  // 预期输出: []

  console.log("\n测试用例 5: 包含不同类型元素的数组");
  console.log(allExceptFirst([1, "two", true, null, { key: "value" }]));
  // 预期输出: ['two', true, null, { key: 'value' }]

  console.log("\n测试用例 6: 包含嵌套数组的数组");
  console.log(allExceptFirst([["nested"], 1, 2, 3]));
  // 预期输出: [1, 2, 3]

  console.log("\n测试用例 7: 无效输入 - 非数组");
  console.log(allExceptFirst("not an array"));
  // 预期输出: "Invalid input: argument must be an array"

  console.log("\n测试用例 8: 包含undefined和null的数组");
  console.log(allExceptFirst([undefined, null, 1, 2]));
  // 预期输出: [null, 1, 2]
}

// 运行测试
testAllExceptFirst();
