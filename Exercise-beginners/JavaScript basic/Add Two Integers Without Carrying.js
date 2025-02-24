/**
 * 题目：不进位加法
 * 
 * 编写一个 JavaScript 程序，在不进位的情况下将两个正整数相加。
 * 即，每一位上的加法结果都只保留个位数，不向高位进位。
 * 
 * @param {number} num1 - 第一个正整数
 * @param {number} num2 - 第二个正整数
 * @returns {number} - 不进位加法的结果，如果输入无效则返回 null
 */
function addWithoutCarry(num1, num2) {
    // 检查输入是否为正整数
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 <= 0 || num2 <= 0) {
      return null;
    }
  
    let result = 0;
    let multiplier = 1;
  
    while (num1 > 0 || num2 > 0) {
      // 获取每个数的最后一位
      const digit1 = num1 % 10;
      const digit2 = num2 % 10;
  
      // 计算当前位的和，但只保留个位数（不进位）
      const sum = (digit1 + digit2) % 10;
  
      // 将结果添加到最终结果中
      result += sum * multiplier;
  
      // 更新乘数和输入数字
      multiplier *= 10;
      num1 = Math.floor(num1 / 10);
      num2 = Math.floor(num2 / 10);
    }
  
    return result;
  }
  
  // 测试函数
  function testAddWithoutCarry() {
    console.log(addWithoutCarry(222, 911));  // 预期输出: 133
    console.log(addWithoutCarry(200, 900));  // 预期输出: 100
    console.log(addWithoutCarry(999, 1));    // 预期输出: 990
    console.log(addWithoutCarry(543, 3456)); // 预期输出: 3889
    console.log(addWithoutCarry(1, 2));      // 预期输出: 3
    console.log(addWithoutCarry(0, 100));    // 预期输出: null (0 不是正整数)
    console.log(addWithoutCarry(-5, 10));    // 预期输出: null (负数不允许)
    console.log(addWithoutCarry(1.5, 2.7));  // 预期输出: null (不是整数)
    console.log(addWithoutCarry('123', 456)); // 预期输出: null (不是数字类型)
    console.log(addWithoutCarry(123, '456')); // 预期输出: null (不是数字类型)
    console.log(addWithoutCarry(null, 5));   // 预期输出: null
    console.log(addWithoutCarry(10, undefined)); // 预期输出: null
    console.log(addWithoutCarry(NaN, 20));   // 预期输出: null
    console.log(addWithoutCarry(Infinity, 30)); // 预期输出: null
  }
  
  // 运行测试
  testAddWithoutCarry();
  