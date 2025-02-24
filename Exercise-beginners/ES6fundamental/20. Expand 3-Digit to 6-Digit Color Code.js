/**
 * 将 3 位颜色代码扩展为 6 位颜色代码
 *
 * @param {string} color - 3 位颜色代码
 * @returns {string} - 扩展后的 6 位颜色代码
 */
function expandColorCode(color) {
  // 移除可能存在的 # 前缀
  color = color.replace(/^#/, "");

  // 检查输入是否为有效的 3 位颜色代码
  if (!/^[0-9A-Fa-f]{3}$/.test(color)) {
    return "Invalid input: color code must be a 3-digit hexadecimal";
  }

  // 将每个字符重复一次来扩展颜色代码
  return (
    "#" +
    color
      .split("")
      .map((char) => char + char)
      .join("")
  );
}

// 测试函数
function testExpandColorCode() {
  console.log("测试用例 1: 基本 3 位颜色代码");
  console.log(expandColorCode("123"));
  // 预期输出: "#112233"

  console.log("\n测试用例 2: 包含字母的颜色代码");
  console.log(expandColorCode("ABC"));
  // 预期输出: "#AABBCC"

  console.log("\n测试用例 3: 带 # 前缀的颜色代码");
  console.log(expandColorCode("#F90"));
  // 预期输出: "#FF9900"

  console.log("\n测试用例 4: 小写字母的颜色代码");
  console.log(expandColorCode("abc"));
  // 预期输出: "#aabbcc"

  console.log("\n测试用例 5: 无效输入 - 2 位颜色代码");
  console.log(expandColorCode("12"));
  // 预期输出: "Invalid input: color code must be a 3-digit hexadecimal"

  console.log("\n测试用例 6: 无效输入 - 4 位颜色代码");
  console.log(expandColorCode("1234"));
  // 预期输出: "Invalid input: color code must be a 3-digit hexadecimal"

  console.log("\n测试用例 7: 无效输入 - 非十六进制字符");
  console.log(expandColorCode("12G"));
  // 预期输出: "Invalid input: color code must be a 3-digit hexadecimal"

  console.log("\n测试用例 8: 无效输入 - 空字符串");
  console.log(expandColorCode(""));
  // 预期输出: "Invalid input: color code must be a 3-digit hexadecimal"
}

// 运行测试
testExpandColorCode();
