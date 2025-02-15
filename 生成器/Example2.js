function* alllog() {
  console.log(1);
  yield;
  console.log(2);
  yield;
  console.log(3);
  yield;
  console.log(4);
}
// 创建生成器对象
const all = alllog();
// 调用next()方法
all.next();
all.next();
all.next();
all.next();
