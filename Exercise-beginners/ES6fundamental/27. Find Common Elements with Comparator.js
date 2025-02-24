/**
 * 使用比较器函数在两个数组中查找共同元素
 *
 * @param {Array} arr1 - 第一个输入数组
 * @param {Array} arr2 - 第二个输入数组
 * @param {Function} comparator - 比较器函数，用于比较元素
 * @returns {Array} - 包含共同元素的新数组
 */
function findCommonElements(arr1, arr2, comparator) {
  // 检查输入是否为数组
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid input: first two arguments must be arrays";
  }

  // 检查比较器是否为函数
  if (typeof comparator !== "function") {
    return "Invalid input: third argument must be a function";
  }

  // 使用 filter 方法和 some 方法查找共同元素
  return arr1.filter((item1) => arr2.some((item2) => comparator(item1, item2)));
}

// 测试函数
function testFindCommonElements() {
  // 简单的相等比较器
  const simpleComparator = (a, b) => a === b;

  // 对象比较器（比较 id 属性）
  const objectComparator = (a, b) => a.id === b.id;

  console.log("测试用例 1: 简单数组比较");
  console.log(findCommonElements([1, 2, 3, 4], [2, 4, 6, 8], simpleComparator));
  // 预期输出: [2, 4]

  console.log("\n测试用例 2: 字符串数组比较");
  console.log(
    findCommonElements(["a", "b", "c"], ["b", "c", "d"], simpleComparator)
  );
  // 预期输出: ['b', 'c']

  console.log("\n测试用例 3: 对象数组比较");
  const arr1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  const arr2 = [
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
  ];
  console.log(findCommonElements(arr1, arr2, objectComparator));
  // 预期输出: [{id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}]

  console.log("\n测试用例 4: 自定义比较器（比较绝对值）");
  const absComparator = (a, b) => Math.abs(a) === Math.abs(b);
  console.log(
    findCommonElements([1, -2, 3, -4], [2, -3, 4, -5], absComparator)
  );
  // 预期输出: [1, -2, 3, -4]

  console.log("\n测试用例 5: 空数组");
  console.log(findCommonElements([], [1, 2, 3], simpleComparator));
  // 预期输出: []

  console.log("\n测试用例 6: 无共同元素");
  console.log(findCommonElements([1, 2, 3], [4, 5, 6], simpleComparator));
  // 预期输出: []

  console.log("\n测试用例 7: 无效输入 - 非数组参数");
  console.log(findCommonElements("not an array", [1, 2, 3], simpleComparator));
  // 预期输出: "Invalid input: first two arguments must be arrays"

  console.log("\n测试用例 8: 无效输入 - 非函数比较器");
  console.log(findCommonElements([1, 2, 3], [2, 3, 4], "not a function"));
  // 预期输出: "Invalid input: third argument must be a function"
}

// 运行测试
testFindCommonElements();
