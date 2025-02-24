/**
 * 题目：将两位数的两个数字相加
 *
 * 编写一个 JavaScript 程序，将给定的两位正整数的两个数字相加。
 *
 * @param {number} num - 要处理的两位正整数
 * @returns {number} - 两个数字的和，如果输入无效则返回 null
 */
function addTwoDigits(num) {
  // 检查输入是否为数字
  if (typeof num !== "number") {
    return null;
  }

  // 检查输入是否为正整数
  if (!Number.isInteger(num) || num <= 0) {
    return null;
  }

  // 检查输入是否为两位数
  if (num < 10 || num > 99) {
    return null;
  }

  // 计算十位数和个位数的和
  const tens = Math.floor(num / 10);
  const ones = num % 10;
  return tens + ones;
}

// 测试函数
function testAddTwoDigits() {
  console.log(addTwoDigits(25)); // 预期输出: 7 (2 + 5)
  console.log(addTwoDigits(10)); // 预期输出: 1 (1 + 0)
  console.log(addTwoDigits(99)); // 预期输出: 18 (9 + 9)
  console.log(addTwoDigits(50)); // 预期输出: 5 (5 + 0)
  console.log(addTwoDigits(43)); // 预期输出: 7 (4 + 3)
  console.log(addTwoDigits(9)); // 预期输出: null (不是两位数)
  console.log(addTwoDigits(100)); // 预期输出: null (不是两位数)
  console.log(addTwoDigits(-25)); // 预期输出: null (不是正数)
  console.log(addTwoDigits(25.5)); // 预期输出: null (不是整数)
  console.log(addTwoDigits("25")); // 预期输出: null (不是数字类型)
  console.log(addTwoDigits(null)); // 预期输出: null
  console.log(addTwoDigits(undefined)); // 预期输出: null
  console.log(addTwoDigits(NaN)); // 预期输出: null
  console.log(addTwoDigits(Infinity)); // 预期输出: null
}

// 运行测试
testAddTwoDigits();
