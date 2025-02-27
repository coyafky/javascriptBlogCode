// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/factorialDemo.js

/**
 * 递归计算阶乘
 * @param {number} n - 要计算阶乘的非负整数
 * @returns {number} n的阶乘
 */
function factorial(n) {
  // 基本情况：0的阶乘和1的阶乘都是1
  if (n === 0 || n === 1) {
    return 1;
  }

  // 递归情况：n! = n * (n-1)!
  return n * factorial(n - 1);
}

// 测试函数
function testFactorial() {
  const testCases = [0, 1, 2, 3, 4, 5, 10];

  for (let n of testCases) {
    console.log(`${n}! = ${factorial(n)}`);
  }
}

// 运行测试
testFactorial();

// 额外的测试：计算较大数的阶乘
console.log("\n计算较大数的阶乘：");
console.log(`20! = ${factorial(20)}`);

// 注意：JavaScript 中的数字精度限制
console.log("\n注意：由于 JavaScript 的数字精度限制，超大阶乘可能不准确");
console.log(`100! 的最后几位数字 = ${factorial(100) % 1000000000000}`);
