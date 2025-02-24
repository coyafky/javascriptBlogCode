/**
 * 初始化指定大小和值的二维数组
 * 
 * @param {number} rows - 行数
 * @param {number} cols - 列数
 * @param {*} value - 初始化的值
 * @returns {Array} - 初始化后的二维数组
 */
function initialize2DArray(rows, cols, value) {
    // 检查输入是否有效
    if (!Number.isInteger(rows) || !Number.isInteger(cols) || rows <= 0 || cols <= 0) {
      return "Invalid dimensions";
    }
  
    // 使用 Array.from 创建二维数组
    return Array.from({ length: rows }, () => 
      Array.from({ length: cols }, () => value)
    );
  }
  
  // 测试函数
  function test2DArrayInitialization() {
    // 测试用例 1: 基本初始化
    console.log("测试用例 1: 3x3 数组，初始值为 0");
    console.log(initialize2DArray(3, 3, 0));
    // 预期输出: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  
    // 测试用例 2: 不同大小和值
    console.log("\n测试用例 2: 2x4 数组，初始值为 null");
    console.log(initialize2DArray(2, 4, null));
    // 预期输出: [[null, null, null, null], [null, null, null, null]]
  
    // 测试用例 3: 使用字符串作为初始值
    console.log("\n测试用例 3: 3x2 数组，初始值为 'empty'");
    console.log(initialize2DArray(3, 2, 'empty'));
    // 预期输出: [['empty', 'empty'], ['empty', 'empty'], ['empty', 'empty']]
  
    // 测试用例 4: 使用对象作为初始值
    console.log("\n测试用例 4: 2x2 数组，初始值为对象");
    console.log(initialize2DArray(2, 2, { x: 0, y: 0 }));
    // 预期输出: [[{ x: 0, y: 0 }, { x: 0, y: 0 }], [{ x: 0, y: 0 }, { x: 0, y: 0 }]]
  
    // 测试用例 5: 1x1 数组
    console.log("\n测试用例 5: 1x1 数组，初始值为 true");
    console.log(initialize2DArray(1, 1, true));
    // 预期输出: [[true]]
  
    // 测试用例 6: 无效维度
    console.log("\n测试用例 6: 无效维度");
    console.log(initialize2DArray(0, 3, 1));
    console.log(initialize2DArray(3, -1, 1));
    console.log(initialize2DArray(2.5, 2, 1));
    // 预期输出: "Invalid dimensions" (三次)
  
    // 测试用例 7: 大型数组
    console.log("\n测试用例 7: 大型数组 (100x100)");
    const largeArray = initialize2DArray(100, 100, 0);
    console.log(`大小: ${largeArray.length}x${largeArray[0].length}`);
    // 预期输出: 大小: 100x100
  }
  
  // 运行测试
  test2DArrayInitialization();
  