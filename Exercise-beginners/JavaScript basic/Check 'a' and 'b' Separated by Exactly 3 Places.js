/**
 * 题目：检查字符 'a' 和 'b' 是否被恰好 3 个字符分隔
 *
 * 编写一个 JavaScript 程序，检查给定字符串中是否存在字符 'a' 和 'b'
 * 被恰好 3 个字符分隔的情况（至少出现一次）。
 *
 * @param {string} str - 要检查的输入字符串
 * @returns {boolean} - 如果存在符合条件的情况返回 true，否则返回 false
 */
function checkAandBSeparation(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return false;
  }

  // 使用正则表达式检查 'a' 和 'b' 的分隔
  // 这里 . 表示任意字符，{3} 表示恰好 3 次
  return /a...b/.test(str) || /b...a/.test(str);
}

// 测试函数
function testCheckAandBSeparation() {
  console.log(checkAandBSeparation("aabcdb")); // 预期输出: true
  console.log(checkAandBSeparation("aabcdddb")); // 预期输出: true
  console.log(checkAandBSeparation("abcde")); // 预期输出: false
  console.log(checkAandBSeparation("aabbcc")); // 预期输出: false
  console.log(checkAandBSeparation("a123b")); // 预期输出: true
  console.log(checkAandBSeparation("b123a")); // 预期输出: true
  console.log(checkAandBSeparation("abcdefgb")); // 预期输出: false
  console.log(checkAandBSeparation("ab")); // 预期输出: false
  console.log(checkAandBSeparation("")); // 预期输出: false
  console.log(checkAandBSeparation("a b c d e b")); // 预期输出: true
  console.log(checkAandBSeparation("a\nb\nc\nd\ne\nb")); // 预期输出: true
  console.log(checkAandBSeparation(12345)); // 预期输出: false
}

// 运行测试
testCheckAandBSeparation();
