/**
 * 检查三个非负整数中是否有两个或全部具有相同的最右边数字
 * @param {number} a - 第一个数字
 * @param {number} b - 第二个数字
 * @param {number} c - 第三个数字
 * @returns {boolean} - 如果有两个或更多数字具有相同的最右边数字，则返回 true；否则返回 false
 */
function checkRightmostDigit(a, b, c) {
  // 确保输入是非负整数
  if (
    a < 0 ||
    b < 0 ||
    c < 0 ||
    !Number.isInteger(a) ||
    !Number.isInteger(b) ||
    !Number.isInteger(c)
  ) {
    return false;
  }

  // 获取每个数字的最右边数字
  const rightmostA = a % 10;
  const rightmostB = b % 10;
  const rightmostC = c % 10;

  // 检查是否有两个或更多数字具有相同的最右边数字
  return (
    rightmostA === rightmostB ||
    rightmostB === rightmostC ||
    rightmostA === rightmostC
  );
}

// 测试函数
function testCheckRightmostDigit() {
  console.log(checkRightmostDigit(22, 32, 42)); // 预期输出: true
  console.log(checkRightmostDigit(102, 302, 2)); // 预期输出: true
  console.log(checkRightmostDigit(20, 30, 40)); // 预期输出: true
  console.log(checkRightmostDigit(51, 62, 73)); // 预期输出: false
  console.log(checkRightmostDigit(1, 11, 21)); // 预期输出: true
  console.log(checkRightmostDigit(0, 0, 0)); // 预期输出: true
  console.log(checkRightmostDigit(10, 20, 31)); // 预期输出: false
  console.log(checkRightmostDigit(100, 200, 300)); // 预期输出: true
  console.log(checkRightmostDigit(-1, 2, 3)); // 预期输出: false（负数）
  console.log(checkRightmostDigit(1.5, 2, 3)); // 预期输出: false（非整数）
}

// 运行测试
testCheckRightmostDigit();
