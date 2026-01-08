

## 🧠 Problem 1 — Build `sleep(ms)`

**Goal:**
Write a function `sleep(ms)` that:

* returns a Promise
* resolves after `ms` milliseconds

**Expected usage:**

```js
await sleep(500);
console.log("done");
```

---

## 🧠 Problem 2 — Delay a function

**Goal:**
Write `delay(fn, ms)` so that:

* `fn` runs after `ms`
* `delay` returns a Promise
* the Promise resolves with the return value of `fn`

**Example:**

```js
await delay(() => 42, 300); // → 42
```

---

## 🧠 Problem 3 — Retry on failure

**Goal:**
Write `retry(fn, times)`:

* `fn` returns a Promise
* Retry up to `times` times if it rejects
* Resolve on first success
* Reject if all retries fail

**Example:**

```js
await retry(fetchData, 3);
```

---

## 🧠 Problem 4 — Timeout wrapper

**Goal:**
Write `withTimeout(promise, ms)`:

* Resolves with the original promise result
* Rejects if it doesn’t finish within `ms`

**Hint:** `Promise.race`

---

## 🧠 Problem 5 — Sequential async loop

**Goal:**
Given an array of async tasks, run them **one by one**, not in parallel.

```js
async function runSequential(tasks) {
    // your code
}
```

---

## 🧠 Problem 6 — Parallel limit (real-world important)

**Goal:**
Write `runWithLimit(tasks, limit)`:

* `tasks` is an array of async functions
* Run at most `limit` at the same time
* Resolve when all finish

Example:

```js
await runWithLimit([task1, task2, task3, task4], 2);
```

---

## 🧠 Problem 7 — Promise-based queue

**Goal:**
Create a queue where tasks:

* Run strictly in order
* Each task waits for the previous to finish

**Hint:** chain Promises

---

## 🧠 Problem 8 — Cache async result

**Goal:**
Write `once(fn)`:

* `fn` is async
* It runs only once
* Future calls return the same Promise/result

---

## 🧠 Problem 9 — Convert callback API to Promise

**Given:**

```js
fs.readFile("a.txt", (err, data) => {
    if (err) ...
});
```

**Goal:**
Write `readFilePromise(path)` that returns a Promise.

---

## 🧠 Problem 10 — Real Node.js bug fix

**Given buggy code:**

```js
async function handler(req) {
    db.save(req.body);
    return "OK";
}
```

**Goal:**
Fix it so:

* It waits for save
* Errors propagate correctly
* No silent failures

---

## ✅ How to proceed

1. Start with **Problem 1**
2. Write code
3. Send me your solution (one or several problems)
4. I’ll:

   * Review correctness
   * Improve performance
   * Show production-grade version
   * Explain *why*

This is **exactly how real backend engineers learn async** 🚀
