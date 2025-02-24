/**
 * 从右到左组合函数
 * @param {...Function} fns - 要组合的函数
 * @returns {Function} - 组合后的函数
 */
function composeRight(...fns) {
  // 返回一个新函数，该函数接受任意数量的参数
  return function (...args) {
    // 从右到左依次执行函数
    return fns.reduceRight((result, fn) => {
      // 如果result是数组，则使用扩展运算符将其展开作为参数
      return Array.isArray(result) ? fn(...result) : fn(result);
    }, args);
  };
}

// 测试函数
function testComposeRight() {
  // 定义一些简单的函数用于测试
  const double = (x) => x * 2;
  const square = (x) => x * x;
  const addOne = (x) => x + 1;
  const sum = (x, y) => x + y;

  console.log("测试用例 1: 基本函数组合");
  const composed1 = composeRight(addOne, square, double);
  console.log(composed1(3)); // 预期输出: 19 (((3 * 2)^2) + 1)

  console.log("\n测试用例 2: 多参数函数");
  const composed2 = composeRight(square, sum);
  console.log(composed2(2, 3)); // 预期输出: 25 ((2 + 3)^2)

  console.log("\n测试用例 3: 单个函数");
  const composed3 = composeRight(double);
  console.log(composed3(5)); // 预期输出: 10

  console.log("\n测试用例 4: 无函数组合");
  const composed4 = composeRight();
  console.log(composed4(1, 2, 3)); // 预期输出: [1, 2, 3]

  console.log("\n测试用例 5: 字符串操作");
  const toUpper = (str) => str.toUpperCase();
  const exclaim = (str) => str + "!";
  const composed5 = composeRight(exclaim, toUpper);
  console.log(composed5("hello")); // 预期输出: HELLO!

  console.log("\n测试用例 6: 复杂组合");
  const splitWords = (str) => str.split(" ");
  const countWords = (arr) => arr.length;
  const composed6 = composeRight(addOne, countWords, splitWords, toUpper);
  console.log(composed6("hello world")); // 预期输出: 3
}

// 运行测试
testComposeRight();
