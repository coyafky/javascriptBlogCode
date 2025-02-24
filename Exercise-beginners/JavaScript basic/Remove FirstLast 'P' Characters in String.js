/**
 * 题目：移除字符串首尾的 'P' 字符
 *
 * 编写一个 JavaScript 程序，从给定的字符串创建一个新字符串。
 * 如果字符串的第一个或最后一个字符是 'P'，则移除它。
 * 如果条件不满足，则返回原始字符串。
 *
 * @param {string} str - 要处理的输入字符串
 * @returns {string} - 处理后的新字符串或原始字符串
 */
function removeFirstLastP(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return "输入必须是字符串";
  }

  // 如果字符串长度小于1，直接返回原字符串
  if (str.length < 1) {
    return str;
  }

  // 检查第一个字符是否为 'P'（不区分大小写）
  if (str[0].toLowerCase() === "p") {
    str = str.slice(1);
  }

  // 再次检查字符串长度，因为可能已经移除了第一个字符
  if (str.length > 0) {
    // 检查最后一个字符是否为 'P'（不区分大小写）
    if (str[str.length - 1].toLowerCase() === "p") {
      str = str.slice(0, -1);
    }
  }

  return str;
}

// 测试函数
function testRemoveFirstLastP() {
  console.log(removeFirstLastP("PythonP")); // 预期输出: "ython"
  console.log(removeFirstLastP("Python")); // 预期输出: "ython"
  console.log(removeFirstLastP("JavaScript")); // 预期输出: "JavaScript"
  console.log(removeFirstLastP("PhP")); // 预期输出: "h"
  console.log(removeFirstLastP("p")); // 预期输出: ""
  console.log(removeFirstLastP("PP")); // 预期输出: ""
  console.log(removeFirstLastP("Pineapple")); // 预期输出: "ineapple"
  console.log(removeFirstLastP("AppleP")); // 预期输出: "Apple"
  console.log(removeFirstLastP("PYTHON")); // 预期输出: "YTHON"
  console.log(removeFirstLastP("python")); // 预期输出: "ytho"
  console.log(removeFirstLastP("Hello World")); // 预期输出: "Hello World"
  console.log(removeFirstLastP("")); // 预期输出: ""
  console.log(removeFirstLastP("p p")); // 预期输出: " "
  console.log(removeFirstLastP(12345)); // 预期输出: "输入必须是字符串"
}

// 运行测试
testRemoveFirstLastP();
