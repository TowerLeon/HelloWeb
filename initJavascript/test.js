function syncFunction() {
    return 42;
}

a = syncFunction()
console.log(a)


// equivalent
// b = () => 42
b = () => {return 42;}
console.log(b())



c = () => {console.log(42);}// returns undefined

// //both log and return
// c = () => {
//     console.log(42)
//     return 42
// }

console.log(c())




// function delay(ms, value) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(value);
//         }, ms);
//     });
// }
//
//
// async function demo() {
//     console.log("A");
//
//     const x = delay(1000, "X"); // no await
//     console.log("B", x);
//
//     const y = delay(1000, "Y"); // no await
//     console.log("C", y);
// }
//
// demo();
//
//
// async function demo_await() {
//     console.log("A");
//
//     const x = await delay(1000, "X"); // await
//     console.log("B", x);
//
//     const y = await delay(1000, "Y"); // await
//     console.log("C", y);
// }
//
// demo_await();


sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await sleep(500);
console.log('done');



delay = (fn, ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(() => 42, 300);
