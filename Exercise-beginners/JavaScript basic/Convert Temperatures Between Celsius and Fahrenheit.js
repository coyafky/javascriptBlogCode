export function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
// 将华氏度转换为摄氏度
export function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// 测试函数
function convertTemperature() {
  // 测试摄氏度到华氏度的转换
  let celsius = 60;
  let fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C is ${fahrenheit}°F`);

  // 测试华氏度到摄氏度的转换
  fahrenheit = 45;
  celsius = fahrenheitToCelsius(fahrenheit);
  console.log(`${fahrenheit}°F is ${celsius}°C`);
}

// 调用测试函数
convertTemperature();
