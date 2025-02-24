/**
 * 从键值对数组创建对象
 *
 * @param {Array} pairs - 键值对数组
 * @returns {Object} - 创建的对象
 */
function createObjectFromPairs(pairs) {
  // 检查输入是否为有效数组
  if (!Array.isArray(pairs)) {
    return "Invalid input: not an array";
  }

  // 使用 Object.fromEntries() 方法从键值对数组创建对象
  // 如果浏览器不支持 Object.fromEntries()，可以使用下面的注释代码替代
  return Object.fromEntries(pairs);

  // 替代方法：使用 reduce 方法
  // return pairs.reduce((obj, [key, value]) => {
  //   obj[key] = value;
  //   return obj;
  // }, {});
}

// 测试函数
function testCreateObjectFromPairs() {
  console.log("测试用例 1: 基本键值对");
  const basicPairs = [
    ["name", "John"],
    ["age", 30],
    ["city", "New York"],
  ];
  console.log(createObjectFromPairs(basicPairs));

  console.log("\n测试用例 2: 包含不同类型值的键值对");
  const mixedPairs = [
    ["string", "Hello"],
    ["number", 42],
    ["boolean", true],
    ["array", [1, 2, 3]],
    ["object", { x: 1, y: 2 }],
  ];
  console.log(createObjectFromPairs(mixedPairs));

  console.log("\n测试用例 3: 空数组");
  console.log(createObjectFromPairs([]));

  console.log("\n测试用例 4: 包含重复键的键值对");
  const duplicateKeys = [
    ["a", 1],
    ["b", 2],
    ["a", 3],
  ];
  console.log(createObjectFromPairs(duplicateKeys));

  console.log("\n测试用例 5: 无效输入 - 非数组");
  console.log(createObjectFromPairs("Not an array"));

  console.log("\n测试用例 6: 无效输入 - null");
  console.log(createObjectFromPairs(null));

  console.log("\n测试用例 7: 无效输入 - undefined");
  console.log(createObjectFromPairs(undefined));

  console.log("\n测试用例 8: 包含非双元素数组的键值对");
  const invalidPairs = [["a", 1], ["b"], ["c", 3, 4]];
  console.log(createObjectFromPairs(invalidPairs));

  console.log("\n测试用例 9: 使用 Symbol 作为键");
  const symbolKey = Symbol("key");
  const symbolPairs = [
    [symbolKey, "Symbol value"],
    ["regularKey", "Regular value"],
  ];
  console.log(createObjectFromPairs(symbolPairs));
}

// 运行测试
testCreateObjectFromPairs();
