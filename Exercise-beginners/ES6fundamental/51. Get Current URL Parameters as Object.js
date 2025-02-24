/**
 * 获取 URL 参数并转换为对象
 * 
 * @param {string} url - 要解析的 URL（可选，默认为当前页面 URL）
 * @returns {Object} - 包含 URL 参数的对象
 */
function getUrlParameters(url) {
    // 如果没有提供 URL，使用当前页面的 URL（在浏览器环境中）
    // 在 Node.js 环境中，我们将使用传入的 URL
    url = url || (typeof window !== 'undefined' ? window.location.href : '');
  
    // 使用 URL 对象解析 URL（如果环境支持）
    let urlObj;
    try {
      urlObj = new URL(url);
    } catch (e) {
      // 如果 URL 对象不可用或 URL 无效，返回空对象
      console.error("Invalid URL or URL object not supported");
      return {};
    }
  
    // 获取查询字符串
    const searchParams = urlObj.searchParams;
    const result = {};
  
    // 遍历所有参数并添加到结果对象中
    for (let [key, value] of searchParams) {
      // 如果参数已存在，将其转换为数组
      if (result.hasOwnProperty(key)) {
        if (Array.isArray(result[key])) {
          result[key].push(value);
        } else {
          result[key] = [result[key], value];
        }
      } else {
        result[key] = value;
      }
    }
  
    return result;
  }
  
  // 测试函数
  function testGetUrlParameters() {
    // 测试用例 1: 基本 URL 参数
    console.log("测试用例 1: 基本 URL 参数");
    const url1 = "https://example.com/page?name=John&age=30";
    console.log(getUrlParameters(url1));
    // 预期输出: { name: 'John', age: '30' }
  
    // 测试用例 2: 包含重复参数的 URL
    console.log("\n测试用例 2: 包含重复参数的 URL");
    const url2 = "https://example.com/search?category=books&tag=fiction&tag=fantasy";
    console.log(getUrlParameters(url2));
    // 预期输出: { category: 'books', tag: ['fiction', 'fantasy'] }
  
    // 测试用例 3: 包含特殊字符的 URL
    console.log("\n测试用例 3: 包含特殊字符的 URL");
    const url3 = "https://example.com/product?name=T%20Shirt&color=%23FF0000";
    console.log(getUrlParameters(url3));
    // 预期输出: { name: 'T Shirt', color: '#FF0000' }
  
    // 测试用例 4: 没有参数的 URL
    console.log("\n测试用例 4: 没有参数的 URL");
    const url4 = "https://example.com/about";
    console.log(getUrlParameters(url4));
    // 预期输出: {}
  
    // 测试用例 5: 无效的 URL
    console.log("\n测试用例 5: 无效的 URL");
    const url5 = "not a valid url";
    console.log(getUrlParameters(url5));
    // 预期输出: {} (并在控制台显示错误信息)
  
    // 测试用例 6: 包含数组形式参数的 URL
    console.log("\n测试用例 6: 包含数组形式参数的 URL");
    const url6 = "https://example.com/api?ids[]=1&ids[]=2&ids[]=3";
    console.log(getUrlParameters(url6));
    // 预期输出: { 'ids[]': ['1', '2', '3'] }
  }
  
  // 运行测试
  testGetUrlParameters();
  