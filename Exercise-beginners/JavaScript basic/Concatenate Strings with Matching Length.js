/**
 * 题目：连接长度匹配的字符串
 *
 * 编写一个 JavaScript 程序，连接两个字符串并返回结果。
 * 如果两个字符串的长度不匹配，则从较长的字符串中删除多余的字符。
 *
 * @param {string} str1 - 第一个输入字符串
 * @param {string} str2 - 第二个输入字符串
 * @returns {string} - 连接后的新字符串
 */
function concatenateMatchingLength(str1, str2) {
  // 检查输入是否为字符串
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "两个输入都必须是字符串";
  }

  // 获取两个字符串的长度
  const len1 = str1.length;
  const len2 = str2.length;

  // 如果长度相等，直接连接
  if (len1 === len2) {
    return str1 + str2;
  }

  // 如果 str1 更长，截取与 str2 等长的部分
  if (len1 > len2) {
    return str1.slice(0, len2) + str2;
  }

  // 如果 str2 更长，截取与 str1 等长的部分
  return str1 + str2.slice(0, len1);
}

// 测试函数
function testConcatenateMatchingLength() {
  console.log(concatenateMatchingLength("Python", "JS")); // 预期输出: "PythJS"
  console.log(concatenateMatchingLength("ab", "cdef")); // 预期输出: "abcd"
  console.log(concatenateMatchingLength("abcd", "ef")); // 预期输出: "abef"
  console.log(concatenateMatchingLength("", "JavaScript")); // 预期输出: ""
  console.log(concatenateMatchingLength("Java", "Script")); // 预期输出: "JavaScri"
  console.log(concatenateMatchingLength("Hi", "There!")); // 预期输出: "HiTh"
  console.log(concatenateMatchingLength("OpenAI", "GPT")); // 预期输出: "OpeGPT"
  console.log(concatenateMatchingLength("你好", "世界")); // 预期输出: "你好世界"
  console.log(concatenateMatchingLength("A", "")); // 预期输出: ""
  console.log(concatenateMatchingLength("", "B")); // 预期输出: ""
  console.log(concatenateMatchingLength("123", "456")); // 预期输出: "123456"
  console.log(concatenateMatchingLength(123, "string")); // 预期输出: "两个输入都必须是字符串"
}

// 运行测试
testConcatenateMatchingLength();
