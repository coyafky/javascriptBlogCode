/**
 * 创建一个函数，该函数调用每个提供的函数并返回结果
 * 
 * @param {...Function} fns - 要调用的函数列表
 * @returns {Function} - 返回一个新函数，该函数接受参数并调用所有提供的函数
 */
function invokeWithArgs(...fns) {
    // 返回一个新函数，该函数接受任意数量的参数
    return function(...args) {
      // 使用 map 方法调用每个函数，并传入相同的参数
      return fns.map(fn => fn.apply(null, args));
    };
  }
  
  // 测试函数
  function testInvokeWithArgs() {
    // 示例函数 1：计算两数之和
    const sum = (a, b) => a + b;
  
    // 示例函数 2：计算两数之差
    const difference = (a, b) => a - b;
  
    // 示例函数 3：计算两数之积
    const product = (a, b) => a * b;
  
    // 示例函数 4：计算两数之商
    const quotient = (a, b) => a / b;
  
    // 创建组合函数
    const combinedFunction = invokeWithArgs(sum, difference, product, quotient);
  
    console.log("测试用例 1: 使用数字 5 和 3");
    console.log(combinedFunction(5, 3));
    // 预期输出: [8, 2, 15, 1.6666666666666667]
  
    console.log("\n测试用例 2: 使用数字 10 和 2");
    console.log(combinedFunction(10, 2));
    // 预期输出: [12, 8, 20, 5]
  
    // 示例函数 5：字符串连接
    const concatenate = (a, b) => `${a}${b}`;
  
    // 示例函数 6：检查是否相等
    const isEqual = (a, b) => a === b;
  
    // 创建新的组合函数
    const mixedFunction = invokeWithArgs(concatenate, isEqual, sum);
  
    console.log("\n测试用例 3: 使用字符串 'Hello' 和 'World'");
    console.log(mixedFunction('Hello', 'World'));
    // 预期输出: ['HelloWorld', false, 0]
  
    console.log("\n测试用例 4: 使用数字 5 和字符串 '5'");
    console.log(mixedFunction(5, '5'));
    // 预期输出: ['55', false, 10]
  
    // 示例函数 7：无参数函数
    const noArgs = () => "No arguments";
  
    // 创建包含无参数函数的组合函数
    const withNoArgsFunction = invokeWithArgs(noArgs, sum);
  
    console.log("\n测试用例 5: 调用无参数函数和有参数函数");
    console.log(withNoArgsFunction(3, 4));
    // 预期输出: ['No arguments', 7]
  }
  
  // 运行测试
  testInvokeWithArgs();
  