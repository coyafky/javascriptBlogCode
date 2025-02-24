/**
 * 克隆给定的正则表达式
 * @param {RegExp} regexp - 要克隆的正则表达式
 * @returns {RegExp} - 克隆后的新正则表达式
 */
function cloneRegExp(regexp) {
  // 获取正则表达式的标志
  const flags = regexp.flags;

  // 获取正则表达式的源模式
  const source = regexp.source;

  // 使用源模式和标志创建新的正则表达式
  return new RegExp(source, flags);
}

// 测试函数
function testCloneRegExp() {
  console.log("测试用例 1: 基本正则表达式");
  const regex1 = /hello/;
  const clonedRegex1 = cloneRegExp(regex1);
  console.log(clonedRegex1); // 预期输出: /hello/
  console.log(regex1 !== clonedRegex1); // 预期输出: true（确保是新的实例）

  console.log("\n测试用例 2: 带有标志的正则表达式");
  const regex2 = /world/gi;
  const clonedRegex2 = cloneRegExp(regex2);
  console.log(clonedRegex2); // 预期输出: /world/gi
  console.log(clonedRegex2.flags); // 预期输出: "gi"

  console.log("\n测试用例 3: 包含特殊字符的正则表达式");
  const regex3 = /\d+\.\d{2}/;
  const clonedRegex3 = cloneRegExp(regex3);
  console.log(clonedRegex3); // 预期输出: /\d+\.\d{2}/

  console.log("\n测试用例 4: 使用正则表达式构造函数创建的正则表达式");
  const regex4 = new RegExp("test", "i");
  const clonedRegex4 = cloneRegExp(regex4);
  console.log(clonedRegex4); // 预期输出: /test/i

  console.log("\n测试用例 5: 验证克隆的正则表达式行为");
  const regex5 = /^a.*z$/m;
  const clonedRegex5 = cloneRegExp(regex5);
  const testString = "abcz\nxyz";
  console.log(regex5.test(testString)); // 预期输出: true
  console.log(clonedRegex5.test(testString)); // 预期输出: true
}

// 运行测试
testCloneRegExp();
