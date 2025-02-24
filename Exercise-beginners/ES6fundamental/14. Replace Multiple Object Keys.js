/**
 * 替换对象中多个键的名称
 *
 * @param {Object} obj - 原始对象
 * @param {Object} keyMap - 键名映射对象，格式为 {旧键名: 新键名}
 * @returns {Object} - 替换键名后的新对象
 */
function replaceObjectKeys(obj, keyMap) {
  // 检查输入是否为对象
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return "Invalid input: first argument must be an object";
  }
  if (typeof keyMap !== "object" || keyMap === null || Array.isArray(keyMap)) {
    return "Invalid input: second argument must be an object";
  }

  // 创建一个新对象来存储结果
  const newObj = {};

  // 遍历原始对象的所有键
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 检查当前键是否在映射对象中
      if (key in keyMap) {
        // 如果在映射对象中，使用新的键名
        newObj[keyMap[key]] = obj[key];
      } else {
        // 如果不在映射对象中，保持原键名
        newObj[key] = obj[key];
      }
    }
  }

  return newObj;
}

// 测试函数
function testReplaceObjectKeys() {
  console.log("测试用例 1: 基本对象替换");
  const obj1 = { name: "John", age: 30, city: "New York" };
  const keyMap1 = { name: "fullName", age: "years" };
  console.log(replaceObjectKeys(obj1, keyMap1));
  // 预期输出: { fullName: 'John', years: 30, city: 'New York' }

  console.log("\n测试用例 2: 嵌套对象（注意：不处理嵌套对象的内部键）");
  const obj2 = { name: "Alice", details: { age: 25, country: "Canada" } };
  const keyMap2 = { name: "fullName", details: "info" };
  console.log(replaceObjectKeys(obj2, keyMap2));
  // 预期输出: { fullName: 'Alice', info: { age: 25, country: 'Canada' } }

  console.log("\n测试用例 3: 部分键不在映射中");
  const obj3 = { a: 1, b: 2, c: 3, d: 4 };
  const keyMap3 = { a: "x", c: "y" };
  console.log(replaceObjectKeys(obj3, keyMap3));
  // 预期输出: { x: 1, b: 2, y: 3, d: 4 }

  console.log("\n测试用例 4: 空对象");
  console.log(replaceObjectKeys({}, { a: "x" }));
  // 预期输出: {}

  console.log("\n测试用例 5: 空映射对象");
  console.log(replaceObjectKeys({ a: 1, b: 2 }, {}));
  // 预期输出: { a: 1, b: 2 }

  console.log("\n测试用例 6: 无效输入 - 第一个参数不是对象");
  console.log(replaceObjectKeys([1, 2, 3], { 0: "x" }));
  // 预期输出: "Invalid input: first argument must be an object"

  console.log("\n测试用例 7: 无效输入 - 第二个参数不是对象");
  console.log(replaceObjectKeys({ a: 1 }, [1, 2, 3]));
  // 预期输出: "Invalid input: second argument must be an object"
}

// 运行测试
testReplaceObjectKeys();
