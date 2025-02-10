

async function walkthedog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const walkthedog = true;
           if (walkthedog) {
               resolve("Walked the dog");
           } else {
               reject("Could not walk the dog");
           }
           
        }, 1000);
    });
}

async function feedthedog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const feedthedog = false;
           if (feedthedog) {
               resolve("Fed the dog");
           } else {
               reject("Could not feed the dog");
           }

        }, 1000);
    });
}

async function playwiththedog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const playwiththedog = true;
           if (playwiththedog) {
               resolve("Played with the dog");
           } else {
               reject("Could not play with the dog");
           }

        }, 1000);
    });
}

async function dogowner() {
    try {
        const walkResult = await walkthedog();
        console.log(walkResult);
        const feedResult = await feedthedog();
        console.log(feedResult);
        const playResult = await playwiththedog();

        // 如果 Promise 都成功，就會印出結果
        // 如果 Promise 有失敗，就會印出錯誤（直接跳进catch）
        console.log(playResult);
    } catch (error) {
        console.log(error);
    }
}

// 我们之前在index.js中使用了async/await来处理异步操作，但是这种方式只能处理一个Promise对象。
// 在 第二个设置的Promise对象失败时，我们就会进入catch块，而不会继续执行后面的代码。
// 但是，我们可以使用Promise.allSettled()方法来处理多个Promise对象。

async function dogowner() {
    const task =[
        walkthedog(),
        feedthedog(),
        playwiththedog()
    ]
    const results = await Promise.allSettled(task);
    // 如果 Promise 都成功，就會印出結果
    // 如果 Promise 有失敗，就會印出錯誤
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Task ${index + 1} succeeded:`, result.value);
        } else {
            console.log(`Task ${index + 1} failed:`, result.reason);
        }
    });
}
dogowner();