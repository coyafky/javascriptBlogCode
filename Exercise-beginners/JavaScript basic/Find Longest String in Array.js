/**
 * 题目：找出数组中最长的字符串
 *
 * 编写一个 JavaScript 程序，从给定的字符串数组中找出最长的字符串。
 * 如果有多个最长字符串，返回第一个出现的最长字符串。
 *
 * @param {string[]} arr - 包含字符串的输入数组
 * @returns {string|null} - 最长的字符串，如果输入无效则返回 null
 */
function findLongestString(arr) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return null;
  }

  // 检查数组是否为空
  if (arr.length === 0) {
    return null;
  }

  // 检查所有元素是否为字符串
  if (!arr.every((item) => typeof item === "string")) {
    return null;
  }

  // 使用 reduce 方法找出最长的字符串
  return arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  });
}

// 测试函数
function testFindLongestString() {
  console.log(findLongestString(["a", "bb", "ccc"])); // 预期输出: "ccc"
  console.log(findLongestString(["apple", "banana", "cherry"])); // 预期输出: "banana"
  console.log(findLongestString(["cat", "dog", "elephant", "fox"])); // 预期输出: "elephant"
  console.log(findLongestString([""])); // 预期输出: ""
  console.log(findLongestString(["a", "ab", "abc", "a"])); // 预期输出: "abc"
  console.log(findLongestString(["hello", "world"])); // 预期输出: "hello"
  console.log(findLongestString(["", "empty", ""])); // 预期输出: "empty"
  console.log(findLongestString(["a", "aa", "aaa", "aaaa"])); // 预期输出: "aaaa"
  console.log(findLongestString([])); // 预期输出: null
  console.log(findLongestString(["a", 2, "c"])); // 预期输出: null
  console.log(findLongestString("not an array")); // 预期输出: null
  console.log(findLongestString(null)); // 预期输出: null
  console.log(findLongestString(undefined)); // 预期输出: null
}

// 运行测试
testFindLongestString();
