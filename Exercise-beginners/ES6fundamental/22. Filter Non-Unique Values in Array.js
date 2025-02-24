/**
 * 过滤数组中的非唯一值
 *
 * @param {Array} arr - 输入数组
 * @returns {Array} - 只包含唯一值的新数组
 */
function filterUniqueValues(arr) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return "Invalid input: argument must be an array";
  }

  // 使用 filter 方法和 indexOf 方法过滤唯一值
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === self.lastIndexOf(value);
  });
}

// 测试函数
function testFilterUniqueValues() {
  console.log("测试用例 1: 包含重复数字的数组");
  console.log(filterUniqueValues([1, 2, 2, 3, 4, 4, 5]));
  // 预期输出: [1, 3, 5]

  console.log("\n测试用例 2: 包含重复字符串的数组");
  console.log(filterUniqueValues(["a", "b", "b", "c", "d", "d"]));
  // 预期输出: ['a', 'c']

  console.log("\n测试用例 3: 混合类型的数组");
  console.log(filterUniqueValues([1, "a", 1, "a", 2, "b", 2, "c"]));
  // 预期输出: ['b', 'c']

  console.log("\n测试用例 4: 全部唯一值的数组");
  console.log(filterUniqueValues([1, 2, 3, 4, 5]));
  // 预期输出: [1, 2, 3, 4, 5]

  console.log("\n测试用例 5: 全部重复值的数组");
  console.log(filterUniqueValues([1, 1, 1, 1, 1]));
  // 预期输出: []

  console.log("\n测试用例 6: 空数组");
  console.log(filterUniqueValues([]));
  // 预期输出: []

  console.log("\n测试用例 7: 包含对象的数组（注意：对象比较是基于引用的）");
  console.log(filterUniqueValues([{ a: 1 }, { b: 2 }, { a: 1 }, { c: 3 }]));
  // 预期输出: [{a: 1}, {b: 2}, {a: 1}, {c: 3}]

  console.log("\n测试用例 8: 无效输入 - 不是数组");
  console.log(filterUniqueValues("not an array"));
  // 预期输出: "Invalid input: argument must be an array"
}

// 运行测试
testFilterUniqueValues();
