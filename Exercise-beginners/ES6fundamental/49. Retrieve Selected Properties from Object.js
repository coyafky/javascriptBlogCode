/**
 * 从对象中检索指定的属性
 *
 * @param {Object} obj - 源对象
 * @param {Array} selectors - 属性选择器数组
 * @returns {Object} - 包含选中属性的新对象
 */
function getSelectedProperties(obj, selectors) {
  // 如果输入不是对象或选择器不是数组，返回空对象
  if (typeof obj !== "object" || obj === null || !Array.isArray(selectors)) {
    return {};
  }

  // 使用 reduce 方法构建结果对象
  return selectors.reduce((result, selector) => {
    // 如果选择器是字符串，直接获取对应属性
    if (typeof selector === "string") {
      if (obj.hasOwnProperty(selector)) {
        result[selector] = obj[selector];
      }
    }
    // 如果选择器是数组，处理嵌套属性
    else if (Array.isArray(selector)) {
      let value = obj;
      for (let key of selector) {
        if (value && typeof value === "object" && value.hasOwnProperty(key)) {
          value = value[key];
        } else {
          value = undefined;
          break;
        }
      }
      if (value !== undefined) {
        result[selector.join(".")] = value;
      }
    }
    return result;
  }, {});
}

// 测试函数
function testGetSelectedProperties() {
  const obj = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
    hobbies: ["reading", "swimming"],
    greet: function () {
      console.log("Hello!");
    },
  };

  console.log("测试用例 1: 获取基本属性");
  console.log(getSelectedProperties(obj, ["name", "age"]));
  // 预期输出: { name: 'John', age: 30 }

  console.log("\n测试用例 2: 获取嵌套属性");
  console.log(getSelectedProperties(obj, ["name", ["address", "city"]]));
  // 预期输出: { name: 'John', 'address.city': 'New York' }

  console.log("\n测试用例 3: 获取数组和函数属性");
  console.log(getSelectedProperties(obj, ["hobbies", "greet"]));
  // 预期输出: { hobbies: ['reading', 'swimming'], greet: [Function: greet] }

  console.log("\n测试用例 4: 尝试获取不存在的属性");
  console.log(
    getSelectedProperties(obj, ["name", "job", ["address", "zipcode"]])
  );
  // 预期输出: { name: 'John' }

  console.log("\n测试用例 5: 空选择器数组");
  console.log(getSelectedProperties(obj, []));
  // 预期输出: {}

  console.log("\n测试用例 6: 非对象输入");
  console.log(getSelectedProperties("not an object", ["length"]));
  // 预期输出: {}

  console.log("\n测试用例 7: null 输入");
  console.log(getSelectedProperties(null, ["prop"]));
  // 预期输出: {}

  console.log("\n测试用例 8: 非数组选择器");
  console.log(getSelectedProperties(obj, "name"));
  // 预期输出: {}
}

// 运行测试
testGetSelectedProperties();
