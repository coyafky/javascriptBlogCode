/**
 * 检查两个非负整数中是否只有一个（不是两个）是 7 或 11 的倍数
 * @param {number} a - 第一个非负整数
 * @param {number} b - 第二个非负整数
 * @returns {boolean} - 如果条件满足则返回 true，否则返回 false
 */
function checkMultiple(a, b) {
  if (!areValidInputs(a, b)) {
    return false;
  }

  return isExactlyOneMultiple(a, b, [7, 11]);
}

/**
 * 检查输入是否为非负整数
 * @param {...number} nums - 要检查的数字
 * @returns {boolean} - 如果所有输入都是非负整数则返回 true，否则返回 false
 */
function areValidInputs(...nums) {
  return nums.every((num) => Number.isInteger(num) && num >= 0);
}

/**
 * 检查一个数是否是给定除数中任意一个的倍数
 * @param {number} num - 要检查的数
 * @param {number[]} divisors - 除数数组
 * @returns {boolean} - 如果 num 是任意一个除数的倍数则返回 true，否则返回 false
 */
function isMultipleOfAny(num, divisors) {
  return divisors.some((divisor) => num % divisor === 0);
}

/**
 * 检查两个数中是否只有一个是给定除数中任意一个的倍数
 * @param {number} a - 第一个数
 * @param {number} b - 第二个数
 * @param {number[]} divisors - 除数数组
 * @returns {boolean} - 如果只有一个数是任意除数的倍数则返回 true，否则返回 false
 */
function isExactlyOneMultiple(a, b, divisors) {
  const isMultipleA = isMultipleOfAny(a, divisors);
  const isMultipleB = isMultipleOfAny(b, divisors);
  return (isMultipleA && !isMultipleB) || (!isMultipleA && isMultipleB);
}

// 测试函数
function testCheckMultiple() {
  console.log(checkMultiple(14, 21)); // 预期输出: false（两个都是 7 的倍数）
  console.log(checkMultiple(14, 20)); // 预期输出: true（只有 14 是 7 的倍数）
  console.log(checkMultiple(16, 20)); // 预期输出: false（都不是 7 或 11 的倍数）
  console.log(checkMultiple(33, 11)); // 预期输出: true（只有 33 是 11 的倍数）
  console.log(checkMultiple(22, 7)); // 预期输出: true（只有 7 是 7 的倍数）
  console.log(checkMultiple(0, 11)); // 预期输出: true（只有 11 是 11 的倍数）
  console.log(checkMultiple(7, 11)); // 预期输出: true（7 是 7 的倍数，11 是 11 的倍数）
  console.log(checkMultiple(121, 77)); // 预期输出: false（两个都是 11 的倍数）
  console.log(checkMultiple(-14, 21)); // 预期输出: false（负数）
  console.log(checkMultiple(14.5, 21)); // 预期输出: false（非整数）
}

// 运行测试
testCheckMultiple();
