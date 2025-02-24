/**
 * 生成指定数量和范围的随机整数数组
 * 
 * @param {number} n - 要生成的随机整数数量
 * @param {number} min - 范围的最小值（包含）
 * @param {number} max - 范围的最大值（包含）
 * @returns {Array<number>|string} - 生成的随机整数数组或错误信息
 */
function randomIntegersArray(n, min, max) {
    // 检查输入是否为有效数字
    if (typeof n !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
      return "Invalid input: all arguments must be numbers";
    }
  
    // 确保 n 是正整数
    if (n <= 0 || !Number.isInteger(n)) {
      return "Invalid input: n must be a positive integer";
    }
  
    // 将 min 和 max 转换为整数
    min = Math.ceil(min);
    max = Math.floor(max);
  
    // 确保 min 小于等于 max
    if (min > max) {
      [min, max] = [max, min]; // 交换 min 和 max
    }
  
    // 计算范围
    const range = max - min + 1;
  
    // 生成随机整数数组
    return Array.from({ length: n }, () => Math.floor(Math.random() * range) + min);
  }
  
  // 测试函数
  function testRandomIntegersArray() {
    console.log("测试用例 1: 生成 5 个范围在 1-10 的随机整数");
    console.log(randomIntegersArray(5, 1, 10));
  
    console.log("\n测试用例 2: 生成 8 个范围在 -5 到 5 的随机整数");
    console.log(randomIntegersArray(8, -5, 5));
  
    console.log("\n测试用例 3: 生成 3 个范围在 100-200 的随机整数");
    console.log(randomIntegersArray(3, 100, 200));
  
    console.log("\n测试用例 4: 最小值大于最大值");
    console.log(randomIntegersArray(4, 10, 1));
  
    console.log("\n测试用例 5: 小数范围");
    console.log(randomIntegersArray(6, 1.5, 3.5));
  
    console.log("\n测试用例 6: n 为 0");
    console.log(randomIntegersArray(0, 1, 10));
  
    console.log("\n测试用例 7: n 为负数");
    console.log(randomIntegersArray(-3, 1, 10));
  
    console.log("\n测试用例 8: n 为小数");
    console.log(randomIntegersArray(2.5, 1, 10));
  
    console.log("\n测试用例 9: 无效输入 - 非数字");
    console.log(randomIntegersArray("5", "1", "10"));
  
    console.log("\n测试用例 10: 大范围数字");
    console.log(randomIntegersArray(3, 1000000, 2000000));
  }
  
  // 运行测试
  testRandomIntegersArray();
  