/**
 * 题目：显示以 "Los" 或 "New" 开头的城市名称
 *
 * 编写一个 JavaScript 程序，如果字符串以 "Los" 或 "New" 开头，
 * 则显示城市名称，否则返回空白。
 *
 * @param {string} cityName - 要检查的城市名称
 * @returns {string} - 如果城市名称以 "Los" 或 "New" 开头，则返回该名称；否则返回空字符串
 */
function displayCityName(cityName) {
  // 检查输入是否为字符串
  if (typeof cityName !== "string") {
    return "";
  }

  // 将城市名称转换为小写以进行不区分大小写的比较
  const lowerCityName = cityName.toLowerCase();

  // 检查城市名称是否以 "los" 或 "new" 开头
  if (lowerCityName.startsWith("los") || lowerCityName.startsWith("new")) {
    return cityName; // 返回原始城市名称，保留原始大小写
  } else {
    return "";
  }
}

// 测试函数
function testDisplayCityName() {
  console.log(displayCityName("Los Angeles")); // 预期输出: "Los Angeles"
  console.log(displayCityName("New York")); // 预期输出: "New York"
  console.log(displayCityName("London")); // 预期输出: ""
  console.log(displayCityName("LOS ANGELES")); // 预期输出: "LOS ANGELES"
  console.log(displayCityName("new orleans")); // 预期输出: "new orleans"
  console.log(displayCityName("New Delhi")); // 预期输出: "New Delhi"
  console.log(displayCityName("Los Cabos")); // 预期输出: "Los Cabos"
  console.log(displayCityName("San Francisco")); // 预期输出: ""
  console.log(displayCityName("NewCastle")); // 预期输出: "NewCastle"
  console.log(displayCityName("los santos")); // 预期输出: "los santos"
  console.log(displayCityName("")); // 预期输出: ""
  console.log(displayCityName("Paris")); // 预期输出: ""
  console.log(displayCityName(123)); // 预期输出: ""
}

// 运行测试
testDisplayCityName();
