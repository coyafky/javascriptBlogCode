/**
 * 生成随机的十六进制颜色代码
 *
 * @returns {string} 随机生成的十六进制颜色代码
 */
function generateRandomHexColor() {
  // 使用 Math.random() 生成一个随机数，乘以 16777215 (FFFFFF in decimal)
  // Math.floor() 将结果向下取整
  // toString(16) 将数字转换为十六进制字符串
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // 补全颜色代码至 6 位
  // padStart(6, '0') 确保字符串长度为 6，不足的在前面补 0
  randomColor = randomColor.padStart(6, "0");

  // 返回带 # 前缀的颜色代码
  return `#${randomColor}`;
}

// 测试函数
function testGenerateRandomHexColor() {
  console.log("生成 10 个随机颜色代码：");
  for (let i = 0; i < 10; i++) {
    console.log(`颜色 ${i + 1}: ${generateRandomHexColor()}`);
  }

  console.log("\n颜色代码格式验证：");
  const colorCode = generateRandomHexColor();
  console.log(`生成的颜色代码: ${colorCode}`);
  console.log(`是否符合格式: ${/^#[0-9A-F]{6}$/i.test(colorCode)}`);

  console.log("\n生成大量颜色代码以检查分布：");
  const colorCounts = {};
  const iterations = 1000000;
  for (let i = 0; i < iterations; i++) {
    const color = generateRandomHexColor();
    colorCounts[color] = (colorCounts[color] || 0) + 1;
  }
  console.log(`生成的不同颜色数量: ${Object.keys(colorCounts).length}`);
  console.log(`理论上可能的颜色数量: 16777216`);
  console.log(
    `覆盖率: ${((Object.keys(colorCounts).length / 16777216) * 100).toFixed(2)}%`
  );
}

// 运行测试
testGenerateRandomHexColor();
