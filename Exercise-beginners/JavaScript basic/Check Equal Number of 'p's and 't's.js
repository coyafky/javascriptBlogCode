/**
 * 题目：检查字符串中 'p' 和 't' 的数量是否相等
 * 
 * 编写一个 JavaScript 程序，检查给定字符串中是否包含相等数量的 'p' 和 't'。
 * 注意：不区分大小写，即 'P' 和 'p'、'T' 和 't' 都应该被计数。
 * 
 * @param {string} str - 要检查的输入字符串
 * @returns {boolean} - 如果 'p' 和 't' 的数量相等返回 true，否则返回 false
 */
function checkEqualPandT(str) {
    // 检查输入是否为字符串
    if (typeof str !== 'string') {
      return '输入必须是字符串';
    }
  
    // 将字符串转换为小写以实现不区分大小写的计数
    str = str.toLowerCase();
  
    // 计算 'p' 和 't' 的数量
    const pCount = (str.match(/p/g) || []).length;
    const tCount = (str.match(/t/g) || []).length;
  
    // 返回 'p' 和 't' 的数量是否相等
    return pCount === tCount;
  }
  
  // 测试函数
  function testCheckEqualPandT() {
    console.log(checkEqualPandT("paatpss"));    // 预期输出: false
    console.log(checkEqualPandT("paatps"));     // 预期输出: true
    console.log(checkEqualPandT("Party"));      // 预期输出: true
    console.log(checkEqualPandT("PPttTT"));     // 预期输出: true
    console.log(checkEqualPandT("pPtTtpP"));    // 预期输出: true
    console.log(checkEqualPandT("ppttt"));      // 预期输出: false
    console.log(checkEqualPandT("hello"));      // 预期输出: false
    console.log(checkEqualPandT(""));           // 预期输出: true
    console.log(checkEqualPandT("PT"));         // 预期输出: true
    console.log(checkEqualPandT("pppPPP"));     // 预期输出: false
    console.log(checkEqualPandT("tttTTT"));     // 预期输出: false
    console.log(checkEqualPandT(12345));        // 预期输出: 输入必须是字符串
  }
  
  // 运行测试
  testCheckEqualPandT();
  