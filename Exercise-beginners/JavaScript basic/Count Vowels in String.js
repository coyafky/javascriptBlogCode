/**
 * 题目：计算字符串中元音字母的数量
 *
 * 编写一个 JavaScript 程序，计算给定字符串中元音字母的数量。
 * 元音字母包括：a, e, i, o, u（不区分大小写）
 *
 * @param {string} str - 要检查的输入字符串
 * @returns {number} - 字符串中元音字母的数量
 */
function countVowels(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return "输入必须是字符串";
  }

  // 使用正则表达式匹配元音字母（不区分大小写）
  const vowels = str.match(/[aeiou]/gi);

  // 如果没有找到元音字母，返回0；否则返回元音字母的数量
  return vowels ? vowels.length : 0;
}

// 测试函数
function testCountVowels() {
  console.log(countVowels("hello")); // 预期输出: 2
  console.log(countVowels("HELLO")); // 预期输出: 2
  console.log(countVowels("OpenAI")); // 预期输出: 4
  console.log(countVowels("JavaScript")); // 预期输出: 3
  console.log(countVowels("aeiou")); // 预期输出: 5
  console.log(countVowels("AEIOU")); // 预期输出: 5
  console.log(countVowels("bcdfghjklmnpqrstvwxyz")); // 预期输出: 0
  console.log(countVowels("")); // 预期输出: 0
  console.log(countVowels("123")); // 预期输出: 0
  console.log(countVowels("a e i o u")); // 预期输出: 5
  console.log(countVowels("Quick brown fox")); // 预期输出: 3
  console.log(countVowels(12345)); // 预期输出: 输入必须是字符串
}

// 运行测试
testCountVowels();
