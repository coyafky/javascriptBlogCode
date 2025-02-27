// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/spreadSyntaxDemo.js

// 1. 在函数调用中使用 Spread 语法
function demonstrateSpreadInFunctionCall() {
    let numbers = [5, 2, 8, 1, 9];
    console.log("原始数组:", numbers);
    console.log("使用 Spread 语法找最大值:", Math.max(...numbers));
    
    // 结合常规参数使用
    console.log("结合常规参数:", Math.max(0, ...numbers, 10));
}

console.log("1. 在函数调用中使用 Spread 语法:");
demonstrateSpreadInFunctionCall();

console.log("\n------------------------\n");

// 2. 合并数组
function demonstrateArrayMerging() {
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    
    let merged = [...arr1, ...arr2];
    console.log("合并后的数组:", merged);
    
    // 在特定位置插入数组
    let inserted = [0, ...arr1, 3.5, ...arr2, 7];
    console.log("插入元素后的数组:", inserted);
}

console.log("2. 合并数组:");
demonstrateArrayMerging();

console.log("\n------------------------\n");

// 3. 复制数组
function demonstrateArrayCopy() {
    let original = [1, 2, 3];
    let copy = [...original];
    
    console.log("原始数组:", original);
    console.log("复制的数组:", copy);
    console.log("它们是同一个数组吗?", original === copy);
    
    // 修改复制的数组不会影响原始数组
    copy.push(4);
    console.log("修改后的复制数组:", copy);
    console.log("原始数组保持不变:", original);
}

console.log("3. 复制数组:");
demonstrateArrayCopy();

console.log("\n------------------------\n");

// 4. 将可迭代对象转换为数组
function demonstrateIterableToArray() {
    let str = "Hello";
    let chars = [...str];
    console.log("字符串转换为字符数组:", chars);
    
    // Set 转换为数组
    let set = new Set([1, 2, 3, 3, 4, 5]);
    let uniqueArray = [...set];
    console.log("Set 转换为数组:", uniqueArray);
}

console.log("4. 将可迭代对象转换为数组:");
demonstrateIterableToArray();

console.log("\n------------------------\n");

// 5. 在对象字面量中使用 Spread 语法
function demonstrateSpreadInObjects() {
    let obj1 = { a: 1, b: 2 };
    let obj2 = { c: 3, d: 4 };
    
    let merged = { ...obj1, ...obj2 };
    console.log("合并对象:", merged);
    
    // 覆盖属性
    let overridden = { ...obj1, b: 3, ...obj2 };
    console.log("覆盖属性:", overridden);
}

console.log("5. 在对象字面量中使用 Spread 语法:");
demonstrateSpreadInObjects();
