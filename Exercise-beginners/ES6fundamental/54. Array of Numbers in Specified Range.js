/**
 * 创建一个包含指定范围内数字的数组
 * 
 * @param {number} start - 起始值（包含）
 * @param {number} end - 结束值（包含）
 * @param {number} [step=1] - 步长（可选，默认为1）
 * @returns {Array} - 包含指定范围内数字的数组
 */
function rangeArray(start, end, step = 1) {
    // 检查输入是否有效
    if (typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number') {
      return "Invalid input: All parameters must be numbers";
    }
    if (step === 0) {
      return "Invalid step: Step cannot be zero";
    }
  
    // 确定数组的长度
    const length = Math.floor((end - start) / step) + 1;
  
    // 使用 Array.from 创建并填充数组
    return Array.from({ length }, (_, index) => start + (index * step));
  }
  
  // 测试函数
  function testRangeArray() {
    // 测试用例 1: 基本范围
    console.log("测试用例 1: 1 到 5");
    console.log(rangeArray(1, 5));
    // 预期输出: [1, 2, 3, 4, 5]
  
    // 测试用例 2: 负数到正数
    console.log("\n测试用例 2: -3 到 3");
    console.log(rangeArray(-3, 3));
    // 预期输出: [-3, -2, -1, 0, 1, 2, 3]
  
    // 测试用例 3: 使用步长
    console.log("\n测试用例 3: 1 到 10，步长为 2");
    console.log(rangeArray(1, 10, 2));
    // 预期输出: [1, 3, 5, 7, 9]
  
    // 测试用例 4: 倒序范围
    console.log("\n测试用例 4: 5 到 1，步长为 -1");
    console.log(rangeArray(5, 1, -1));
    // 预期输出: [5, 4, 3, 2, 1]
  
    // 测试用例 5: 小数步长
    console.log("\n测试用例 5: 0 到 1，步长为 0.25");
    console.log(rangeArray(0, 1, 0.25));
    // 预期输出: [0, 0.25, 0.5, 0.75, 1]
  
    // 测试用例 6: 单个数字
    console.log("\n测试用例 6: 5 到 5");
    console.log(rangeArray(5, 5));
    // 预期输出: [5]
  
    // 测试用例 7: 无效输入
    console.log("\n测试用例 7: 无效输入");
    console.log(rangeArray("1", 5));
    console.log(rangeArray(1, 5, 0));
    // 预期输出: "Invalid input: All parameters must be numbers"
    //           "Invalid step: Step cannot be zero"
  
    // 测试用例 8: 大范围
    console.log("\n测试用例 8: 大范围（0 到 1000，步长为 10）");
    const largeRange = rangeArray(0, 1000, 10);
    console.log(`数组长度: ${largeRange.length}, 前5个元素: [${largeRange.slice(0, 5)}], 后5个元素: [${largeRange.slice(-5)}]`);
    // 预期输出: 数组长度: 101, 前5个元素: [0,10,20,30,40], 后5个元素: [960,970,980,990,1000]
  }
  
  // 运行测试
  testRangeArray();
  