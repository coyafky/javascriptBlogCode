/**
 * 将值转换为安全整数
 *
 * @param {*} value - 要转换的值
 * @returns {number} - 转换后的安全整数
 */
function toSafeInteger(value) {
  // 将值转换为数字
  const number = Number(value);

  // 检查是否为有效数字
  if (isNaN(number)) {
    return 0; // 如果不是有效数字，返回0
  }

  // 使用 Math.trunc 去除小数部分
  const integer = Math.trunc(number);

  // 使用 Math.max 和 Math.min 确保结果在安全整数范围内
  return Math.max(
    Math.min(integer, Number.MAX_SAFE_INTEGER),
    Number.MIN_SAFE_INTEGER
  );
}

// 测试函数
function testToSafeInteger() {
  console.log("测试用例 1: 正整数");
  console.log(toSafeInteger(123)); // 预期输出: 123

  console.log("\n测试用例 2: 负整数");
  console.log(toSafeInteger(-456)); // 预期输出: -456

  console.log("\n测试用例 3: 浮点数");
  console.log(toSafeInteger(3.14)); // 预期输出: 3

  console.log("\n测试用例 4: 大于最大安全整数");
  console.log(toSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // 预期输出: 9007199254740991 (最大安全整数)

  console.log("\n测试用例 5: 小于最小安全整数");
  console.log(toSafeInteger(Number.MIN_SAFE_INTEGER - 1)); // 预期输出: -9007199254740991 (最小安全整数)

  console.log("\n测试用例 6: 字符串数字");
  console.log(toSafeInteger("789")); // 预期输出: 789

  console.log("\n测试用例 7: 非数字字符串");
  console.log(toSafeInteger("abc")); // 预期输出: 0

  console.log("\n测试用例 8: 布尔值");
  console.log(toSafeInteger(true)); // 预期输出: 1
  console.log(toSafeInteger(false)); // 预期输出: 0

  console.log("\n测试用例 9: null");
  console.log(toSafeInteger(null)); // 预期输出: 0

  console.log("\n测试用例 10: undefined");
  console.log(toSafeInteger(undefined)); // 预期输出: 0

  console.log("\n测试用例 11: 对象");
  console.log(toSafeInteger({})); // 预期输出: 0

  console.log("\n测试用例 12: 数组");
  console.log(toSafeInteger([1, 2, 3])); // 预期输出: 0
}

// 运行测试
testToSafeInteger();
