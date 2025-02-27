// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/counterPractice.js

// 使用函数属性实现
function makeCounter() {
    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    counter.set = function(value) {
        counter.count = value;
    };

    counter.decrease = function() {
        return --counter.count;
    };

    return counter;
}

// 测试代码
console.log("使用函数属性实现:");
let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10);
console.log(counter()); // 10

console.log(counter.decrease()); // 10 (先返回再减一)
console.log(counter()); // 10

console.log("\n------------------------\n");

// 使用闭包实现
function makeCounterWithClosure() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = function(value) {
        count = value;
    };

    counter.decrease = function() {
        return --count;
    };

    return counter;
}

// 测试代码
console.log("使用闭包实现:");
let counterWithClosure = makeCounterWithClosure();

console.log(counterWithClosure()); // 0
console.log(counterWithClosure()); // 1

counterWithClosure.set(10);
console.log(counterWithClosure()); // 10

console.log(counterWithClosure.decrease()); // 9
console.log(counterWithClosure()); // 9
