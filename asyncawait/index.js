// Async function = make a function that returns a promise
// await = wait for the promise to resolve
// async/await = make asynchronous code look synchronous




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
dogowner();