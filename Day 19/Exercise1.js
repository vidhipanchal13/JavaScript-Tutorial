// 1. Create a closure which has one inner function
// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count
//     }

//     return innerFunction
// }
// const innerFunc = outerFunction()

// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())

// 2. Create a closure which has three inner functions

function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
