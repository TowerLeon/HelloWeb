/* Filename: script.js*/

function myFun () {
    document.getElementById('demo')
        .innerHTML = 'Content Changed'
}


console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
