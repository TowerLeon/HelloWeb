
//problem 1

const sleep = (ms) => {return new Promise((resolve) => {setTimeout(resolve, ms)});}


async function main1(){
    await sleep(500);
    console.log("sleep done");
}

main1();


//problem 2

//method 1
const delay = (fn, ms) => {return new Promise((resolve) => {setTimeout(resolve, ms)}).then(() => fn);}
// //method 2
// const delay = (fn, ms) => {return new Promise((resolve) => {setTimeout(() => resolve(fn()), ms)});}

async function main2(){
    await delay(() => 42, 300); // → 42
    console.log("delay done")
}

main2();

//problem 3
const retry = (fn, times) => {
    return new Promise((resolve, reject) => {
        const attempt = (remaining) => {
            fn().then(resolve).catch(err => {
                if (remaining === 0) {
                    reject(err);
                } else {
                    attempt(remaining - 1);
                }
            });
        };
        attempt(times);
    });
};

async function main3(){
    const result = await retry(() => Promise.resolve((new Date())), 3);
    console.log("retry done: ", result);
}

main3();


//problem 4
const withTimeout = (promise, ms) => {
    const timeout = new Promise(_, reject) => {
        setTimeout(() => {
            reject(new Error("timeout"));
            },ms);
    });

    return Promise.race(promise, timeout);
};

//problem 5
async function runSequential(tasks) {
    const results = [];

    for (const task of tasks) {
        results.push(await task());
    }

    return results;
}


//problem 6
async function runWithLimit(tasks, limit) {
    const results = [];
    let index = 0;

    async function worker() {
        while (index < tasks.length) {
            const current = index++;
            results[current] = await tasks[current]();
        }
    }

    const workers = Array.from(
        { length: limit },
        () => worker()
    );

    await Promise.all(workers);
    return results;
}


//problem 7
function createQueue() {
    let chain = Promise.resolve();

    return function enqueue(task) {
        chain = chain.then(() => task());
        return chain;
    };
}


//problem 8
function once(fn) {
    let promise;

    return function (...args) {
        if (!promise) {
            promise = fn(...args);
        }
        return promise;
    };
}


//problem 9
function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}


//problem 10
async function handler(req) {
    await db.save(req.body);
    return "OK";
}

