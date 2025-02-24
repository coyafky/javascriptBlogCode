/**
 * 在指定范围内生成随机整数
 *
 * @param {number} min - 范围的最小值（包含）
 * @param {number} max - 范围的最大值（包含）
 * @returns {number} - 生成的随机整数
 */
function randomIntegerInRange(min, max) {
  // 检查输入是否为数字
  if (typeof min !== "number" || typeof max !== "number") {
    return "Invalid input: both arguments must be numbers";
  }

  // 将输入转换为整数
  min = Math.ceil(min);
  max = Math.floor(max);

  // 确保 min 小于等于 max
  if (min > max) {
    [min, max] = [max, min]; // 交换 min 和 max
  }

  // 计算范围
  const range = max - min + 1;

  // 生成随机整数并返回
  return Math.floor(Math.random() * range) + min;
}

// 测试函数
function testRandomIntegerInRange() {
  console.log("测试用例 1: 范围 1-10");
  for (let i = 0; i < 5; i++) {
    console.log(randomIntegerInRange(1, 10));
  }

  console.log("\n测试用例 2: 范围 -5 到 5");
  for (let i = 0; i < 5; i++) {
    console.log(randomIntegerInRange(-5, 5));
  }

  console.log("\n测试用例 3: 相同的最小值和最大值");
  console.log(randomIntegerInRange(7, 7));

  console.log("\n测试用例 4: 最小值大于最大值");
  console.log(randomIntegerInRange(10, 1));

  console.log("\n测试用例 5: 小数范围");
  for (let i = 0; i < 5; i++) {
    console.log(randomIntegerInRange(1.5, 3.5));
  }

  console.log("\n测试用例 6: 大范围数字");
  console.log(randomIntegerInRange(1000000, 2000000));

  console.log("\n测试用例 7: 无效输入 - 非数字");
  console.log(randomIntegerInRange("1", "10"));

  console.log("\n测试用例 8: 无效输入 - 缺少参数");
  console.log(randomIntegerInRange(5));
}

// 运行测试
testRandomIntegerInRange();
