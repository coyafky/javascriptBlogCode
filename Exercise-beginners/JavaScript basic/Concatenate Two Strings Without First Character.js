/**
 * 题目：连接两个字符串，但不包括它们的第一个字符
 *
 * 编写一个 JavaScript 程序，将两个给定的字符串连接起来，
 * 但不包括它们各自的第一个字符。
 *
 * @param {string} str1 - 第一个输入字符串
 * @param {string} str2 - 第二个输入字符串
 * @returns {string} - 连接后的新字符串
 */
function concatenateWithoutFirstChar(str1, str2) {
  // 检查输入是否为字符串
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "两个输入都必须是字符串";
  }

  // 使用 slice 方法去除第一个字符，然后连接
  return str1.slice(1) + str2.slice(1);
}

// 测试函数
function testConcatenateWithoutFirstChar() {
  console.log(concatenateWithoutFirstChar("Hello", "World")); // 预期输出: "elloorld"
  console.log(concatenateWithoutFirstChar("JavaScript", "Python")); // 预期输出: "avaScriptython"
  console.log(concatenateWithoutFirstChar("a", "b")); // 预期输出: ""
  console.log(concatenateWithoutFirstChar("", "")); // 预期输出: ""
  console.log(concatenateWithoutFirstChar("OpenAI", "ChatGPT")); // 预期输出: "penAIhatGPT"
  console.log(concatenateWithoutFirstChar("12345", "67890")); // 预期输出: "234567890"
  console.log(concatenateWithoutFirstChar("你好", "世界")); // 预期输出: "好界"
  console.log(concatenateWithoutFirstChar(" space", " start")); // 预期输出: "spacetart"
  console.log(concatenateWithoutFirstChar("a", "")); // 预期输出: ""
  console.log(concatenateWithoutFirstChar("", "b")); // 预期输出: ""
  console.log(concatenateWithoutFirstChar(123, "string")); // 预期输出: "两个输入都必须是字符串"
  console.log(concatenateWithoutFirstChar("string", 456)); // 预期输出: "两个输入都必须是字符串"
}

// 运行测试
testConcatenateWithoutFirstChar();
