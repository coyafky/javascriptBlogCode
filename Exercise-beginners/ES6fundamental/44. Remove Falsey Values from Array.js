/**
 * 从数组中移除假值
 * 
 * @param {Array} arr - 输入数组
 * @returns {Array} - 移除假值后的新数组
 */
function removeFalseyValues(arr) {
    // 使用 filter 方法过滤掉假值
    // 在 JavaScript 中，以下值被认为是假值：
    // false, null, undefined, 0, NaN, 和空字符串 ''
    return arr.filter(Boolean);
  
    // 替代方法：使用箭头函数明确定义过滤条件
    // return arr.filter(item => !!item);
  }
  
  // 测试函数
  function testRemoveFalseyValues() {
    console.log("测试用例 1: 包含各种类型的数组");
    console.log(removeFalseyValues([0, 1, false, 2, '', 3, 'a', 'e', 23, NaN, 's', 34, null, undefined]));
    // 预期输出: [1, 2, 3, 'a', 'e', 23, 's', 34]
  
    console.log("\n测试用例 2: 只包含真值的数组");
    console.log(removeFalseyValues([1, 'hello', true, 42]));
    // 预期输出: [1, 'hello', true, 42]
  
    console.log("\n测试用例 3: 只包含假值的数组");
    console.log(removeFalseyValues([false, null, undefined, 0, NaN, '']));
    // 预期输出: []
  
    console.log("\n测试用例 4: 空数组");
    console.log(removeFalseyValues([]));
    // 预期输出: []
  
    console.log("\n测试用例 5: 包含复杂数据类型的数组");
    console.log(removeFalseyValues([{}, [], false, 'test', 0, null, () => {}]));
    // 预期输出: [{}, [], 'test', () => {}]
  
    console.log("\n测试用例 6: 包含嵌套数组的数组");
    console.log(removeFalseyValues([1, [2, 3], false, [4, null, 6], 0, []]));
    // 预期输出: [1, [2, 3], [4, null, 6], []]
  
    console.log("\n测试用例 7: 包含特殊数值的数组");
    console.log(removeFalseyValues([Infinity, -Infinity, NaN, 0, -0]));
    // 预期输出: [Infinity, -Infinity]
  }
  
  // 运行测试
  testRemoveFalseyValues();
  