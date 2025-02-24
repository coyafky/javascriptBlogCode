/**
 * 从给定的数组创建所有可能的配对
 *
 * @param {...Array} arrays - 输入数组（可以是多个）
 * @returns {Array} - 包含所有可能配对的新数组
 */
function createAllPairs(...arrays) {
  // 检查是否至少有两个数组
  if (arrays.length < 2) {
    return "Invalid input: at least two arrays are required";
  }

  // 检查所有输入是否都是数组
  if (!arrays.every(Array.isArray)) {
    return "Invalid input: all arguments must be arrays";
  }

  // 使用递归方法生成所有可能的配对
  function generatePairs(current, remaining) {
    if (remaining.length === 0) {
      return [current];
    }

    const [first, ...rest] = remaining;
    return first.flatMap((item) => generatePairs([...current, item], rest));
  }

  return generatePairs([], arrays);
}

// 测试函数
function testCreateAllPairs() {
  console.log("测试用例 1: 两个数组的配对");
  console.log(createAllPairs([1, 2], ["a", "b"]));
  // 预期输出: [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

  console.log("\n测试用例 2: 三个数组的配对");
  console.log(createAllPairs([1, 2], ["a", "b"], [true, false]));
  // 预期输出: [
  //   [1, 'a', true], [1, 'a', false],
  //   [1, 'b', true], [1, 'b', false],
  //   [2, 'a', true], [2, 'a', false],
  //   [2, 'b', true], [2, 'b', false]
  // ]

  console.log("\n测试用例 3: 包含空数组");
  console.log(createAllPairs([1, 2], [], ["a", "b"]));
  // 预期输出: [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

  console.log("\n测试用例 4: 单个元素数组");
  console.log(createAllPairs([1], ["a"], [true]));
  // 预期输出: [[1, 'a', true]]

  console.log("\n测试用例 5: 只有一个数组");
  console.log(createAllPairs([1, 2, 3]));
  // 预期输出: "Invalid input: at least two arrays are required"

  console.log("\n测试用例 6: 无效输入 - 非数组参数");
  console.log(createAllPairs([1, 2], "not an array", [3, 4]));
  // 预期输出: "Invalid input: all arguments must be arrays"

  console.log("\n测试用例 7: 大量组合");
  console.log(createAllPairs([1, 2], ["a", "b"], [true, false], ["x", "y"]));
  // 预期输出: 16个组合的数组
}

// 运行测试
testCreateAllPairs();
