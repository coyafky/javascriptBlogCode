/**
 * 题目：找出转换为回文串所需的最短字符串
 *
 * 编写一个 JavaScript 程序，找出最短的可能字符串，通过在其末尾添加字符可以将其转换为回文串。
 *
 * @param {string} str - 输入的字符串
 * @returns {string} - 需要添加到原字符串末尾的最短字符串
 */
function shortestPalindromeAddition(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return "Invalid input";
  }

  // 如果字符串为空或只有一个字符，不需要添加任何内容
  if (str.length <= 1) {
    return "";
  }

  // 找出字符串开头的最长回文子串
  let i = 0;
  for (let j = str.length - 1; j >= 0; j--) {
    if (isPalindrome(str.substring(0, j + 1))) {
      i = j + 1;
      break;
    }
  }

  // 返回需要添加的字符串
  return str.substring(i).split("").reverse().join("");
}

/**
 * 辅助函数：检查字符串是否为回文
 *
 * @param {string} s - 需要检查的字符串
 * @returns {boolean} - 如果是回文返回 true，否则返回 false
 */
function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

// 测试函数
function testShortestPalindromeAddition() {
  console.log(shortestPalindromeAddition("abcd")); // 预期输出: "dcba"
  console.log(shortestPalindromeAddition("aba")); // 预期输出: ""
  console.log(shortestPalindromeAddition("abcda")); // 预期输出: "dcba"
  console.log(shortestPalindromeAddition("")); // 预期输出: ""
  console.log(shortestPalindromeAddition("a")); // 预期输出: ""
  console.log(shortestPalindromeAddition("racecar")); // 预期输出: ""
  console.log(shortestPalindromeAddition("abcde")); // 预期输出: "dcba"
  console.log(shortestPalindromeAddition("abba")); // 预期输出: ""
  console.log(shortestPalindromeAddition("aacecaaa")); // 预期输出: ""
  console.log(shortestPalindromeAddition("abcabc")); // 预期输出: "cbacba"
  console.log(shortestPalindromeAddition(123)); // 预期输出: "Invalid input"
  console.log(shortestPalindromeAddition(null)); // 预期输出: "Invalid input"
}

// 运行测试
testShortestPalindromeAddition();
