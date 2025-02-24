/**
 * 从对象中移除指定键的键值对
 *
 * @param {Object} obj - 要处理的对象
 * @param {Array} keys - 要移除的键数组
 * @returns {Object} - 移除指定键后的新对象
 */
function removeKeys(obj, keys) {
  // 检查输入是否有效
  if (typeof obj !== "object" || obj === null || !Array.isArray(keys)) {
    return "Invalid input";
  }

  // 创建原对象的浅拷贝
  const newObj = { ...obj };

  // 遍历要移除的键数组
  keys.forEach((key) => {
    // 使用 delete 操作符移除键值对
    delete newObj[key];
  });

  // 返回处理后的新对象
  return newObj;
}

// 测试函数
function testRemoveKeys() {
  // 测试对象
  const testObj = {
    name: "John Doe",
    age: 30,
    city: "New York",
    job: "Developer",
    hobby: "Reading",
  };

  console.log("原始对象:");
  console.log(testObj);

  console.log("\n测试用例 1: 移除单个键");
  console.log(removeKeys(testObj, ["age"]));

  console.log("\n测试用例 2: 移除多个键");
  console.log(removeKeys(testObj, ["city", "job"]));

  console.log("\n测试用例 3: 移除不存在的键");
  console.log(removeKeys(testObj, ["country"]));

  console.log("\n测试用例 4: 移除存在和不存在的键的组合");
  console.log(removeKeys(testObj, ["name", "country", "hobby"]));

  console.log("\n测试用例 5: 空键数组");
  console.log(removeKeys(testObj, []));

  console.log("\n测试用例 6: 空对象");
  console.log(removeKeys({}, ["key"]));

  console.log("\n测试用例 7: 无效输入 - 非对象");
  console.log(removeKeys("not an object", ["key"]));

  console.log("\n测试用例 8: 无效输入 - 非数组键");
  console.log(removeKeys(testObj, "not an array"));

  console.log("\n原始对象（验证未被修改）:");
  console.log(testObj);
}

// 运行测试
testRemoveKeys();
