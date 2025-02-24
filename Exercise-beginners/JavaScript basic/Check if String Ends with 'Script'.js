/**
 * 题目：检查字符串是否以 "Script" 结尾
 * 
 * 编写一个 JavaScript 程序，测试给定的字符串是否以 "Script" 结尾。
 * 字符串的长度必须大于或等于 6。
 * 
 * @param {string} str - 要检查的输入字符串
 * @returns {boolean} - 如果字符串以 "Script" 结尾且长度大于或等于 6，则返回 true；否则返回 false
 */
function endsWithScript(str) {
    // 检查输入是否为字符串
    if (typeof str !== 'string') {
      return false;
    }
  
    // 检查字符串长度是否大于或等于 6
    if (str.length < 6) {
      return false;
    }
  
    // 将字符串转换为小写并检查是否以 "script" 结尾
    return str.toLowerCase().endsWith('script');
  }
  
  // 测试函数
  function testEndsWithScript() {
    console.log(endsWithScript("JavaScript"));     // 预期输出: true
    console.log(endsWithScript("TypeScript"));     // 预期输出: true
    console.log(endsWithScript("Java Script"));    // 预期输出: true
    console.log(endsWithScript("Script"));         // 预期输出: true
    console.log(endsWithScript("OpenScript"));     // 预期输出: true
    console.log(endsWithScript("script"));         // 预期输出: true
    console.log(endsWithScript("Scrip"));          // 预期输出: false
    console.log(endsWithScript("JavaScript!"));    // 预期输出: false
    console.log(endsWithScript("Java"));           // 预期输出: false
    console.log(endsWithScript(""));               // 预期输出: false
    console.log(endsWithScript("JavaScript编程")); // 预期输出: false
    console.log(endsWithScript("ScriptJava"));     // 预期输出: false
    console.log(endsWithScript(123456));           // 预期输出: false
  }
  
  // 运行测试
  testEndsWithScript();
  