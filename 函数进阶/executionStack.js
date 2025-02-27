// FILEPATH: /Users/fkycoya/Documents/Code/Javascript/函数进阶/executionContextDemo.js

// 模拟执行上下文堆栈
let executionStack = [];

// 模拟执行上下文
function ExecutionContext(functionName, args) {
    this.functionName = functionName;
    this.args = args;
    this.variableEnvironment = {};
}

// 递归函数：倒计时
function countdown(n) {
    // 创建新的执行上下文
    const context = new ExecutionContext('countdown', { n });
    executionStack.push(context);
    
    console.log(`进入 countdown(${n})`);
    console.log('当前执行栈:', executionStack.map(ctx => ctx.functionName));

    if (n === 0) {
        console.log('基本情况：n === 0，开始回溯');
    } else {
        console.log(`${n} > 0，继续递归`);
        countdown(n - 1);
    }

    // 函数执行完毕，从栈中弹出当前上下文
    executionStack.pop();
    console.log(`退出 countdown(${n})`);
    console.log('当前执行栈:', executionStack.map(ctx => ctx.functionName));
}

// 启动演示
function startDemo(n) {
    console.log('开始执行上下文和堆栈演示');
    console.log('------------------------');
    countdown(n);
    console.log('------------------------');
    console.log('演示结束');
}

// 运行演示
startDemo(3);
