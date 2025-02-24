/**
 * 题目：检查两个数组是否通过最多一次交换就能相似
 * 
 * 编写一个 JavaScript 程序，判断两个长度相同的整数数组是否相似。
 * 如果通过最多交换一对元素就能使一个数组变成另一个数组，则认为这两个数组是相似的。
 * 
 * @param {number[]} arr1 - 第一个整数数组
 * @param {number[]} arr2 - 第二个整数数组
 * @returns {boolean} - 如果数组相似返回 true，否则返回 false；如果输入无效则返回 null
 */
function areSimilarArrays(arr1, arr2) {
    // 检查输入是否为数组
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return null;
    }
  
    // 检查两个数组的长度是否相同
    if (arr1.length !== arr2.length) {
      return null;
    }
  
    // 检查所有元素是否为整数
    if (!arr1.every(Number.isInteger) || !arr2.every(Number.isInteger)) {
      return null;
    }
  
    // 如果数组完全相同，直接返回 true
    if (arr1.every((val, index) => val === arr2[index])) {
      return true;
    }
  
    // 找出不同的元素
    const differences = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        differences.push(i);
      }
    }
  
    // 如果不同的元素超过2对，返回 false
    if (differences.length > 2) {
      return false;
    }
  
    // 检查是否可以通过交换一对元素使数组相同
    return differences.length === 2 &&
           arr1[differences[0]] === arr2[differences[1]] &&
           arr1[differences[1]] === arr2[differences[0]];
  }
  
  // 测试函数
  function testAreSimilarArrays() {
    console.log(areSimilarArrays([1, 2, 3], [1, 2, 3]));       // 预期输出: true
    console.log(areSimilarArrays([1, 2, 3], [2, 1, 3]));       // 预期输出: true
    console.log(areSimilarArrays([1, 2, 3], [1, 3, 2]));       // 预期输出: true
    console.log(areSimilarArrays([1, 2, 3], [3, 2, 1]));       // 预期输出: false
    console.log(areSimilarArrays([1, 2, 2], [2, 1, 1]));       // 预期输出: false
    console.log(areSimilarArrays([1, 2, 3, 4], [1, 2, 3, 4])); // 预期输出: true
    console.log(areSimilarArrays([1, 2, 3, 4], [1, 4, 3, 2])); // 预期输出: true
    console.log(areSimilarArrays([1], [1]));                   // 预期输出: true
    console.log(areSimilarArrays([], []));                     // 预期输出: true
    console.log(areSimilarArrays([1, 2], [1, 2, 3]));          // 预期输出: null
    console.log(areSimilarArrays([1, 2, 3], [1, 2, '3']));     // 预期输出: null
    console.log(areSimilarArrays([1, 2, 3], null));            // 预期输出: null
    console.log(areSimilarArrays(123, [1, 2, 3]));             // 预期输出: null
  }
  
  // 运行测试
  testAreSimilarArrays();
  