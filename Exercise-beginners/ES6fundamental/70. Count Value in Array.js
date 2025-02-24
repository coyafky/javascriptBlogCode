/**
 * 计算数组中特定值的出现次数
 * @param {Array} arr - 要搜索的数组
 * @param {*} val - 要计数的值
 * @returns {number} - 值在数组中出现的次数
 */
function countValueInArray(arr, val) {
  // 使用reduce方法遍历数组并计数
  return arr.reduce((count, item) => {
    // 如果当前项与要计数的值相等，计数器加1
    return item === val ? count + 1 : count;
  }, 0);
}

// 测试函数
function testCountValueInArray() {
  console.log("测试用例1 - 计数数字：");
  const numbers = [1, 2, 3, 4, 1, 2, 1, 5];
  console.log(countValueInArray(numbers, 1)); // 预期输出: 3

  console.log("\n测试用例2 - 计数字符串：");
  const fruits = ["apple", "banana", "apple", "orange", "apple", "grape"];
  console.log(countValueInArray(fruits, "apple")); // 预期输出: 3

  console.log("\n测试用例3 - 计数布尔值：");
  const booleans = [true, false, true, true, false, true];
  console.log(countValueInArray(booleans, true)); // 预期输出: 4

  console.log("\n测试用例4 - 计数对象（引用比较）：");
  const obj = { id: 1 };
  const objects = [obj, { id: 2 }, obj, { id: 3 }, obj];
  console.log(countValueInArray(objects, obj)); // 预期输出: 3

  console.log("\n测试用例5 - 计数不存在的值：");
  const mixed = [1, "a", true, null, undefined];
  console.log(countValueInArray(mixed, "b")); // 预期输出: 0

  console.log("\n测试用例6 - 空数组：");
  console.log(countValueInArray([], 5)); // 预期输出: 0

  console.log("\n测试用例7 - 计数NaN：");
  const withNaN = [1, NaN, 2, NaN, 3, NaN];
  console.log(countValueInArray(withNaN, NaN)); // 预期输出: 0（注意：NaN !== NaN）
}

// 运行测试
testCountValueInArray();
