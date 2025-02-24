let date = new Date();
console.log(`Current Date and Time: ${date}`);
// 获取当前日期 封装成 mm dd yyyy 格式
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
console.log(`Current Date: ${day}/${month}/${year}`); // Current Date: 23/2/2025

// 获取当前时间 封装成 hh mm ss 格式
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
console.log(`Current Time: ${hour}:${minute}:${second}`); // Current Time: 13:46:45

// 以上代码的输出结果如下：

//将以上代码封装成一个函数

function displayCurrentDayAndTime() {
  let date = new Date();
  console.log(`Current Date and Time: ${date}`);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  console.log(`Current Date: ${day}/${month}/${year}`);
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  console.log(`Current Time: ${hour}:${minute}:${second}`);
}

displayCurrentDayAndTime();
