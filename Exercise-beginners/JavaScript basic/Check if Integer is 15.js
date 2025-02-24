/**
 * 检查两个整数值，如果其中一个是 15，或者它们的和或差是 15，则返回 true
 * @param {number} a - 第一个整数
 * @param {number} b - 第二个整数
 * @returns {boolean} - 如果条件满足则返回 true，否则返回 false
 */
function checkFifteen(a, b) {
  // 检查输入是否为整数
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return false;
  }

  // 检查条件
  return a === 15 || b === 15 || a + b === 15 || Math.abs(a - b) === 15;
}

// 测试函数
function testCheckFifteen() {
  console.log(checkFifteen(15, 0)); // 预期输出: true
  console.log(checkFifteen(0, 15)); // 预期输出: true
  console.log(checkFifteen(7, 8)); // 预期输出: true
  console.log(checkFifteen(25, 10)); // 预期输出: true
  console.log(checkFifteen(10, 25)); // 预期输出: true
  console.log(checkFifteen(5, 5)); // 预期输出: false
  console.log(checkFifteen(0, 0)); // 预期输出: false
  console.log(checkFifteen(-15, 30)); // 预期输出: true
  console.log(checkFifteen(15.5, 0)); // 预期输出: false（非整数）
  console.log(checkFifteen(14, 1)); // 预期输出: true
}

// 运行测试
testCheckFifteen();
