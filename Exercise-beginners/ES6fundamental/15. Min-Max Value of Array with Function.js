/**
 * 返回数组的最小-最大值，使用提供的函数作为比较规则
 *
 * @param {Array} arr - 输入数组
 * @param {Function} fn - 比较函数，用于设置比较规则
 * @returns {Array} - 包含最小值和最大值的数组
 */
function minMaxWithFunction(arr, fn) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return "Invalid input: first argument must be an array";
  }

  // 检查输入数组是否为空
  if (arr.length === 0) {
    return "Array is empty";
  }

  // 检查fn是否为函数
  if (typeof fn !== "function") {
    return "Invalid input: second argument must be a function";
  }

  // 使用 map 应用比较函数到数组的每个元素
  const mappedArr = arr.map(fn);

  // 找出映射后数组的最小值和最大值的索引
  const minIndex = mappedArr.indexOf(Math.min(...mappedArr));
  const maxIndex = mappedArr.indexOf(Math.max(...mappedArr));

  // 返回原数组中对应的最小值和最大值
  return [arr[minIndex], arr[maxIndex]];
}

// 测试函数
function testMinMaxWithFunction() {
  console.log("测试用例 1: 数字数组，使用默认比较");
  console.log(minMaxWithFunction([1, 2, 3, 4, 5], (x) => x));
  // 预期输出: [1, 5]

  console.log("\n测试用例 2: 对象数组，比较特定属性");
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
  ];
  console.log(minMaxWithFunction(people, (person) => person.age));
  // 预期输出: [{ name: 'Charlie', age: 20 }, { name: 'Bob', age: 30 }]

  console.log("\n测试用例 3: 字符串数组，比较长度");
  console.log(
    minMaxWithFunction(["apple", "banana", "cherry"], (str) => str.length)
  );
  // 预期输出: ['apple', 'banana']

  console.log("\n测试用例 4: 数字数组，使用自定义比较规则");
  console.log(minMaxWithFunction([1, 2, 3, 4, 5], (x) => Math.abs(x - 3)));
  // 预期输出: [3, 5] (或 [3, 1]，取决于实现)

  console.log("\n测试用例 5: 空数组");
  console.log(minMaxWithFunction([], (x) => x));
  // 预期输出: "Array is empty"

  console.log("\n测试用例 6: 无效输入 - 第一个参数不是数组");
  console.log(minMaxWithFunction("not an array", (x) => x));
  // 预期输出: "Invalid input: first argument must be an array"

  console.log("\n测试用例 7: 无效输入 - 第二个参数不是函数");
  console.log(minMaxWithFunction([1, 2, 3], "not a function"));
  // 预期输出: "Invalid input: second argument must be a function"
}

// 运行测试
testMinMaxWithFunction();
