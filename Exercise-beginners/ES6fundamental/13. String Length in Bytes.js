/**
 * 计算字符串的字节长度
 *
 * @param {string} str - 输入的字符串
 * @returns {number} - 字符串的字节长度
 */
function getStringLengthInBytes(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return "Invalid input: not a string";
  }

  // 使用 TextEncoder 将字符串转换为 UTF-8 编码的字节数组
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);

  // 返回字节数组的长度
  return bytes.length;
}

// 测试函数
function testGetStringLengthInBytes() {
  console.log("测试用例 1: 纯ASCII字符串");
  console.log(getStringLengthInBytes("Hello World"));
  // 预期输出: 11

  console.log("\n测试用例 2: 包含中文字符");
  console.log(getStringLengthInBytes("你好，世界！"));
  // 预期输出: 16 (每个中文字符占3字节，标点符号占1字节)

  console.log("\n测试用例 3: 混合ASCII和非ASCII字符");
  console.log(getStringLengthInBytes("Hello, 世界！123"));
  // 预期输出: 18

  console.log("\n测试用例 4: 包含emoji");
  console.log(getStringLengthInBytes("😊👍"));
  // 预期输出: 8 (每个emoji通常占4字节)

  console.log("\n测试用例 5: 空字符串");
  console.log(getStringLengthInBytes(""));
  // 预期输出: 0

  console.log("\n测试用例 6: 包含特殊字符");
  console.log(getStringLengthInBytes("©®™"));
  // 预期输出: 6 (每个特殊字符占2字节)

  console.log("\n测试用例 7: 无效输入");
  console.log(getStringLengthInBytes(123));
  // 预期输出: "Invalid input: not a string"
}

// 运行测试
testGetStringLengthInBytes();
