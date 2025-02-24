/**
 * 题目：将字符串中每个单词的首字母大写
 *
 * 给定一个字符串，将其中每个单词的首字母转换为大写。
 * 单词由空格分隔。
 *
 * @param {string} str - 要处理的输入字符串
 * @returns {string} - 处理后的字符串
 */
function capitalizeWords(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return "输入必须是字符串";
  }

  // 使用空格分割字符串，处理每个单词，然后重新组合
  return str
    .split(" ")
    .map((word) => {
      // 如果单词不为空，将首字母大写
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word; // 保留空字符串（连续空格的情况）
    })
    .join(" ");
}

// 测试函数
function testCapitalizeWords() {
  console.log(capitalizeWords("hello world")); // 预期输出: "Hello World"
  console.log(capitalizeWords("javascript is awesome")); // 预期输出: "Javascript Is Awesome"
  console.log(capitalizeWords("a b c d")); // 预期输出: "A B C D"
  console.log(capitalizeWords("openAI chatGPT")); // 预期输出: "OpenAI ChatGPT"
  console.log(capitalizeWords("THE QUICK BROWN FOX")); // 预期输出: "THE QUICK BROWN FOX"
  console.log(capitalizeWords("")); // 预期输出: ""
  console.log(capitalizeWords("  multiple   spaces  ")); // 预期输出: "  Multiple   Spaces  "
  console.log(capitalizeWords("already Capitalized")); // 预期输出: "Already Capitalized"
  console.log(capitalizeWords("123 numbers 456")); // 预期输出: "123 Numbers 456"
  console.log(capitalizeWords(12345)); // 预期输出: "输入必须是字符串"
}

// 运行测试
testCapitalizeWords();
