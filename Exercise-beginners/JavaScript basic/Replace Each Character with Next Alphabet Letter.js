/**
 * 题目：将字符串中的每个字符替换为字母表中的下一个字符
 * 
 * 将给定字符串中的每个字符替换为字母表中紧随其后的字符。
 * 注意：'z' 应该被替换为 'a'，'Z' 应该被替换为 'A'。
 * 非字母字符保持不变。
 * 
 * @param {string} str - 要处理的输入字符串
 * @returns {string} - 处理后的字符串
 */
function replaceWithNextAlphabet(str) {
    // 检查输入是否为字符串
    if (typeof str !== 'string') {
      return '输入必须是字符串';
    }
  
    // 使用正则表达式和替换函数处理字符串
    return str.replace(/[a-zA-Z]/g, function(char) {
      // 获取字符的 ASCII 码
      let code = char.charCodeAt(0);
      
      // 处理 'z' 和 'Z' 的特殊情况
      if (code === 122) return 'a'; // 'z' -> 'a'
      if (code === 90) return 'A';  // 'Z' -> 'A'
      
      // 对于其他字母，返回下一个字母
      return String.fromCharCode(code + 1);
    });
  }
  
  // 测试函数
  function testReplaceWithNextAlphabet() {
    console.log(replaceWithNextAlphabet("abcd"));        // 预期输出: "bcde"
    console.log(replaceWithNextAlphabet("ABCD"));        // 预期输出: "BCDE"
    console.log(replaceWithNextAlphabet("z"));           // 预期输出: "a"
    console.log(replaceWithNextAlphabet("Z"));           // 预期输出: "A"
    console.log(replaceWithNextAlphabet("a1b2c3"));      // 预期输出: "b1c2d3"
    console.log(replaceWithNextAlphabet("abcXYZ123"));   // 预期输出: "bcdYZA123"
    console.log(replaceWithNextAlphabet(""));            // 预期输出: ""
    console.log(replaceWithNextAlphabet("!@#$%"));       // 预期输出: "!@#$%"
    console.log(replaceWithNextAlphabet(12345));         // 预期输出: "输入必须是字符串"
  }
  
  // 运行测试
  testReplaceWithNextAlphabet();
  