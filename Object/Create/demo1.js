// 示例 1: 使用 new Object() 创建对象
var person1 = new Object();
person1.name = "小余";
person1.age = 18;
person1.greet = function () {
  console.log(
    "Hello, my name is " + this.name + " and I am " + this.age + " years old."
  );
};
//上面的方式是对person1当作一个构造函数，然后通过new关键字来执行函数，这个时候也会创建出来对象

// 调用 person1 的方法
person1.greet(); // 输出: Hello, my name is 小余 and I am 18 years old.

// 示例 2: 使用对象字面量来创建对象
var person2 = {
  name: "小余",
  age: 18,
  greet: function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  },
};

// 调用 person2 的方法
person2.greet(); // 输出: Hello, my name is 小余 and I am 18 years old.
