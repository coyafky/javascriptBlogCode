// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/sumWithBracketsPractice.js

function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    f.valueOf = function() {
        return currentSum;
    };

    return f;
}

// 测试代码
console.log(sum(1)(2) == 3);  // true
console.log(sum(1)(2)(3) == 6);  // true
console.log(sum(5)(-1)(2) == 6);  // true
console.log(sum(6)(-1)(-2)(-3) == 0);  // true
console.log(sum(0)(1)(2)(3)(4)(5) == 15);  // true

// 额外的测试，显示实际值
console.log("sum(1)(2) =", sum(1)(2));  // 3
console.log("sum(1)(2)(3) =", sum(1)(2)(3));  // 6
console.log("sum(5)(-1)(2) =", sum(5)(-1)(2));  // 6
console.log("sum(6)(-1)(-2)(-3) =", sum(6)(-1)(-2)(-3));  // 0
console.log("sum(0)(1)(2)(3)(4)(5) =", sum(0)(1)(2)(3)(4)(5));  // 15
