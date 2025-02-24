/**
 * 连接并规范化 URL 段
 * 
 * @param {...string} segments - URL 段
 * @returns {string} - 规范化后的 URL
 */
function joinAndNormalizeUrl(...segments) {
    // 过滤掉空字符串
    segments = segments.filter(segment => segment !== '');
  
    // 如果没有有效的段，返回空字符串
    if (segments.length === 0) {
      return '';
    }
  
    // 连接所有段
    let url = segments.join('/');
  
    // 规范化 URL
    url = url
      // 替换多个连续的斜杠为单个斜杠
      .replace(/([^:]\/)\/+/g, '$1')
      // 移除末尾的斜杠（除非 URL 只有协议部分）
      .replace(/^(.+:\/)(.+)\/$/,'$1$2');
  
    // 处理相对路径（'./' 和 '../'）
    const parts = url.split('/');
    const stack = [];
    for (const part of parts) {
      if (part === '..') {
        stack.pop();
      } else if (part !== '.' && part !== '') {
        stack.push(part);
      }
    }
  
    // 重新组合 URL
    return stack.join('/');
  }
  
  // 测试函数
  function testJoinAndNormalizeUrl() {
    // 测试用例 1: 基本 URL 连接
    console.log("测试用例 1: 基本 URL 连接");
    console.log(joinAndNormalizeUrl('http://www.example.com', 'path', 'to', 'page.html'));
    // 预期输出: http://www.example.com/path/to/page.html
  
    // 测试用例 2: 处理多余的斜杠
    console.log("\n测试用例 2: 处理多余的斜杠");
    console.log(joinAndNormalizeUrl('https://api.example.com/', '/users//', '/posts'));
    // 预期输出: https://api.example.com/users/posts
  
    // 测试用例 3: 相对路径
    console.log("\n测试用例 3: 相对路径");
    console.log(joinAndNormalizeUrl('http://example.com', 'path/to', '../page.html'));
    // 预期输出: http://example.com/path/page.html
  
    // 测试用例 4: 复杂的相对路径
    console.log("\n测试用例 4: 复杂的相对路径");
    console.log(joinAndNormalizeUrl('http://example.com', 'a/b/c', '../..', 'd/e', '../f/g'));
    // 预期输出: http://example.com/a/f/g
  
    // 测试用例 5: 保留查询参数和片段标识符
    console.log("\n测试用例 5: 保留查询参数和片段标识符");
    console.log(joinAndNormalizeUrl('http://example.com', 'search', '?q=test#section'));
    // 预期输出: http://example.com/search?q=test#section
  
    // 测试用例 6: 空输入
    console.log("\n测试用例 6: 空输入");
    console.log(joinAndNormalizeUrl());
    // 预期输出: ''
  
    // 测试用例 7: 只有协议的 URL
    console.log("\n测试用例 7: 只有协议的 URL");
    console.log(joinAndNormalizeUrl('http://'));
    // 预期输出: http://
  
    // 测试用例 8: 混合绝对和相对 URL
    console.log("\n测试用例 8: 混合绝对和相对 URL");
    console.log(joinAndNormalizeUrl('http://example.com', '/absolute', 'relative'));
    // 预期输出: http://example.com/absolute/relative
  }
  
  // 运行测试
  testJoinAndNormalizeUrl();
  