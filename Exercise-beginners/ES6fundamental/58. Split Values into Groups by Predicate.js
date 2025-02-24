/**
 * 根据谓词函数将值分成两组
 * @param {Array} arr - 要分组的数组
 * @param {Function} predicate - 谓词函数，决定元素属于哪个组
 * @returns {Array} - 包含两个数组的数组，第一个数组包含谓词函数返回true的元素，第二个数组包含返回false的元素
 */
function splitByPredicate(arr, predicate) {
    // 使用reduce方法将元素分到两个数组中
    return arr.reduce(
      (result, element) => {
        // 如果谓词函数返回true，将元素添加到第一个数组
        // 否则，将元素添加到第二个数组
        result[predicate(element) ? 0 : 1].push(element);
        return result;
      },
      [[], []] // 初始值为包含两个空数组的数组
    );
  }
  
  // 测试函数
  function testSplitByPredicate() {
    console.log("测试用例 1: 按奇偶性分组");
    console.log(splitByPredicate([1, 2, 3, 4, 5, 6], x => x % 2 === 0));
    // 预期输出: [[2, 4, 6], [1, 3, 5]]
  
    console.log("\n测试用例 2: 按正负性分组");
    console.log(splitByPredicate([-2, -1, 0, 1, 2], x => x >= 0));
    // 预期输出: [[0, 1, 2], [-2, -1]]
  
    console.log("\n测试用例 3: 字符串长度大于3");
    console.log(splitByPredicate(['a', 'bb', 'ccc', 'dddd'], str => str.length > 3));
    // 预期输出: [['dddd'], ['a', 'bb', 'ccc']]
  
    console.log("\n测试用例 4: 对象数组，按属性值分组");
    const objects = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 },
      { name: 'David', age: 28 }
    ];
    console.log(splitByPredicate(objects, obj => obj.age > 30));
    // 预期输出: [[{ name: 'Charlie', age: 35 }], [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'David', age: 28 }]]
  
    console.log("\n测试用例 5: 空数组");
    console.log(splitByPredicate([], x => x > 0));
    // 预期输出: [[], []]
  }
  
  // 运行测试
  testSplitByPredicate();
  