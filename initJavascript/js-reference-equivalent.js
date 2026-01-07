// ------------------------------
// 1. Synchronous functions
// ------------------------------

// Classic function
function syncFunction() {
    return 42;
}
console.log(syncFunction()); // 42

// Arrow function with explicit return
const arrowFunction = () => { return 42; }
console.log(arrowFunction()); // 42

// Arrow function concise (one-line expression)
const arrowShort = () => 42;
console.log(arrowShort()); // 42

// Arrow function doing a side effect (no return)
const logOnly = () => { console.log(42); }
logOnly(); // prints 42
console.log(logOnly()); // prints 42, then undefined

// ------------------------------
// 2. Asynchronous functions (async/await)
// ------------------------------

async function asyncFunction() {
    return 42; // automatically wrapped in Promise
}

asyncFunction().then(result => console.log(result)); // 42

// Same with arrow function
const asyncArrow = async () => 42;
asyncArrow().then(res => console.log(res)); // 42

// Async function doing a side effect
const asyncLog = async () => { console.log(42); }
asyncLog(); // prints 42
asyncLog().then(r => console.log(r)); // prints 42, then undefined

// Using await inside an async function
(async () => {
    const result = await asyncArrow();
    console.log(result); // 42
})();

// ------------------------------
// 3. Promise constructor
// ------------------------------

const promise = new Promise((resolve, reject) => {
    resolve(42); // resolves successfully
});

promise.then(res => console.log(res)); // 42

// Promise with side effect
const promiseLog = new Promise((resolve) => {
    console.log("Logging inside Promise");
    resolve(42);
});
promiseLog.then(r => console.log("Resolved value:", r));

// ------------------------------
// 4. Mixing async/await with Promise
// ------------------------------

(async () => {
    const value1 = await promise;           // wait for promise
    console.log(value1);                    // 42

    const value2 = await asyncFunction();   // wait for async function
    console.log(value2);                    // 42
})();

// ------------------------------
// 5. Summary table (conceptually)
// ------------------------------

// | Expression                    | Synchronous | Returns value | Async / Promise |
// |--------------------------------|------------|---------------|----------------|
// | function f() { return x; }     | ✅          | ✅             | ❌              |
// | () => x                         | ✅          | ✅             | ❌              |
// | () => { console.log(x); }       | ✅          | ❌ (undefined) | ❌              |
// | async function f() { return x;} | ❌          | ✅ (Promise)   | ✅              |
// | () => Promise.resolve(x)        | ❌          | ✅ (Promise)   | ✅              |
// | await f() inside async          | ❌          | ✅ (unwrapped) | ✅              |

