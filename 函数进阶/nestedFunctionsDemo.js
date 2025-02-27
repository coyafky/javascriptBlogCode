// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/nestedFunctionsDemo.js

// 1. 基本的嵌套函数
function greet(firstName, lastName) {
    function getFullName() {
        return `${firstName} ${lastName}`;
    }

    console.log(`Hello, ${getFullName()}!`);
    console.log(`Goodbye, ${getFullName()}!`);
}

console.log("1. 基本的嵌套函数:");
greet("John", "Doe");

console.log("\n------------------------\n");

// 2. 返回嵌套函数（闭包）
function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

console.log("2. 返回嵌套函数（闭包）:");
let counter1 = makeCounter();
console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter1()); // 2

// 创建另一个独立的计数器
let counter2 = makeCounter();
console.log(counter2()); // 0
console.log(counter2()); // 1

// 证明 counter1 和 counter2 是独立的
console.log(counter1()); // 3

console.log("\n------------------------\n");

// 3. 带有参数的高级计数器
function makeAdvancedCounter(startFrom = 0, step = 1) {
    let count = startFrom;

    return function() {
        let currentCount = count;
        count += step;
        return currentCount;
    };
}

console.log("3. 带有参数的高级计数器:");
let counter3 = makeAdvancedCounter(10, 5);
console.log(counter3()); // 10
console.log(counter3()); // 15
console.log(counter3()); // 20

console.log("\n------------------------\n");

// 4. 嵌套函数访问外部变量
function outerFunction(x) {
    let y = 10;

    function innerFunction(z) {
        return x + y + z;
    }

    return innerFunction;
}

console.log("4. 嵌套函数访问外部变量:");
let innerFunc = outerFunction(5);
console.log(innerFunc(3)); // 5 + 10 + 3 = 18

console.log("\n------------------------\n");

// 5. 使用嵌套函数创建一个简单的计算器
function createCalculator(initialValue = 0) {
    let value = initialValue;

    return {
        add: function(n) {
            value += n;
            return value;
        },
        subtract: function(n) {
            value -= n;
            return value;
        },
        getValue: function() {
            return value;
        }
    };
}

console.log("5. 使用嵌套函数创建一个简单的计算器:");
let calc = createCalculator(100);
console.log(calc.add(10)); // 110
console.log(calc.subtract(20)); // 90
console.log(calc.getValue()); // 90
