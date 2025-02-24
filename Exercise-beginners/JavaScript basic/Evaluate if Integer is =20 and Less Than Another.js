/**
 * 评估三个整数，判断是否其中一个大于或等于 20 且小于至少另外两个中的一个
 * @param {number} a - 第一个整数
 * @param {number} b - 第二个整数
 * @param {number} c - 第三个整数
 * @returns {boolean} - 如果条件满足则返回 true，否则返回 false
 */
function evaluateIntegers(a, b, c) {
  // 检查每个数是否为整数
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    return false;
  }

  // 使用辅助函数检查条件
  return (
    checkCondition(a, b, c) ||
    checkCondition(b, c, a) ||
    checkCondition(c, a, b)
  );
}

/**
 * 检查一个数是否大于或等于 20 且小于至少另外两个数中的一个
 * @param {number} x - 要检查的数
 * @param {number} y - 比较数 1
 * @param {number} z - 比较数 2
 * @returns {boolean} - 如果条件满足则返回 true，否则返回 false
 */
function checkCondition(x, y, z) {
  return x >= 20 && (x < y || x < z);
}

// 测试函数
function testEvaluateIntegers() {
  console.log(evaluateIntegers(23, 45, 10)); // 预期输出: true
  console.log(evaluateIntegers(23, 23, 10)); // 预期输出: false
  console.log(evaluateIntegers(21, 66, 75)); // 预期输出: true
  console.log(evaluateIntegers(20, 30, 40)); // 预期输出: true
  console.log(evaluateIntegers(19, 19, 19)); // 预期输出: false
  console.log(evaluateIntegers(20, 19, 17)); // 预期输出: false
  console.log(evaluateIntegers(30, 20, 10)); // 预期输出: true
  console.log(evaluateIntegers(15, 25, 35)); // 预期输出: true
  console.log(evaluateIntegers(20, 20, 20)); // 预期输出: false
  console.log(evaluateIntegers(20.5, 21, 22)); // 预期输出: false（非整数）
}

// 运行测试
testEvaluateIntegers();
