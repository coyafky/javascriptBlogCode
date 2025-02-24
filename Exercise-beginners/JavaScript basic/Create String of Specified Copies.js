/**
 * 题目：创建指定数量的字符串副本
 * 
 * 编写一个 JavaScript 程序，根据给定的正整数，创建指定数量的字符串副本。
 * 
 * @param {string} str - 要复制的原始字符串
 * @param {number} n - 要创建的副本数量（正整数）
 * @returns {string} - 包含指定数量副本的新字符串
 */
function createStringCopies(str, n) {
    // 检查输入是否有效
    if (typeof str !== 'string') {
      return "第一个参数必须是字符串";
    }
    if (!Number.isInteger(n) || n <= 0) {
      return "第二个参数必须是正整数";
    }
  
    // 使用 repeat 方法创建指定数量的副本
    return str.repeat(n);
  }
  
  // 测试函数
  function testCreateStringCopies() {
    console.log(createStringCopies("abc", 3));       // 预期输出: "abcabcabc"
    console.log(createStringCopies("123", 2));       // 预期输出: "123123"
    console.log(createStringCopies("", 5));          // 预期输出: ""
    console.log(createStringCopies("a", 1));         // 预期输出: "a"
    console.log(createStringCopies("hello", 0));     // 预期输出: "第二个参数必须是正整数"
    console.log(createStringCopies("world", -3));    // 预期输出: "第二个参数必须是正整数"
    console.log(createStringCopies("test", 2.5));    // 预期输出: "第二个参数必须是正整数"
    console.log(createStringCopies(123, 2));         // 预期输出: "第一个参数必须是字符串"
    console.log(createStringCopies("OpenAI", 4));    // 预期输出: "OpenAIOpenAIOpenAIOpenAI"
    console.log(createStringCopies(" ", 3));         // 预期输出: "   "
    console.log(createStringCopies("中文", 2));      // 预期输出: "中文中文"
  }
  
  // 运行测试
  testCreateStringCopies();
  