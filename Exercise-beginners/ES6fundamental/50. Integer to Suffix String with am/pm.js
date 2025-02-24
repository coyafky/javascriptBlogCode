/**
 * 将整数转换为带后缀的时间字符串（am/pm）
 *
 * @param {number} num - 要转换的整数（0-23）
 * @returns {string} - 转换后的时间字符串
 */
function intToTimeString(num) {
  // 检查输入是否为有效的整数
  if (!Number.isInteger(num) || num < 0 || num > 23) {
    return "Invalid input";
  }

  // 确定是上午还是下午
  const period = num < 12 ? "am" : "pm";

  // 转换为12小时制
  let hour = num % 12;
  hour = hour === 0 ? 12 : hour; // 处理午夜和正午的情况

  // 添加适当的后缀
  let suffix;
  if (hour === 11 || hour === 12) {
    suffix = "th";
  } else {
    switch (hour % 10) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
    }
  }

  // 返回格式化的字符串
  return `${hour}${suffix} ${period}`;
}

// 测试函数
function testIntToTimeString() {
  console.log("测试用例 1: 午夜");
  console.log(intToTimeString(0)); // 预期输出: "12th am"

  console.log("\n测试用例 2: 上午");
  console.log(intToTimeString(8)); // 预期输出: "8th am"

  console.log("\n测试用例 3: 正午");
  console.log(intToTimeString(12)); // 预期输出: "12th pm"

  console.log("\n测试用例 4: 下午");
  console.log(intToTimeString(17)); // 预期输出: "5th pm"

  console.log("\n测试用例 5: 特殊后缀 - st");
  console.log(intToTimeString(1)); // 预期输出: "1st am"
  console.log(intToTimeString(21)); // 预期输出: "9th pm"

  console.log("\n测试用例 6: 特殊后缀 - nd");
  console.log(intToTimeString(2)); // 预期输出: "2nd am"
  console.log(intToTimeString(22)); // 预期输出: "10th pm"

  console.log("\n测试用例 7: 特殊后缀 - rd");
  console.log(intToTimeString(3)); // 预期输出: "3rd am"
  console.log(intToTimeString(23)); // 预期输出: "11th pm"

  console.log("\n测试用例 8: 无效输入");
  console.log(intToTimeString(24)); // 预期输出: "Invalid input"
  console.log(intToTimeString(-1)); // 预期输出: "Invalid input"
  console.log(intToTimeString(3.5)); // 预期输出: "Invalid input"
  console.log(intToTimeString("12")); // 预期输出: "Invalid input"
}

// 运行测试
testIntToTimeString();
