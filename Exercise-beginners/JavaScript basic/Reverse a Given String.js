/**
 * 反转给定的字符串
 * @param {string} str - 要反转的字符串
 * @returns {string} - 反转后的字符串
 */

function reverseString(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return "输入必须是字符串";
  }
  // 使用split()方法将字符串拆分为字符数组，然后使用reverse()方法反转数组，最后使用join()方法将数组转换回字符串
  return str.split("").reverse().join("");
}

/**
 * 使用循环反转字符串（替代方法）
 * @param {string} str - 要反转的字符串
 * @returns {string} - 反转后的字符串
 */
function reverseStringLoop(str) {
  if (typeof str !== "string") {
    return "输入必须是字符串";
  }

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 测试函数
function testReverseString() {
  console.log(reverseString("hello")); // 预期输出: "olleh"
  console.log(reverseString("OpenAI")); // 预期输出: "IAnepo"
  console.log(reverseString("A man a plan a canal Panama")); // 预期输出: "amanaP lanac a nalp a nam A"
  console.log(reverseString("race a car")); // 预期输出: "rac a ecar"
  console.log(reverseString("")); // 预期输出: ""
  console.log(reverseString("a")); // 预期输出: "a"
  console.log(reverseString(12345)); // 预期输出: "输入必须是字符串"

  console.log("\n使用循环方法：");
  console.log(reverseStringLoop("hello")); // 预期输出: "olleh"
  console.log(reverseStringLoop("OpenAI")); // 预期输出: "IAnepo"
  console.log(reverseStringLoop("12345")); // 预期输出: "54321"
}

// 运行测试
testReverseString();
