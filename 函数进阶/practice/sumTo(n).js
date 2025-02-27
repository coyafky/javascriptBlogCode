// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/sumToDemo.js

// 1. 使用循环的方法
function sumToLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// 2. 使用递归的方法
function sumToRecursive(n) {
  if (n === 1) return 1;
  return n + sumToRecursive(n - 1);
}

// 3. 使用等差数列求和公式的方法
function sumToFormula(n) {
  return (n * (n + 1)) / 2;
}

// 测试函数
function testSumTo(n) {
  console.log(`计算 1 到 ${n} 的和：`);

  console.time("循环方法");
  let loopResult = sumToLoop(n);
  console.timeEnd("循环方法");
  console.log(`循环方法结果: ${loopResult}`);

  console.time("递归方法");
  let recursiveResult = sumToRecursive(n);
  console.timeEnd("递归方法");
  console.log(`递归方法结果: ${recursiveResult}`);

  console.time("公式方法");
  let formulaResult = sumToFormula(n);
  console.timeEnd("公式方法");
  console.log(`公式方法结果: ${formulaResult}`);

  console.log("------------------------");
}

// 执行测试
testSumTo(10);
testSumTo(100);
testSumTo(1000);
testSumTo(10000);
