/**
 * 检查一对数字是否满足条件：其中一个是50或它们的和是50
 * @param {number} a - 第一个数字
 * @param {number} b - 第二个数字
 * @returns {boolean} - 如果满足条件返回true，否则返回false
 */
function checkFifty(a, b) {
  return a === 50 || b === 50 || a + b === 50;
}

// 测试函数
function testCheckFifty() {
  console.log(checkFifty(50, 0)); // 预期输出: true
  console.log(checkFifty(20, 30)); // 预期输出: true
  console.log(checkFifty(25, 25)); // 预期输出: true
  console.log(checkFifty(0, 50)); // 预期输出: true
  console.log(checkFifty(20, 20)); // 预期输出: false
  console.log(checkFifty(40, 10)); // 预期输出: true
  console.log(checkFifty(10, 10)); // 预期输出: false
}

// 运行测试
testCheckFifty();
