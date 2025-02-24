/**
 * 题目：找出数组中出现频率最高的数字
 *
 * 编写一个 JavaScript 程序，找出给定整数数组中出现频率最高的数字。
 * 如果有多个数字出现频率相同且为最高，则返回其中的最小值。
 *
 * @param {number[]} arr - 输入的整数数组
 * @returns {number|null} - 出现频率最高的数字，如果输入无效则返回 null
 */
function findMostFrequentNumber(arr) {
  // 检查输入是否为数组
  if (!Array.isArray(arr)) {
    return null;
  }

  // 检查数组是否为空
  if (arr.length === 0) {
    return null;
  }

  // 检查所有元素是否为整数
  if (!arr.every(Number.isInteger)) {
    return null;
  }

  // 创建一个对象来存储每个数字的出现次数
  const frequencyMap = {};

  // 遍历数组，统计每个数字的出现次数
  for (const num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  let maxFrequency = 0;
  let mostFrequentNumbers = [];

  // 找出最高频率和对应的数字
  for (const num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mostFrequentNumbers = [Number(num)];
    } else if (frequencyMap[num] === maxFrequency) {
      mostFrequentNumbers.push(Number(num));
    }
  }

  // 如果有多个最高频率的数字，返回其中的最小值
  return Math.min(...mostFrequentNumbers);
}

// 测试函数
function testFindMostFrequentNumber() {
  console.log(findMostFrequentNumber([1, 2, 3, 2, 4, 2, 5])); // 预期输出: 2
  console.log(findMostFrequentNumber([1, 1, 2, 2, 3, 3])); // 预期输出: 1
  console.log(findMostFrequentNumber([5, 5, 5, 5, 5])); // 预期输出: 5
  console.log(findMostFrequentNumber([1, 2, 3, 4, 5])); // 预期输出: 1
  console.log(findMostFrequentNumber([-1, -1, 0, 1, 1])); // 预期输出: -1
  console.log(findMostFrequentNumber([10, 20, 10, 20, 30, 20, 40])); // 预期输出: 20
  console.log(findMostFrequentNumber([1])); // 预期输出: 1
  console.log(findMostFrequentNumber([])); // 预期输出: null
  console.log(findMostFrequentNumber([1, 2, "3", 4, 5])); // 预期输出: null
  console.log(findMostFrequentNumber([1.5, 2, 3, 4, 5])); // 预期输出: null
  console.log(findMostFrequentNumber(123)); // 预期输出: null
  console.log(findMostFrequentNumber(null)); // 预期输出: null
  console.log(findMostFrequentNumber([NaN, 1, 2, 3])); // 预期输出: null
}

// 运行测试
testFindMostFrequentNumber();
