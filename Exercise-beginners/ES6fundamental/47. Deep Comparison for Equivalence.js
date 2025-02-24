/**
 * 深度比较两个值是否等价
 *
 * @param {*} a - 第一个要比较的值
 * @param {*} b - 第二个要比较的值
 * @returns {boolean} - 如果两个值等价则返回 true，否则返回 false
 */
function deepEqual(a, b) {
  // 如果 a 和 b 完全相等（包括 NaN 的情况），返回 true
  if (a === b || (Number.isNaN(a) && Number.isNaN(b))) {
    return true;
  }

  // 如果 a 或 b 是原始类型或 null，或者类型不同，返回 false
  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  ) {
    return false;
  }

  // 获取 a 和 b 的所有属性名
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // 如果属性数量不同，返回 false
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 递归比较每个属性
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  // 所有检查都通过，返回 true
  return true;
}

// 测试函数
function testDeepEqual() {
  console.log("测试用例 1: 基本类型");
  console.log(deepEqual(1, 1)); // 预期输出: true
  console.log(deepEqual("hello", "hello")); // 预期输出: true
  console.log(deepEqual(1, "1")); // 预期输出: false

  console.log("\n测试用例 2: 数组");
  console.log(deepEqual([1, 2, 3], [1, 2, 3])); // 预期输出: true
  console.log(deepEqual([1, 2, 3], [1, 2, 4])); // 预期输出: false
  console.log(deepEqual([1, 2, 3], [1, 2, 3, 4])); // 预期输出: false

  console.log("\n测试用例 3: 对象");
  console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // 预期输出: true
  console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // 预期输出: true
  console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // 预期输出: false

  console.log("\n测试用例 4: 嵌套对象");
  console.log(deepEqual({ a: { b: 1 } }, { a: { b: 1 } })); // 预期输出: true
  console.log(deepEqual({ a: { b: 1 } }, { a: { b: 2 } })); // 预期输出: false

  console.log("\n测试用例 5: 特殊值");
  console.log(deepEqual(null, null)); // 预期输出: true
  console.log(deepEqual(undefined, undefined)); // 预期输出: true
  console.log(deepEqual(NaN, NaN)); // 预期输出: true

  console.log("\n测试用例 6: 混合类型");
  console.log(
    deepEqual({ a: 1, b: [1, 2, { c: 3 }] }, { a: 1, b: [1, 2, { c: 3 }] })
  ); // 预期输出: true
  console.log(
    deepEqual({ a: 1, b: [1, 2, { c: 3 }] }, { a: 1, b: [1, 2, { c: 4 }] })
  ); // 预期输出: false

  console.log("\n测试用例 7: 函数");
  const func1 = () => {};
  const func2 = () => {};
  console.log(deepEqual(func1, func1)); // 预期输出: true
  console.log(deepEqual(func1, func2)); // 预期输出: false

  console.log("\n测试用例 8: 循环引用");
  const obj1 = { a: 1 };
  obj1.b = obj1;
  const obj2 = { a: 1 };
  obj2.b = obj2;
  console.log(deepEqual(obj1, obj2)); // 预期输出: true
}

// 运行测试
testDeepEqual();
