
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
const retry = (fn, times) => {return new Promise(resolve) }