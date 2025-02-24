/**
 * 创建一个函数，该函数应用分支函数到参数，然后将结果传递给收敛函数
 * @param {Function} convergingFn - 收敛函数，接收分支函数的结果作为参数
 * @param {Function[]} branchingFns - 分支函数数组，每个函数应用于原始参数
 * @returns {Function} - 返回一个新函数，该函数组合了分支函数和收敛函数
 */
function converge(convergingFn, branchingFns) {
  return function (...args) {
    // 应用每个分支函数到参数，并收集结果
    const branchResults = branchingFns.map((fn) => fn(...args));
    // 将分支函数的结果传递给收敛函数
    return convergingFn(...branchResults);
  };
}

// 测试函数
function testConverge() {
  // 测试用例1：计算平均值
  const average = converge(
    (sum, count) => sum / count,
    [
      (numbers) => numbers.reduce((a, b) => a + b, 0),
      (numbers) => numbers.length,
    ]
  );
  console.log("测试用例1 - 计算平均值:");
  console.log(average(1, 2, 3, 4, 5)); // 预期输出: 3

  // 测试用例2：字符串处理
  const createSentence = converge(
    (subject, verb, object) => `${subject} ${verb} ${object}`,
    [
      ([s]) => s.toUpperCase(),
      ([, v]) => v.toLowerCase(),
      ([, , o]) => o.toLowerCase(),
    ]
  );
  console.log("\n测试用例2 - 创建句子:");
  console.log(createSentence("I", "LOVE", "JAVASCRIPT")); // 预期输出: "I love javascript"

  // 测试用例3：数学运算
  const calculateExpression = converge(
    (sum, product) => `Sum: ${sum}, Product: ${product}`,
    [
      (numbers) => numbers.reduce((a, b) => a + b, 0),
      (numbers) => numbers.reduce((a, b) => a * b, 1),
    ]
  );
  console.log("\n测试用例3 - 数学运算:");
  console.log(calculateExpression(1, 2, 3, 4)); // 预期输出: "Sum: 10, Product: 24"

  // 测试用例4：对象处理
  const processObject = converge(
    (keys, values) =>
      keys.reduce((obj, key, index) => {
        obj[key.toUpperCase()] = values[index];
        return obj;
      }, {}),
    [(obj) => Object.keys(obj), (obj) => Object.values(obj)]
  );
  console.log("\n测试用例4 - 对象处理:");
  console.log(processObject({ name: "Alice", age: 30 })); // 预期输出: {NAME: "Alice", AGE: 30}
}

// 运行测试
testConverge();
