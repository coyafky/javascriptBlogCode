/**
 * 计算数组的平均值，在计算前使用提供的函数对每个元素进行映射
 * @param {Array} arr - 要计算平均值的数组
 * @param {Function} fn - 用于映射数组元素的函数
 * @returns {number} - 映射后数组的平均值
 */
function averageWithMap(arr, fn) {
  // 检查数组是否为空
  if (arr.length === 0) {
    return 0; // 如果数组为空，返回0
  }

  // 使用map方法应用映射函数，然后使用reduce方法计算总和
  const sum = arr.map(fn).reduce((acc, val) => acc + val, 0);

  // 返回平均值
  return sum / arr.length;
}

// 测试函数
function testAverageWithMap() {
  console.log("测试用例 1: 数字数组，不做变换");
  console.log(averageWithMap([1, 2, 3, 4, 5], (x) => x)); // 预期输出: 3

  console.log("\n测试用例 2: 数字数组，每个元素平方");
  console.log(averageWithMap([1, 2, 3, 4, 5], (x) => x * x)); // 预期输出: 11

  console.log("\n测试用例 3: 对象数组，提取特定属性");
  const objects = [{ value: 10 }, { value: 20 }, { value: 30 }];
  console.log(averageWithMap(objects, (obj) => obj.value)); // 预期输出: 20

  console.log("\n测试用例 4: 字符串数组，转换为长度");
  console.log(averageWithMap(["a", "ab", "abc", "abcd"], (str) => str.length)); // 预期输出: 2.5

  console.log("\n测试用例 5: 空数组");
  console.log(averageWithMap([], (x) => x)); // 预期输出: 0

  console.log("\n测试用例 6: 数字数组，应用复杂函数");
  console.log(
    averageWithMap([1, 2, 3, 4, 5], (x) => (x % 2 === 0 ? x * 2 : x))
  ); // 预期输出: 3.8
}

// 运行测试
testAverageWithMap();
