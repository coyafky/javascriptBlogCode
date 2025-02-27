// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/functionNameDemo.js

// 1. 普通函数声明
function sayHello() {
    console.log("Hello!");
}
console.log("1. 普通函数声明:");
console.log(sayHello.name); // 输出: sayHello

console.log("\n------------------------\n");

// 2. 函数表达式
let sayHi = function() {
    console.log("Hi!");
};
console.log("2. 函数表达式:");
console.log(sayHi.name); // 输出: sayHi

console.log("\n------------------------\n");

// 3. 箭头函数
let greet = () => console.log("Greetings!");
console.log("3. 箭头函数:");
console.log(greet.name); // 输出: greet

console.log("\n------------------------\n");

// 4. 对象方法
let user = {
    sayHello() {
        console.log("Hello from user!");
    },
    sayBye: function() {
        console.log("Bye from user!");
    }
};
console.log("4. 对象方法:");
console.log(user.sayHello.name); // 输出: sayHello
console.log(user.sayBye.name);   // 输出: sayBye

console.log("\n------------------------\n");

// 5. 类方法
class MyClass {
    myMethod() {}
}
console.log("5. 类方法:");
console.log(MyClass.prototype.myMethod.name); // 输出: myMethod

console.log("\n------------------------\n");

// 6. 函数作为默认参数
function logFunctionName(func = function() {}) {
    console.log(func.name);
}
console.log("6. 函数作为默认参数:");
logFunctionName(); // 输出: func

console.log("\n------------------------\n");

// 7. 动态创建的函数
let dynamicFunc = new Function("a", "b", "return a + b");
console.log("7. 动态创建的函数:");
console.log(dynamicFunc.name); // 输出: anonymous

console.log("\n------------------------\n");

// 8. 绑定函数
let boundFunc = sayHello.bind(null);
console.log("8. 绑定函数:");
console.log(boundFunc.name); // 输出: bound sayHello

console.log("\n------------------------\n");

// 9. 函数在数组中
let arr = [function() {}];
console.log("9. 函数在数组中:");
console.log(arr[0].name); // 输出: 空字符串

console.log("\n------------------------\n");

// 10. Symbol 作为方法名
let sym = Symbol("mySymbol");
let objWithSymbol = {
    [sym]() {}
};
console.log("10. Symbol 作为方法名:");
console.log(objWithSymbol[sym].name); // 输出: [mySymbol]

console.log("\n------------------------\n");

// 11. Getter 和 Setter
let obj = {
    get property() {},
    set property(value) {}
};
console.log("11. Getter 和 Setter:");
console.log(Object.getOwnPropertyDescriptor(obj, 'property').get.name);  // 输出: get property
console.log(Object.getOwnPropertyDescriptor(obj, 'property').set.name);  // 输出: set property
