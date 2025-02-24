/**
 * 题目：比较对象的等价属性
 *
 * 编写一个 JavaScript 程序，比较两个对象，判断第一个对象是否包含
 * 与第二个对象等价的属性值。
 *
 * @param {Object} obj1 - 第一个对象
 * @param {Object} obj2 - 第二个对象
 * @returns {boolean} - 如果第一个对象包含第二个对象的所有属性值，返回 true；否则返回 false
 */
function compareObjects(obj1, obj2) {
  // 检查输入是否为对象
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  // 遍历 obj2 的所有属性
  for (let key in obj2) {
    // 检查 obj1 是否包含 obj2 的当前属性
    if (obj2.hasOwnProperty(key)) {
      if (!obj1.hasOwnProperty(key)) {
        return false;
      }

      // 如果属性值是对象，递归比较
      if (typeof obj2[key] === "object" && obj2[key] !== null) {
        if (!compareObjects(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        // 如果属性值不相等，返回 false
        return false;
      }
    }
  }

  // 所有属性都匹配，返回 true
  return true;
}

// 测试函数
function testCompareObjects() {
  console.log(compareObjects({ a: 1, b: 2 }, { a: 1 })); // 预期输出: true
  console.log(compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 })); // 预期输出: true
  console.log(compareObjects({ a: 1, b: 2 }, { a: 1, b: 3 })); // 预期输出: false
  console.log(compareObjects({ a: 1, b: 2 }, { a: 1, c: 3 })); // 预期输出: false
  console.log(compareObjects({ a: { b: 2 } }, { a: { b: 2 } })); // 预期输出: true
  console.log(compareObjects({ a: { b: 2 } }, { a: { b: 3 } })); // 预期输出: false
  console.log(compareObjects({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 })); // 预期输出: true
  console.log(compareObjects({}, {})); // 预期输出: true
  console.log(compareObjects({ a: undefined }, { b: undefined })); // 预期输出: false
  console.log(compareObjects({ a: null }, { a: null })); // 预期输出: true
  console.log(compareObjects({ a: [1, 2] }, { a: [1, 2] })); // 预期输出: true
  console.log(compareObjects({ a: [1, 2] }, { a: [1, 3] })); // 预期输出: false
  console.log(compareObjects(null, {})); // 预期输出: false
  console.log(compareObjects({}, null)); // 预期输出: false
  console.log(compareObjects("string", {})); // 预期输出: false
}

// 运行测试
testCompareObjects();
