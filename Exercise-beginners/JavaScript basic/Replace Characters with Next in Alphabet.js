/**
 * 题目：将字符替换为字母表中的下一个字母
 *
 * 编写一个 JavaScript 程序，将给定字符串中的每个字符替换为英文字母表中的下一个字母。
 * 注意：'a' 将被替换为 'b'，'z' 将被替换为 'a'。
 *
 * @param {string} str - 要处理的输入字符串
 * @returns {string} - 替换后的字符串，如果输入无效则返回 null
 */
function replaceWithNextAlphabet(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return null;
  }

  // 使用正则表达式和替换函数处理字符串
  return str.replace(/[a-zA-Z]/g, function (char) {
    // 获取字符的 ASCII 码
    let code = char.charCodeAt(0);

    // 处理大写字母
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(code === 90 ? 65 : code + 1);
    }
    // 处理小写字母
    else if (code >= 97 && code <= 122) {
      return String.fromCharCode(code === 122 ? 97 : code + 1);
    }
    // 非字母字符保持不变
    return char;
  });
}

// 测试函数
function testReplaceWithNextAlphabet() {
  console.log(replaceWithNextAlphabet("abcd")); // 预期输出: "bcde"
  console.log(replaceWithNextAlphabet("ABCD")); // 预期输出: "BCDE"
  console.log(replaceWithNextAlphabet("z")); // 预期输出: "a"
  console.log(replaceWithNextAlphabet("Z")); // 预期输出: "A"
  console.log(replaceWithNextAlphabet("a b c")); // 预期输出: "b c d"
  console.log(replaceWithNextAlphabet("Hello, World!")); // 预期输出: "Ifmmp, Xpsme!"
  console.log(replaceWithNextAlphabet("123")); // 预期输出: "123"
  console.log(replaceWithNextAlphabet("")); // 预期输出: ""
  console.log(replaceWithNextAlphabet("aAzZ")); // 预期输出: "bBaA"
  console.log(replaceWithNextAlphabet("a1B2c3")); // 预期输出: "b1C2d3"
  console.log(replaceWithNextAlphabet(123)); // 预期输出: null
  console.log(replaceWithNextAlphabet(null)); // 预期输出: null
  console.log(replaceWithNextAlphabet(undefined)); // 预期输出: null
}

// 运行测试
testReplaceWithNextAlphabet();
