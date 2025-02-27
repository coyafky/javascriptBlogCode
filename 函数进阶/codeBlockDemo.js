// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/codeBlockDemo.js

// 1. 代码块中的局部变量
function demonstrateBlockScope() {
    console.log("1. 代码块中的局部变量:");
    
    {
        let message = "Hello";
        console.log("在代码块内:", message);
    }
    
    try {
        console.log("在代码块外:", message);
    } catch (error) {
        console.log("错误:", error.message);
    }
    
    {
        let message = "Goodbye";
        console.log("在另一个代码块内:", message);
    }
}

demonstrateBlockScope();

console.log("\n------------------------\n");

// 2. if 语句中的变量作用域
function demonstrateIfScope() {
    console.log("2. if 语句中的变量作用域:");
    
    if (true) {
        let phrase = "Hello from if";
        console.log("在 if 内:", phrase);
    }
    
    try {
        console.log("在 if 外:", phrase);
    } catch (error) {
        console.log("错误:", error.message);
    }
}

demonstrateIfScope();

console.log("\n------------------------\n");

// 3. for 循环中的变量作用域
function demonstrateForScope() {
    console.log("3. for 循环中的变量作用域:");
    
    for (let i = 0; i < 3; i++) {
        console.log("在 for 循环内:", i);
    }
    
    try {
        console.log("在 for 循环外:", i);
    } catch (error) {
        console.log("错误:", error.message);
    }
}

demonstrateForScope();

console.log("\n------------------------\n");

// 4. 重复声明变量
function demonstrateRedeclaration() {
    console.log("4. 重复声明变量:");
    
    let message = "First message";
    console.log(message);
    
    try {
        let message = "Second message"; // 这里会抛出错误
        console.log(message);
    } catch (error) {
        console.log("错误:", error.message);
    }
    
    {
        // 在新的代码块中是允许的
        let message = "Third message";
        console.log("在新代码块中:", message);
    }
    
    console.log("原始消息保持不变:", message);
}

demonstrateRedeclaration();
