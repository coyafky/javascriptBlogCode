/**
 * 将指定的数字转换为数字数组
 *
 * @param {number} num - 要转换的数字
 * @returns {number[]} - 转换后的数字数组
 */
function numberToDigitArray(num) {
  // 检查输入是否为有效数字
  if (typeof num !== "number" || isNaN(num)) {
    return "Invalid input: not a number";
  }

  // 将数字转换为字符串
  const numStr = Math.abs(num).toString();

  // 使用 split 方法将字符串分割为数组，然后使用 map 将每个字符转换回数字
  return numStr.split("").map((digit) => parseInt(digit, 10));
}

// 测试函数
function testNumberToDigitArray() {
  console.log("测试用例 1: 正整数");
  console.log(numberToDigitArray(123)); // 预期输出: [1, 2, 3]

  console.log("\n测试用例 2: 负整数");
  console.log(numberToDigitArray(-456)); // 预期输出: [4, 5, 6]

  console.log("\n测试用例 3: 零");
  console.log(numberToDigitArray(0)); // 预期输出: [0]

  console.log("\n测试用例 4: 带小数点的数字");
  console.log(numberToDigitArray(78.9)); // 预期输出: [7, 8, 9]

  console.log("\n测试用例 5: 大数字");
  console.log(numberToDigitArray(1000000)); // 预期输出: [1, 0, 0, 0, 0, 0, 0]

  console.log("\n测试用例 6: 科学计数法");
  console.log(numberToDigitArray(1e5)); // 预期输出: [1, 0, 0, 0, 0, 0]

  console.log("\n测试用例 7: 无效输入 - 字符串");
  console.log(numberToDigitArray("123")); // 预期输出: Invalid input: not a number

  console.log("\n测试用例 8: 无效输入 - NaN");
  console.log(numberToDigitArray(NaN)); // 预期输出: Invalid input: not a number

  console.log("\n测试用例 9: 无效输入 - undefined");
  console.log(numberToDigitArray(undefined)); // 预期输出: Invalid input: not a number
}

// 运行测试
testNumberToDigitArray();
