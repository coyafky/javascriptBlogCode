/**
 * 将接受数组的函数转换为可变参数函数
 *
 * @param {Function} fn - 原始函数，接受一个数组作为参数
 * @returns {Function} - 转换后的可变参数函数
 */
function toVariadic(fn) {
  // 返回一个新函数，该函数接受任意数量的参数
  return function (...args) {
    // 如果只传入一个参数且该参数是数组，则直接使用该数组
    // 否则，使用所有传入的参数组成的数组
    const argsArray =
      args.length === 1 && Array.isArray(args[0]) ? args[0] : args;

    // 调用原始函数，并传入处理后的参数数组
    return fn(argsArray);
  };
}

// 测试函数
function testToVariadic() {
  // 示例函数：计算数组元素的和
  function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
  }

  // 将 sum 函数转换为可变参数函数
  const variadicSum = toVariadic(sum);

  console.log("测试用例 1: 传入多个独立参数");
  console.log(variadicSum(1, 2, 3, 4)); // 预期输出: 10

  console.log("\n测试用例 2: 传入数组");
  console.log(variadicSum([1, 2, 3, 4, 5])); // 预期输出: 15

  console.log("\n测试用例 3: 不传参数");
  console.log(variadicSum()); // 预期输出: 0

  console.log("\n测试用例 4: 传入单个数字");
  console.log(variadicSum(5)); // 预期输出: 5

  // 示例函数：找出数组中的最大值
  function max(arr) {
    return Math.max(...arr);
  }

  // 将 max 函数转换为可变参数函数
  const variadicMax = toVariadic(max);

  console.log("\n测试用例 5: 找出最大值（多个独立参数）");
  console.log(variadicMax(3, 7, 2, 9, 1)); // 预期输出: 9

  console.log("\n测试用例 6: 找出最大值（数组参数）");
  console.log(variadicMax([10, 5, 8, 3])); // 预期输出: 10

  // 示例函数：连接字符串数组
  function concatenate(arr) {
    return arr.join(" ");
  }

  // 将 concatenate 函数转换为可变参数函数
  const variadicConcatenate = toVariadic(concatenate);

  console.log("\n测试用例 7: 连接字符串（多个独立参数）");
  console.log(variadicConcatenate("Hello", "world", "!")); // 预期输出: "Hello world !"

  console.log("\n测试用例 8: 连接字符串（数组参数）");
  console.log(variadicConcatenate(["JavaScript", "is", "awesome"])); // 预期输出: "JavaScript is awesome"
}

// 运行测试
testToVariadic();
