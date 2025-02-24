/**
 * 从字符串中移除非可打印的 ASCII 字符
 *
 * @param {string} str - 输入的字符串
 * @returns {string} - 移除非可打印 ASCII 字符后的字符串
 */
function removedNonPrintableASCII(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return "Invalid input: not a string";
  }

  // 使用正则表达式匹配可打印的 ASCII 字符（码点范围 32-126）
  // 和常见的可打印控制字符（换行、回车、制表符）
  return str.replace(/[^\x20-\x7E\t\n\r]/g, "");
}

// 测试函数
function testRemovedNonPrintableASCII() {
  console.log("测试用例 1: 包含非可打印字符的字符串");
  console.log(removedNonPrintableASCII("Hello\x00World\x1F!"));
  // 预期输出: "HelloWorld!"

  console.log("\n测试用例 2: 只包含可打印字符的字符串");
  console.log(removedNonPrintableASCII("Normal String 123!@#"));
  // 预期输出: "Normal String 123!@#"

  console.log("\n测试用例 3: 包含制表符、换行符和回车符");
  console.log(removedNonPrintableASCII("Hello\tWorld\nNew\rLine"));
  // 预期输出: "Hello\tWorld\nNew\rLine"

  console.log("\n测试用例 4: 包含 Unicode 字符");
  console.log(removedNonPrintableASCII("Hello世界\x1D!"));
  // 预期输出: "Hello世界!"

  console.log("\n测试用例 5: 空字符串");
  console.log(removedNonPrintableASCII(""));
  // 预期输出: ""

  console.log("\n测试用例 6: 全是非可打印字符的字符串");
  console.log(removedNonPrintableASCII("\x00\x01\x02\x03"));
  // 预期输出: ""

  console.log("\n测试用例 7: 无效输入");
  console.log(removedNonPrintableASCII(123));
  // 预期输出: "Invalid input: not a string"
}

// 运行测试
testRemovedNonPrintableASCII();
