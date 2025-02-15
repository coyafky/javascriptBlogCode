function* fibonacci() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    let next = a + b;
    a = b;
    b = next;
  }
}

// 创建生成器对象
const fib = fibonacci();

// 使用next()方法获取斐波那契数列的前几个数字
console.log(fib.next().value); // 输出: 0
console.log(fib.next().value); // 输出: 1
console.log(fib.next().value); // 输出: 1
console.log(fib.next().value); // 输出: 2
console.log(fib.next().value); // 输出: 3
