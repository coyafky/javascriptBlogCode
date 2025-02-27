// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/nestedSetTimeoutDemo.js

console.log("嵌套 setTimeout Demo 开始");

// 模拟服务器请求
function serverRequest() {
  return new Promise((resolve) => {
    // 模拟随机的服务器响应时间（100ms 到 5000ms）
    const responseTime = Math.floor(Math.random() * 4900 + 100);
    setTimeout(() => {
      console.log(`服务器响应时间: ${responseTime}ms`);
      resolve(responseTime);
    }, responseTime);
  });
}

// 初始间隔时间
let interval = 5000; // 5秒
let requestCount = 0;

function scheduleNextRequest() {
  console.log(`安排下一次请求，间隔: ${interval}ms`);
  setTimeout(makeRequest, interval);
}

async function makeRequest() {
  requestCount++;
  console.log(`发送第 ${requestCount} 次请求...`);

  try {
    const responseTime = await serverRequest();

    // 根据响应时间调整间隔
    if (responseTime < 1000) {
      // 服务器响应快，可以稍微减少间隔
      interval = Math.max(1000, interval - 1000);
    } else if (responseTime > 3000) {
      // 服务器响应慢，增加间隔
      interval = Math.min(20000, interval * 2);
    }

    console.log(`新的请求间隔: ${interval}ms`);

    // 安排下一次请求
    scheduleNextRequest();
  } catch (error) {
    console.error("请求失败:", error);
    // 如果请求失败，增加间隔并重试
    interval = Math.min(20000, interval * 2);
    scheduleNextRequest();
  }

  // 如果已经发送了10次请求，就停止
  if (requestCount >= 10) {
    console.log("已完成10次请求，停止demo");
    console.log("嵌套 setTimeout Demo 结束");
  }
}

// 开始第一次请求
makeRequest();
