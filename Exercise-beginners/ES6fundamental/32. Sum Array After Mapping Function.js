/**
 * 对数组应用映射函数后计算总和
 * 
 * @param {Array} arr - 输入数组
 * @param {Function} fn - 映射函数
 * @returns {number} - 映射后数组的总和
 */
function sumAfterMapping(arr, fn) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return "Invalid input: first argument must be an array";
  }

  // 检查第二个参数是否为函数
  if (typeof fn !== 'function') {
    return "Invalid input: second argument must be a function";
  }

  // 使用 map 方法应用映射函数，然后用 reduce 方法计算总和
  return arr.map(fn).reduce((sum, current) => sum + current, 0);
}

// 测试函数
function testSumAfterMapping() {
  console.log("测试用例 1: 数字数组，平方函数");
  console.log(sumAfterMapping([1, 2, 3, 4], x => x * x));
  // 预期输出: 30 (1 + 4 + 9 + 16)

  console.log("\n测试用例 2: 数字数组，加倍函数");
  console.log(sumAfterMapping([1, 2, 3, 4, 5], x => x * 2));
  // 预期输出: 30 (2 + 4 + 6 + 8 + 10)

  console.log("\n测试用例 3: 字符串数组，字符串长度函数");
  console.log(sumAfterMapping(['apple', 'banana', 'cherry'], s => s.length));
  // 预期输出: 17 (5 + 6 + 6)

  console.log("\n测试用例 4: 空数组");
  console.log(sumAfterMapping([], x => x * 2));
  // 预期输出: 0

  console.log("\n测试用例 5: 包含负数的数组");
  console.log(sumAfterMapping([-1, 0, 1, 2], x => x * 3));
  // 预期输出: 6 (-3 + 0 + 3 + 6)

  console.log("\n测试用例 6: 对象数组，提取特定属性");
  console.log(sumAfterMapping([{value: 1}, {value: 2}, {value: 3}], obj => obj.value));
  // 预期输出: 6 (1 + 2 + 3)

  console.log("\n测试用例 7: 无效输入 - 非数组");
  console.log(sumAfterMapping("not an array", x => x));
  // 预期输出: "Invalid input: first argument must be an array"

  console.log("\n测试用例 8: 无效输入 - 非函数");
  console.log(sumAfterMapping([1, 2, 3], "not a function"));
  // 预期输出: "Invalid input: second argument must be a function"

  console.log("\n测试用例 9: 复杂映射函数");
  console.log(sumAfterMapping([1, 2, 3, 4, 5], x => x % 2 === 0 ? x * 2 : x));
  // 预期输出: 19 (1 + 4 + 3 + 8 + 5)
}

// 运行测试
testSumAfterMapping();
