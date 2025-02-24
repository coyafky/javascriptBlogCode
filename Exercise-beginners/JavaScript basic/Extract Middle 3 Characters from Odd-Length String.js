/**
 * 题目：将字符串的最后三个字符移动到开头
 *
 * 编写一个 JavaScript 程序，将给定字符串的最后三个字符移动到字符串的开头。
 * 字符串的长度必须大于或等于三。
 *
 * @param {string} str - 要处理的输入字符串
 * @returns {string} - 处理后的新字符串
 */
function moveLastThreeToStart(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return "输入必须是字符串";
  }

  // 检查字符串长度是否大于或等于3
  if (str.length < 3) {
    return "字符串长度必须大于或等于3";
  }

  // 提取最后三个字符
  const lastThree = str.slice(-3);

  // 提取除了最后三个字符之外的部分
  const remainingPart = str.slice(0, -3);

  // 将最后三个字符移动到开头
  return lastThree + remainingPart;
}

// 测试函数
function testMoveLastThreeToStart() {
  console.log(moveLastThreeToStart("Python")); // 预期输出: "honPyt"
  console.log(moveLastThreeToStart("JavaScript")); // 预期输出: "iptJavaScr"
  console.log(moveLastThreeToStart("Hi")); // 预期输出: "字符串长度必须大于或等于3"
  console.log(moveLastThreeToStart("")); // 预期输出: "字符串长度必须大于或等于3"
  console.log(moveLastThreeToStart("abc")); // 预期输出: "abc"
  console.log(moveLastThreeToStart("12345")); // 预期输出: "34512"
  console.log(moveLastThreeToStart("你好世界")); // 预期输出: "世界你好"
  console.log(moveLastThreeToStart("   space   ")); // 预期输出: "ce   spa"
  console.log(moveLastThreeToStart("a!@")); // 预期输出: "a!@"
  console.log(moveLastThreeToStart("abcdefghijklm")); // 预期输出: "klmabcdefghij"
  console.log(moveLastThreeToStart(12345)); // 预期输出: "输入必须是字符串"
}

// 运行测试
testMoveLastThreeToStart();
