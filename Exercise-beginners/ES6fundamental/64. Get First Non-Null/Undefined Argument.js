/**
 * 获取第一个非null/undefined的参数
 * @param {...any} args - 任意数量的参数
 * @returns {any} - 第一个非null/undefined的参数，如果所有参数都是null/undefined则返回undefined
 */
function getFirstValidArgument(...args) {
  // 使用find方法查找第一个非null/undefined的参数
  return args.find((arg) => arg != null);
}

// 测试函数
function testGetFirstValidArgument() {
  console.log("测试用例 1: 基本用例");
  console.log(getFirstValidArgument(null, undefined, "hello", "world"));
  // 预期输出: 'hello'

  console.log("\n测试用例 2: 所有参数都是null或undefined");
  console.log(getFirstValidArgument(null, undefined, null));
  // 预期输出: undefined

  console.log("\n测试用例 3: 包含falsy值但不是null/undefined");
  console.log(getFirstValidArgument(null, undefined, false, 0, ""));
  // 预期输出: false

  console.log("\n测试用例 4: 包含不同类型的有效值");
  console.log(
    getFirstValidArgument(undefined, null, 42, "string", { key: "value" })
  );
  // 预期输出: 42

  console.log("\n测试用例 5: 没有参数");
  console.log(getFirstValidArgument());
  // 预期输出: undefined

  console.log("\n测试用例 6: 包含NaN");
  console.log(getFirstValidArgument(null, NaN, undefined));
  // 预期输出: NaN
}

// 运行测试
testGetFirstValidArgument();
