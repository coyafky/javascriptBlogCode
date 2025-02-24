/**
 * 测量函数执行时间的高阶函数
 *
 * @param {Function} fn - 要测量的函数
 * @returns {Function} - 包装后的函数，执行原函数并输出执行时间
 */
function measureExecutionTime(fn) {
  return function (...args) {
    // 记录开始时间
    const start = performance.now();

    // 执行原函数
    const result = fn.apply(this, args);

    // 记录结束时间
    const end = performance.now();

    // 计算执行时间（毫秒）
    const executionTime = end - start;

    // 输出执行时间
    console.log(`函数 ${fn.name} 的执行时间: ${executionTime.toFixed(2)} 毫秒`);

    // 返回原函数的结果
    return result;
  };
}

// 测试函数
function testMeasureExecutionTime() {
  // 示例 1: 简单的同步函数
  function simpleFunction(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += i;
    }
    return sum;
  }
  const measuredSimpleFunction = measureExecutionTime(simpleFunction);
  console.log("示例 1 结果:", measuredSimpleFunction(1000000));

  // 示例 2: 包含异步操作的函数
  async function asyncFunction(delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    return "异步操作完成";
  }
  const measuredAsyncFunction = measureExecutionTime(asyncFunction);
  measuredAsyncFunction(1000).then((result) =>
    console.log("示例 2 结果:", result)
  );

  // 示例 3: 递归函数
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  const measuredFibonacci = measureExecutionTime(fibonacci);
  console.log("示例 3 结果:", measuredFibonacci(30));

  // 示例 4: 使用外部 API 的函数
  async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }
  const measuredFetchData = measureExecutionTime(fetchData);
  measuredFetchData("https://api.github.com/users/github")
    .then((data) => console.log("示例 4 结果:", data.name))
    .catch((error) => console.error("示例 4 错误:", error));
}

// 运行测试
testMeasureExecutionTime();
