/**
 * 题目：最小化字母大小写变更
 *
 * 编写一个 JavaScript 程序，通过改变最少数量的字母大小写，
 * 将给定的字符串转换为全大写或全小写。
 * 例如，"Write" 将变为 "write"，"PHp" 将变为 "PHP"。
 *
 * @param {string} str - 输入的字符串
 * @returns {string} - 转换后的字符串
 */
function minimizeCaseChange(str) {
  // 检查输入是否为字符串
  if (typeof str !== "string") {
    return "Invalid input";
  }

  // 计算大写和小写字母的数量
  let upperCount = 0;
  let lowerCount = 0;
  for (let char of str) {
    if (char >= "A" && char <= "Z") {
      upperCount++;
    } else if (char >= "a" && char <= "z") {
      lowerCount++;
    }
  }

  // 决定是转换为全大写还是全小写
  return upperCount > lowerCount ? str.toUpperCase() : str.toLowerCase();
}

// 测试函数
function testMinimizeCaseChange() {
  console.log(minimizeCaseChange("Write")); // 预期输出: "write"
  console.log(minimizeCaseChange("PHp")); // 预期输出: "PHP"
  console.log(minimizeCaseChange("JAVASCRIPT")); // 预期输出: "JAVASCRIPT"
  console.log(minimizeCaseChange("javascript")); // 预期输出: "javascript"
  console.log(minimizeCaseChange("JavaSCRIPT")); // 预期输出: "JAVASCRIPT"
  console.log(minimizeCaseChange("javaScript")); // 预期输出: "javascript"
  console.log(minimizeCaseChange("HTML5")); // 预期输出: "HTML5"
  console.log(minimizeCaseChange("css3")); // 预期输出: "css3"
  console.log(minimizeCaseChange("")); // 预期输出: ""
  console.log(minimizeCaseChange("a")); // 预期输出: "a"
  console.log(minimizeCaseChange("A")); // 预期输出: "A"
  console.log(minimizeCaseChange("123")); // 预期输出: "123"
  console.log(minimizeCaseChange("Hello World!")); // 预期输出: "hello world!"
  console.log(minimizeCaseChange(123)); // 预期输出: "Invalid input"
  console.log(minimizeCaseChange(null)); // 预期输出: "Invalid input"
}

// 运行测试
testMinimizeCaseChange();
