export {}

"use strict";

/* =========================
   Basic data types
========================= */

const appName = "DemoApp";        // string
const version = 1.0;              // number
const isProduction = false;       // boolean
let notDefined;                   // undefined
const emptyValue = null;          // null

/* =========================
   Array & Object
========================= */

const scores = [10, 20, 30];      // number[]

const user = {
  id: 1,
  name: "Chris",
  active: true
};

/* =========================
   Function
========================= */

/**
 * Add two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/* =========================
   Condition
========================= */

function checkScore(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 60) {
    return "Pass";
  } else {
    return "Fail";
  }
}

/* =========================
   Loop
========================= */

for (let i = 0; i < scores.length; i++) {
  console.log("score:", scores[i]);
}

for (const s of scores) {
  console.log("for-of:", s);
}

/* =========================
   Class
========================= */

/**
 * @class
 */
class Person {
  /**
   * @param {number} id
   * @param {string} name
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  greet() {
    return `Hello, I am ${this.name}`;
  }
}

const p = new Person(1, "Alice");
console.log(p.greet());

/* =========================
   Async / Promise
========================= */

/**
 * Fake async request
 * @returns {Promise<string>}
 */
function fakeRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("OK");
    }, 500);
  });
}

async function run() {
  const result = await fakeRequest();
  console.log("result:", result);
}

run();

/* =========================
   Error handling
========================= */

try {
  JSON.parse("{ invalid json }");
} catch (err) {
  console.error("parse error:", err.message);
}
