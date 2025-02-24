/**
 * 题目：将字符串中的字母按字母顺序排序
 *
 * 编写一个 JavaScript 程序，将给定字符串中的字母按字母顺序排序。
 * 注意：只对字母进行排序，其他字符保持原位。
 *
 * @param {string} str - 要排序的输入字符串
 * @returns {string} - 字母按字母顺序排序后的字符串
 */

function sortLettersAlphabetically(str) {
  if (typeof str !== "string") {
    return "输入必须是字符串";
  }

  const letters = str.match(/[a-zA-Z]/g) || [];
  // 对字母进行排序
  const sortedLetters = letters.sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" })
  );

  // 将排序后的字母替换回原字符串
  let sortedStr = str;
  let letterIndex = 0;
  sortedStr = sortedStr.replace(/[a-zA-Z]/g, function () {
    return sortedLetters[letterIndex++];
  });

  return sortedStr;
}

// 测试函数
function testSortLettersAlphabetically() {
  console.log(sortLettersAlphabetically("hello")); // 输出: "ehllo"
  console.log(sortLettersAlphabetically("JavaScript")); // 输出: "aacijprstv"
  console.log(sortLettersAlphabetically("123abc456")); // 输出: "123abc456"
  console.log(sortLettersAlphabetically("Python")); // 输出: "Phtyon"
  console.log(sortLettersAlphabetically("")); // 输出: ""
  console.log(sortLettersAlphabetically("a")); // 输出: "a"
  console.log(sortLettersAlphabetically("123")); // 输出: "123"
  console.log(sortLettersAlphabetically("!@#")); // 输出: "!@#"
}

// 运行测试
testSortLettersAlphabetically();
