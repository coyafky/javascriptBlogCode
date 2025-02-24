/**
 * 题目：检查两个整数相对于给定除数是否相似
 *
 * 编写一个 JavaScript 程序，接受两个整数和一个除数。
 * 如果给定的除数能同时整除这两个整数或同时不能整除这两个整数，则认为这两个整数是相似的。
 *
 * @param {number} num1 - 第一个整数
 * @param {number} num2 - 第二个整数
 * @param {number} divisor - 除数
 * @returns {boolean} - 如果两个整数相似返回 true，否则返回 false；如果输入无效则返回 null
 */
function areSimilarIntegers(num1, num2, divisor) {
  // 检查输入是否为整数
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    !Number.isInteger(divisor)
  ) {
    return null;
  }

  // 检查除数是否为零
  if (divisor === 0) {
    return null;
  }

  // 检查两个数是否都能被除数整除，或都不能被除数整除
  const isDivisibleNum1 = num1 % divisor === 0;
  const isDivisibleNum2 = num2 % divisor === 0;

  return isDivisibleNum1 === isDivisibleNum2;
}

// 测试函数
function testAreSimilarIntegers() {
  console.log(areSimilarIntegers(10, 15, 5)); // 预期输出: true (都能被5整除)
  console.log(areSimilarIntegers(10, 15, 3)); // 预期输出: false (10不能被3整除，但15可以)
  console.log(areSimilarIntegers(10, 15, 4)); // 预期输出: true (都不能被4整除)
  console.log(areSimilarIntegers(10, 15, 1)); // 预期输出: true (都能被1整除)
  console.log(areSimilarIntegers(-10, -15, 5)); // 预期输出: true (都能被5整除)
  console.log(areSimilarIntegers(10, -15, 5)); // 预期输出: true (都能被5整除)
  console.log(areSimilarIntegers(0, 0, 5)); // 预期输出: true (都能被5整除)
  console.log(areSimilarIntegers(10, 15, 0)); // 预期输出: null (除数不能为0)
  console.log(areSimilarIntegers(10.5, 15, 5)); // 预期输出: null (输入必须是整数)
  console.log(areSimilarIntegers(10, "15", 5)); // 预期输出: null (输入必须是整数)
  console.log(areSimilarIntegers(10, 15, 2.5)); // 预期输出: null (除数必须是整数)
  console.log(areSimilarIntegers(NaN, 15, 5)); // 预期输出: null (输入无效)
  console.log(areSimilarIntegers(10, Infinity, 5)); // 预期输出: null (输入无效)
}

// 运行测试
testAreSimilarIntegers();
