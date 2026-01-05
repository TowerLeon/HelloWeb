/**
 * learn_node.js
 * A comprehensive Node.js learning script
 * Run: node learn_node.js
 */

'use strict';

/* =========================
 * 1. GLOBALS & ENV
 * ========================= */
console.log('Node version:', process.version);
console.log('Platform:', process.platform);
console.log('PID:', process.pid);

// env vars
const MODE = process.env.MODE || 'dev';
console.log('MODE:', MODE);

/* =========================
 * 2. IMPORT MODULES
 * ========================= */
const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const events = require('events');
const http = require('http');
const url = require('url');

/* =========================
 * 3. BASIC DATA TYPES
 * ========================= */
const num = 42;
const str = 'hello';
const bool = true;
const n = null;
let u;

const obj = { a: 1, b: 2 };
const arr = [1, 2, 3];
const map = new Map([['k', 'v']]);
const set = new Set([1, 2, 2]);

console.log({ num, str, bool, n, u, obj, arr });
console.log('map:', map.get('k'), 'set size:', set.size);

/* =========================
 * 4. FUNCTIONS
 * ========================= */
// normal
function add(a, b) {
    return a + b;
}

// arrow
const mul = (a, b) => a * b;

// default + rest
function sum(start = 0, ...nums) {
    return nums.reduce((a, b) => a + b, start);
}

// otherwise, you have to write it like this:
// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }


console.log(add(1, 2), mul(2, 3), sum(10, 1, 2, 3));

/* =========================
 * 5. DESTRUCTURING & SPREAD
 * ========================= */
const { a, b } = obj;
const arr2 = [...arr, 4, 5];
console.log(a, b, arr2);

// spread matters
//
// const arr = [1, 2, 3];
// const arr2 = [...arr, 4, 5];
//
// arr2 = [1, 2, 3, 4, 5]
//
// const arr2 = [arr, 4, 5];
//
// arr2 = [[1, 2, 3], 4, 5]


/* =========================
 * 6. CLASSES
 * ========================= */
class User {
    #password; // private field

    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    checkPassword(pwd) {
        return this.#password === pwd;
    }

    static fromJSON(json) {
        const { name, password } = JSON.parse(json);
        return new User(name, password);
    }
}

const user = new User('alice', '123456');
console.log(user.name, user.checkPassword('123456'));

/* =========================
 * 7. ERROR HANDLING
 * ========================= */
function risky(n) {
    if (n < 0) throw new Error('n must be >= 0');
    return n;
}

try {
    risky(-1);
} catch (err) {
    console.error('Caught:', err.message);
} finally {
    // always runs
}

/* =========================
 * 8. ASYNC / AWAIT
 * ========================= */
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function asyncDemo() {
    await sleep(100);
    return 'async result';
}

asyncDemo().then(console.log);


// // Equivalent code using Promises without async/await
// function asyncDemo2() {
//     return sleep(100).then(() => 'async result');
// }

// asyncDemo2().then(console.log);



/* =========================
 * 9. FILE SYSTEM
 * ========================= */
const filePath = path.join(__dirname, 'tmp.txt');

// sync
fs.writeFileSync(filePath, 'hello sync\n');

// async (promise)
async function fileDemo() {
    await fsPromises.appendFile(filePath, 'hello async\n');
    const content = await fsPromises.readFile(filePath, 'utf8');
    console.log('file content:\n', content);
}
fileDemo();

/* =========================
 * 10. STREAMS
 * ========================= */
const readStream = fs.createReadStream(filePath);
readStream.on('data', chunk => {
    console.log('stream chunk:', chunk.toString());
});

/* =========================
 * 11. EVENTS
 * ========================= */
class MyEmitter extends events.EventEmitter {}
const emitter = new MyEmitter();

emitter.on('ping', msg => {
    console.log('received event:', msg);
});

emitter.emit('ping', 'hello event');

/* =========================
 * 12. CRYPTO
 * ========================= */
const hash = crypto
    .createHash('sha256')
    .update('password')
    .digest('hex');

console.log('hash:', hash);

/* =========================
 * 13. OS INFO
 * ========================= */
console.log('CPU:', os.cpus()[0].model);
console.log('Memory (MB):', Math.round(os.totalmem() / 1024 / 1024));

/* =========================
 * 14. URL & QUERY
 * ========================= */
const parsed = new url.URL('http://localhost:3000/test?a=1&b=2');
console.log(parsed.pathname, parsed.searchParams.get('a'));

/* =========================
 * 15. HTTP SERVER
 * ========================= */
const server = http.createServer(async (req, res) => {
    const parsedUrl = new url.URL(req.url, 'http://localhost');

    if (req.method === 'GET' && parsedUrl.pathname === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok' }));
        return;
    }

    if (req.method === 'POST' && parsedUrl.pathname === '/echo') {
        let body = '';
        for await (const chunk of req) {
            body += chunk;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ you_sent: body }));
        return;
    }

    res.writeHead(404);
    res.end('not found');
});

server.listen(3000, () => {
    console.log('HTTP server listening on 3000');
});

/* =========================
 * 16. TIMERS
 * ========================= */
setTimeout(() => {
    console.log('timeout fired');
}, 500);

const interval = setInterval(() => {
    console.log('interval tick');
    clearInterval(interval);
}, 1000);

/* =========================
 * 17. PROCESS SIGNALS
 * ========================= */
process.on('SIGINT', () => {
    console.log('graceful shutdown');
    server.close(() => process.exit(0));
});

/* =========================
 * 18. MODULE PATTERN (EXPORT STYLE DEMO)
 * ========================= */
const moduleLike = (() => {
    let counter = 0;
    return {
        inc() {
            counter++;
        },
        value() {
            return counter;
        }
    };
})();

moduleLike.inc();
moduleLike.inc();
console.log('module counter:', moduleLike.value());

/* =========================
 * END
 * ========================= */
console.log('script loaded');
