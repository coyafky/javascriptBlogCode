/**
 * 题目：移除字符串的首尾字符
 *
 * 编写一个 JavaScript 程序，创建一个新的字符串，
 * 该字符串不包含给定字符串的第一个和最后一个字符。
 *
 * @param {string} str - 要处理的输入字符串
 * @returns {string} - 移除首尾字符后的新字符串
 */
function removeFirstAndLast(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return "输入必须是字符串";
  }

  // 获取字符串长度
  const length = str.length;

  // 如果字符串长度小于等于2，返回空字符串
  if (length <= 2) {
    return "";
  }

  // 使用 slice 方法移除首尾字符
  return str.slice(1, -1);
}

// 测试函数
function testRemoveFirstAndLast() {
  console.log(removeFirstAndLast("Hello")); // 预期输出: "ell"
  console.log(removeFirstAndLast("JavaScript")); // 预期输出: "avaScrip"
  console.log(removeFirstAndLast("ab")); // 预期输出: ""
  console.log(removeFirstAndLast("a")); // 预期输出: ""
  console.log(removeFirstAndLast("")); // 预期输出: ""
  console.log(removeFirstAndLast("OpenAI")); // 预期输出: "penA"
  console.log(removeFirstAndLast("12345")); // 预期输出: "234"
  console.log(removeFirstAndLast("你好世界")); // 预期输出: "好世"
  console.log(removeFirstAndLast("  spaces  ")); // 预期输出: " spaces "
  console.log(removeFirstAndLast("!@#$%")); // 预期输出: "@#$"
  console.log(removeFirstAndLast(12345)); // 预期输出: "输入必须是字符串"
}

// 运行测试
testRemoveFirstAndLast();
