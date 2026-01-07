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