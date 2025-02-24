/**
 * 创建一个自定义的 coalesce 函数
 *
 * @param {Function} validator - 参数验证函数
 * @returns {Function} - 自定义的 coalesce 函数
 */
function customCoalesce(validator) {
  // 返回一个新函数，该函数接受任意数量的参数
  return function (...args) {
    // 使用 find 方法遍历参数，返回第一个通过验证的参数
    return args.find(validator);
  };
}

// 测试函数
function testCustomCoalesce() {
  // 测试用例 1: 返回第一个非空字符串
  console.log("测试用例 1: 返回第一个非空字符串");
  const firstNonEmptyString = customCoalesce(
    (val) => typeof val === "string" && val.trim().length > 0
  );
  console.log(firstNonEmptyString("", null, "Hello", "World")); // 预期输出: 'Hello'
  console.log(firstNonEmptyString("", "  ", null, "Test")); // 预期输出: 'Test'

  // 测试用例 2: 返回第一个正数
  console.log("\n测试用例 2: 返回第一个正数");
  const firstPositiveNumber = customCoalesce(
    (val) => typeof val === "number" && val > 0
  );
  console.log(firstPositiveNumber(0, -3, 2, 4)); // 预期输出: 2
  console.log(firstPositiveNumber(-1, -2, -3, 5)); // 预期输出: 5

  // 测试用例 3: 返回第一个真值（除了 false、0、''、null、undefined 和 NaN）
  console.log("\n测试用例 3: 返回第一个真值");
  const firstTruthyValue = customCoalesce((val) => !!val);
  console.log(firstTruthyValue(0, null, false, "Hello", true)); // 预期输出: 'Hello'
  console.log(firstTruthyValue("", undefined, [], {}, NaN)); // 预期输出: []

  // 测试用例 4: 返回第一个偶数
  console.log("\n测试用例 4: 返回第一个偶数");
  const firstEvenNumber = customCoalesce(
    (val) => typeof val === "number" && val % 2 === 0
  );
  console.log(firstEvenNumber(1, 3, 5, 6, 7, 8)); // 预期输出: 6
  console.log(firstEvenNumber(1, 3, 5, 7, 9)); // 预期输出: undefined

  // 测试用例 5: 返回第一个长度大于 3 的数组
  console.log("\n测试用例 5: 返回第一个长度大于 3 的数组");
  const firstLongArray = customCoalesce(
    (val) => Array.isArray(val) && val.length > 3
  );
  console.log(firstLongArray([1, 2], [1, 2, 3], [1, 2, 3, 4])); // 预期输出: [1, 2, 3, 4]
  console.log(firstLongArray([1], [1, 2], [1, 2, 3])); // 预期输出: undefined

  // 测试用例 6: 空参数列表
  console.log("\n测试用例 6: 空参数列表");
  const anyValue = customCoalesce(() => true);
  console.log(anyValue()); // 预期输出: undefined
}

// 运行测试
testCustomCoalesce();
