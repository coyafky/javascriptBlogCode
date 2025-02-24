/**
 * 在字符串两侧填充指定字符，使其达到指定长度
 *
 * @param {string} str - 要填充的原始字符串
 * @param {number} length - 目标长度
 * @param {string} [char=' '] - 用于填充的字符，默认为空格
 * @returns {string} - 填充后的字符串
 */
function padBothSides(str, length, char = " ") {
  // 检查输入是否有效
  if (typeof str !== "string" || typeof length !== "number" || length < 0) {
    return "Invalid input";
  }

  // 如果原字符串长度已经大于或等于目标长度，直接返回原字符串
  if (str.length >= length) {
    return str;
  }

  // 计算需要填充的总字符数
  const padLength = length - str.length;
  // 计算左侧需要填充的字符数（向上取整）
  const leftPadLength = Math.ceil(padLength / 2);
  // 计算右侧需要填充的字符数（向下取整）
  const rightPadLength = Math.floor(padLength / 2);

  // 创建左侧填充字符串
  const leftPad = char.repeat(leftPadLength);
  // 创建右侧填充字符串
  const rightPad = char.repeat(rightPadLength);

  // 返回填充后的字符串
  return leftPad + str + rightPad;
}

// 测试函数
function testPadBothSides() {
  console.log("测试用例 1: 基本填充");
  console.log(padBothSides("cat", 8));
  // 预期输出: '  cat   '

  console.log("\n测试用例 2: 使用自定义填充字符");
  console.log(padBothSides("dog", 7, "-"));
  // 预期输出: '--dog--'

  console.log("\n测试用例 3: 原字符串长度等于目标长度");
  console.log(padBothSides("elephant", 8));
  // 预期输出: 'elephant'

  console.log("\n测试用例 4: 原字符串长度大于目标长度");
  console.log(padBothSides("giraffe", 5));
  // 预期输出: 'giraffe'

  console.log("\n测试用例 5: 目标长度为奇数");
  console.log(padBothSides("fox", 7, "*"));
  // 预期输出: '**fox**'

  console.log("\n测试用例 6: 空字符串");
  console.log(padBothSides("", 4, "+"));
  // 预期输出: '++++'

  console.log("\n测试用例 7: 填充字符长度大于1");
  console.log(padBothSides("owl", 9, "AB"));
  // 预期输出: 'ABABowlABA'

  console.log("\n测试用例 8: 无效输入 - 非字符串");
  console.log(padBothSides(123, 5));
  // 预期输出: 'Invalid input'

  console.log("\n测试用例 9: 无效输入 - 负数长度");
  console.log(padBothSides("test", -3));
  // 预期输出: 'Invalid input'

  console.log("\n测试用例 10: 使用空格以外的默认字符");
  console.log(padBothSides("center", 10, "="));
  // 预期输出: '==center=='
}

// 运行测试
testPadBothSides();
