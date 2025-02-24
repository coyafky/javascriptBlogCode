/**
 * 将函数柯里化
 *
 * @param {Function} fn - 要柯里化的函数
 * @returns {Function} - 柯里化后的函数
 */
function curry(fn) {
  // 获取原函数的参数个数
  const arity = fn.length;

  return function curried(...args) {
    // 如果传入的参数个数足够，就直接调用原函数
    if (args.length >= arity) {
      return fn(...args);
    } else {
      // 否则返回一个新的函数，等待更多的参数
      return function (...moreArgs) {
        // 递归调用 curried 函数，合并之前的参数和新的参数
        return curried(...args, ...moreArgs);
      };
    }
  };
}

// 测试函数
function testCurry() {
  // 测试用例 1: 柯里化一个接受三个参数的函数
  console.log("测试用例 1: 三参数函数");
  function sum(a, b, c) {
    return a + b + c;
  }
  const curriedSum = curry(sum);
  console.log(curriedSum(1)(2)(3)); // 预期输出: 6
  console.log(curriedSum(1, 2)(3)); // 预期输出: 6
  console.log(curriedSum(1)(2, 3)); // 预期输出: 6
  console.log(curriedSum(1, 2, 3)); // 预期输出: 6

  // 测试用例 2: 柯里化一个接受两个参数的函数
  console.log("\n测试用例 2: 两参数函数");
  function multiply(a, b) {
    return a * b;
  }
  const curriedMultiply = curry(multiply);
  console.log(curriedMultiply(2)(3)); // 预期输出: 6
  console.log(curriedMultiply(2, 3)); // 预期输出: 6

  // 测试用例 3: 柯里化一个接受一个参数的函数
  console.log("\n测试用例 3: 单参数函数");
  function square(x) {
    return x * x;
  }
  const curriedSquare = curry(square);
  console.log(curriedSquare(4)); // 预期输出: 16

  // 测试用例 4: 柯里化一个接受多个参数的函数
  console.log("\n测试用例 4: 多参数函数");
  function concat(a, b, c, d) {
    return `${a}_${b}_${c}_${d}`;
  }
  const curriedConcat = curry(concat);
  console.log(curriedConcat("a")("b")("c")("d")); // 预期输出: a_b_c_d
  console.log(curriedConcat("a", "b")("c")("d")); // 预期输出: a_b_c_d
  console.log(curriedConcat("a")("b", "c", "d")); // 预期输出: a_b_c_d

  // 测试用例 5: 柯里化一个无参数函数
  console.log("\n测试用例 5: 无参数函数");
  function greet() {
    return "Hello, world!";
  }
  const curriedGreet = curry(greet);
  console.log(curriedGreet()); // 预期输出: Hello, world!
}

// 运行测试
testCurry();
