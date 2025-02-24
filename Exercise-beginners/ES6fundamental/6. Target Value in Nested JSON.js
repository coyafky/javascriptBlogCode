/**
 * 在嵌套的 JSON 对象中查找目标值
 *
 * @param {Object} obj - 要搜索的嵌套 JSON 对象
 * @param {string} key - 要查找的键
 * @returns {*} - 找到的值，如果未找到则返回 undefined
 */
function findValueByKey(obj, key) {
  // 基本情况：如果 obj 不是对象或为 null，返回 undefined
  if (typeof obj !== "object" || obj === null) {
    return undefined;
  }

  // 如果 key 直接存在于 obj 中，返回对应的值
  if (key in obj) {
    return obj[key];
  }

  // 递归搜索嵌套的对象
  for (let k in obj) {
    if (obj.hasOwnProperty(k) && typeof obj[k] === "object") {
      const result = findValueByKey(obj[k], key);
      if (result !== undefined) {
        return result;
      }
    }
  }

  // 如果没有找到，返回 undefined
  return undefined;
}

// 测试函数
function testFindValueByKey() {
  // 测试用例：嵌套的 JSON 对象
  const nestedObject = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: {
          g: 4,
        },
      },
      h: 5,
    },
    i: [6, 7, { j: 8 }],
  };

  console.log("测试用例 1: 查找存在的键");
  console.log("查找 'a':", findValueByKey(nestedObject, "a")); // 预期输出: 1
  console.log("查找 'e':", findValueByKey(nestedObject, "e")); // 预期输出: 3
  console.log("查找 'g':", findValueByKey(nestedObject, "g")); // 预期输出: 4
  console.log("查找 'h':", findValueByKey(nestedObject, "h")); // 预期输出: 5
  console.log("查找 'j':", findValueByKey(nestedObject, "j")); // 预期输出: 8

  console.log("\n测试用例 2: 查找不存在的键");
  console.log("查找 'k':", findValueByKey(nestedObject, "k")); // 预期输出: undefined

  console.log("\n测试用例 3: 在空对象中查找");
  console.log("查找 'a' in {}:", findValueByKey({}, "a")); // 预期输出: undefined

  console.log("\n测试用例 4: 在非对象中查找");
  console.log("查找 'a' in null:", findValueByKey(null, "a")); // 预期输出: undefined
  console.log("查找 'a' in 123:", findValueByKey(123, "a")); // 预期输出: undefined

  console.log("\n测试用例 5: 查找数组中的元素");
  console.log("查找索引 '1':", findValueByKey(nestedObject, "1")); // 预期输出: 7
}

// 运行测试
testFindValueByKey();
