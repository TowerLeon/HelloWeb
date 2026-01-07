/************************************************************
 * 1️⃣ NORMAL FUNCTION (SYNCHRONOUS)
 ************************************************************/

function syncFunction() {
    // Returns a value immediately
    return 42;
}

const a = syncFunction();
console.log(a); // 42



/************************************************************
 * 2️⃣ ASYNC FUNCTION
 ************************************************************/

async function asyncFunction() {
    // Even though it looks like a normal return,
    // async functions ALWAYS return a Promise
    return 42;
}

// Equivalent to:
// function asyncFunction() {
//     return Promise.resolve(42);
// }

asyncFunction().then(value => {
    console.log(value); // 42
});



/************************************************************
 * 3️⃣ MANUALLY CREATING A PROMISE
 ************************************************************/

function manualPromise(success) {
    return new Promise((resolve, reject) => {
        // Simulate async work
        setTimeout(() => {
            if (success) {
                resolve("OK");   // Promise fulfilled
            } else {
                reject("FAIL");  // Promise rejected
            }
        }, 500);
    });
}

// Using .then() and .catch()
manualPromise(true)
    .then(result => {
        console.log(result); // OK
    })
    .catch(error => {
        console.log(error);
    });



/************************************************************
 * 4️⃣ resolve / reject vs return / throw (VERY IMPORTANT)
 ************************************************************/

// Using Promise directly
function examplePromise() {
    return new Promise((resolve, reject) => {
        resolve("resolved value");
        // reject("error value");
    });
}

// Using async/await version (cleaner)
async function exampleAsync() {
    return "resolved value";   // auto resolve
    // throw new Error("error"); // auto reject
}



/************************************************************
 * 5️⃣ sleep() — wrapping callback API into Promise
 ************************************************************/

function sleep(ms) {
    // setTimeout itself does NOT return a Promise
    // We wrap it so it becomes awaitable
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}



/************************************************************
 * 6️⃣ await — pause function execution
 ************************************************************/

async function demoAwait() {
    console.log("Start");

    // Pause THIS function until Promise resolves
    await sleep(1000);

    console.log("After 1 second");
}

demoAwait();
console.log("This runs immediately");



/************************************************************
 * 7️⃣ then() — attach callback to a Promise
 ************************************************************/

sleep(500).then(() => {
    console.log("Done via then()");
});

// then() does NOT pause execution
console.log("Still running");



/************************************************************
 * 8️⃣ await vs then — EQUIVALENT FORMS
 ************************************************************/

// Using then()
function withThen() {
    return sleep(300).then(() => "then result");
}

// Using async/await
async function withAwait() {
    await sleep(300);
    return "await result";
}

// Both return Promises
withThen().then(console.log);
withAwait().then(console.log);



/************************************************************
 * 9️⃣ ERROR HANDLING
 ************************************************************/

// then / catch style
manualPromise(false)
    .then(result => console.log(result))
    .catch(err => console.log("Caught:", err));

// async / await style
async function errorDemo() {
    try {
        await manualPromise(false);
    } catch (err) {
        console.log("Caught:", err);
    }
}

errorDemo();



/************************************************************
 * 🔟 PROMISE COMPOSITION
 ************************************************************/

async function parallelDemo() {
    // Run multiple async tasks at the same time
    await Promise.all([
        sleep(200),
        sleep(400),
        sleep(600)
    ]);

    console.log("All finished together");
}

parallelDemo();



/************************************************************
 * 🧠 FINAL SUMMARY (MENTAL MODEL)
 ************************************************************/

/*
sync function:
    return value immediately

async function:
    return Promise.resolve(value)

Promise:
    represents a future value

resolve():
    marks Promise as successful

reject():
    marks Promise as failed

.then():
    register callback for when Promise resolves

.catch():
    register callback for rejection

await:
    pause async function until Promise settles

IMPORTANT:
    Promises do NOT create threads
    Promises do NOT block JS
    Promises coordinate async results
*/
