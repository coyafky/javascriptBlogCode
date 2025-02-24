/**
 * 题目：将数值转换为小时和分钟
 *
 * 编写一个 JavaScript 应用程序，将提供的数值（表示分钟数）转换为小时和分钟的格式。
 *
 * @param {number} num - 要转换的数值（表示分钟数）
 * @returns {string} - 转换后的小时和分钟的字符串表示
 */
function transformToHoursAndMinutes(num) {
  // 检查输入是否为有效的非负数
  if (typeof num !== "number" || isNaN(num) || num < 0) {
    return "无效输入。请提供一个非负数。";
  }

  // 计算小时和分钟
  const hours = Math.floor(num / 60);
  const minutes = num % 60;

  // 构造结果字符串
  let result = "";
  if (hours > 0) {
    result += `${hours} 小时`;
  }
  if (minutes > 0) {
    if (result.length > 0) result += " ";
    result += `${minutes} 分钟`;
  }
  if (result.length === 0) {
    result = "0 分钟";
  }

  return result;
}

// 测试函数
function testTransformToHoursAndMinutes() {
  console.log(transformToHoursAndMinutes(0)); // 预期输出: "0 分钟"
  console.log(transformToHoursAndMinutes(60)); // 预期输出: "1 小时"
  console.log(transformToHoursAndMinutes(90)); // 预期输出: "1 小时 30 分钟"
  console.log(transformToHoursAndMinutes(120)); // 预期输出: "2 小时"
  console.log(transformToHoursAndMinutes(45)); // 预期输出: "45 分钟"
  console.log(transformToHoursAndMinutes(150)); // 预期输出: "2 小时 30 分钟"
  console.log(transformToHoursAndMinutes(1440)); // 预期输出: "24 小时"
  console.log(transformToHoursAndMinutes(1)); // 预期输出: "1 分钟"
  console.log(transformToHoursAndMinutes(-30)); // 预期输出: "无效输入。请提供一个非负数。"
  console.log(transformToHoursAndMinutes("60")); // 预期输出: "无效输入。请提供一个非负数。"
}

// 运行测试
testTransformToHoursAndMinutes();
