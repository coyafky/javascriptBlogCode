//常见的限制

//1.以外创建全局变量，不会生效而是报错
message = "Hello World";
console.log(message);
//同样的在严格模式下会报错
function foo() {
  age = 18;
}
foo();
console.log(age);

//2.不允许函数有相同的参数名称
function foo(x, y, x) {
  //两个x就是相同参数名称，如果不开启严格模式，后面的x会将前面的x覆盖掉
  console.log(x, y, x);
}
foo(10, 20, 30); //30,20,30(非严格模式)

//3.静默错误
true.name = "xiaoyu";
NaN = 123; //非严格模式下不会报错
var obj = {};
Object.defineProperty(obj, "name", {
  configurable: false, //不可配置
  writable: false, //不可写
  value: "why",
});
console.log(obj.name);
obj.name = "xiaoyu"; //静默错误，因为我们已经设置不可写入了

//4.不允许使用原先的八进制格式(严格模式)
var num = 0123; //八进制
var num2 = 0x123; //十六进制
var num3 = 0b100; //二进制
console.log(num, num2, num3); //Uncaught SyntaxError: Octal literals are not allowed in strict mode

//5.eval函数不会向上引用变量
var jsString = "var message = 'Hello World';console.log(message)";
eval(jsString);
console.log(message); //这里会报错
