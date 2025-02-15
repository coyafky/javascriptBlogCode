function* foo() {
  console.log('执行内部代码1');
  console.log('执行内部代码2');
  yield 'aaa';
  console.log('执行内部代码3');
  console.log('执行内部代码4');
  yield 'bbb';
  console.log('执行内部代码5');
  console.log('执行内部代码6');
  yield 'ccc';
  console.log('执行内部代码7');
}
const generator = foo();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
