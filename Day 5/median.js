let age = [19,22,23,81,23,54,34,22,53,56,21]

let length = age.length;
let half = Math.trunc(length/2)
if(length%2 === 0){
    let median = (age[half] + age[half-1])/2
    console.log(median)
} else {
    let median = age[half]
    console.log(median)
}