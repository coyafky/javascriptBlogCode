/**
 * 题目：提取偶数长度字符串的前半部分
 *
 * 编写一个 JavaScript 程序，提取偶数长度字符串的前半部分。
 * 如果字符串长度为奇数，则返回原字符串。
 *
 * @param {string} str - 要处理的输入字符串
 * @returns {string} - 提取的前半部分字符串或原字符串
 */
function extractFirstHalf(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return "输入必须是字符串";
  }

  // 获取字符串长度
  const length = str.length;

  // 如果长度为偶数，提取前半部分；否则返回原字符串
  if (length % 2 === 0) {
    return str.slice(0, length / 2);
  } else {
    return str;
  }
}

// 测试函数
function testExtractFirstHalf() {
  console.log(extractFirstHalf("abcdef")); // 预期输出: "abc"
  console.log(extractFirstHalf("1234")); // 预期输出: "12"
  console.log(extractFirstHalf("javascript")); // 预期输出: "javasc"
  console.log(extractFirstHalf("python")); // 预期输出: "python"
  console.log(extractFirstHalf("")); // 预期输出: ""
  console.log(extractFirstHalf("a")); // 预期输出: "a"
  console.log(extractFirstHalf("OpenAI")); // 预期输出: "Ope"
  console.log(extractFirstHalf("你好世界")); // 预期输出: "你好"
  console.log(extractFirstHalf("Hello World")); // 预期输出: "Hello World"
  console.log(extractFirstHalf("12345")); // 预期输出: "12345"
  console.log(extractFirstHalf(12345)); // 预期输出: "输入必须是字符串"
}

// 运行测试
testExtractFirstHalf();
