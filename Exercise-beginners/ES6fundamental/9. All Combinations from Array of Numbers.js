/**
 * 生成给定数组中所有数字的组合
 *
 * @param {number[]} arr - 输入的数字数组
 * @returns {number[][]} - 所有可能的组合数组
 */
function generateAllCombinations(arr) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return "Invalid input: not an array";
  }

  // 过滤掉非数字元素
  const numbers = arr.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  // 如果没有有效数字，返回空数组
  if (numbers.length === 0) {
    return [];
  }

  // 使用递归生成所有组合
  const combinations = [];

  function backtrack(start, current) {
    // 递归终止条件：到达数组末尾，将当前组合添加到结果数组
    
    combinations.push([...current]);
   //start 参数表示当前考虑的起始索引。
    //current 参数表示当前的组合。

    for (let i = start; i < numbers.length; i++) {
      current.push(numbers[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);

  // 移除空数组（如果不需要包含空组合，可以保留这行）
  return combinations.slice(1);
}

// 测试函数
function testGenerateAllCombinations() {
  console.log("测试用例 1: 基本数组");
  console.log(generateAllCombinations([1, 2, 3]));
  // 预期输出: [[1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]

  console.log("\n测试用例 2: 包含重复数字");
  console.log(generateAllCombinations([1, 2, 2]));
  // 预期输出: [[1], [1,2], [1,2,2], [2], [2,2]]

  console.log("\n测试用例 3: 单个数字");
  console.log(generateAllCombinations([5]));
  // 预期输出: [[5]]

  console.log("\n测试用例 4: 空数组");
  console.log(generateAllCombinations([]));
  // 预期输出: []

  console.log("\n测试用例 5: 包含非数字元素");
  console.log(generateAllCombinations([1, "a", 2, null, 3]));
  // 预期输出: [[1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]

  console.log("\n测试用例 6: 大数组");
  console.log(generateAllCombinations([1, 2, 3, 4, 5]).length);
  // 预期输出: 31 (2^5 - 1，不包括空集)

  console.log("\n测试用例 7: 无效输入");
  console.log(generateAllCombinations("not an array"));
  // 预期输出: Invalid input: not an array
}

// 运行测试
testGenerateAllCombinations();
