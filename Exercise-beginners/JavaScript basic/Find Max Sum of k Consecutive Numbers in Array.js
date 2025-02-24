/**
 * 题目：找出数组中相邻元素的最大差值
 * 
 * 编写一个 JavaScript 程序，找出给定整数数组中任意两个相邻元素之间的最大差值。
 * 
 * @param {number[]} arr - 输入的整数数组
 * @returns {number|null} - 相邻元素的最大差值，如果输入无效则返回 null
 */
function findMaxDifference(arr) {
    // 检查输入是否为数组
    if (!Array.isArray(arr)) {
      return null;
    }
  
    // 检查数组长度是否至少为2
    if (arr.length < 2) {
      return null;
    }
  
    // 检查所有元素是否为整数
    if (!arr.every(Number.isInteger)) {
      return null;
    }
  
    let maxDiff = 0;
  
    // 遍历数组，计算相邻元素的差值
    for (let i = 1; i < arr.length; i++) {
      const diff = Math.abs(arr[i] - arr[i-1]);
      maxDiff = Math.max(maxDiff, diff);
    }
  
    return maxDiff;
  }
  
  // 测试函数
  function testFindMaxDifference() {
    console.log(findMaxDifference([1, 5, 3, 19, 18, 25]));  // 预期输出: 16
    console.log(findMaxDifference([1, 2, 3, 4, 5]));        // 预期输出: 1
    console.log(findMaxDifference([5, 5, 5, 5]));           // 预期输出: 0
    console.log(findMaxDifference([1, 10]));                // 预期输出: 9
    console.log(findMaxDifference([-3, 0, 5, -1, 10]));     // 预期输出: 11
    console.log(findMaxDifference([100, 0, 50, 75]));       // 预期输出: 100
    console.log(findMaxDifference([1]));                    // 预期输出: null
    console.log(findMaxDifference([]));                     // 预期输出: null
    console.log(findMaxDifference([1, 2, '3', 4, 5]));      // 预期输出: null
    console.log(findMaxDifference([1.5, 2, 3, 4, 5]));      // 预期输出: null
    console.log(findMaxDifference(123));                    // 预期输出: null
    console.log(findMaxDifference(null));                   // 预期输出: null
    console.log(findMaxDifference([NaN, 1, 2, 3]));         // 预期输出: null
    console.log(findMaxDifference([Infinity, 1, 2, 3]));    // 预期输出: null
  }
  
  // 运行测试
  testFindMaxDifference();
  