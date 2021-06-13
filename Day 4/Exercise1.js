// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

// let age = prompt('Enter your age : ');
// console.log(`Enter your age : ${age}`)
// if (age >= 18){
//     console.log('You are old enough to drive');
// }
// if(age < 18){
//     console.log('stating to wait for the number of years he neds to turn 18.');
// }

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
// let myAge = 20;
// let yourAge = prompt('enter your age : ');
// let age1 = yourAge - myAge;
// if(yourAge > myAge){
//     console.log(`you are ${age1} years older than me`);
// }else {
//     console.log(`i am ${age1} older than you`);
// }

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 4;
let b = 3;
// if(a > b){
//     console.log(`${a} is greater than ${b}`);
// }else{
//     console.log(`${a} is less than ${b}`);
// }

let c = a > b? `${a} is greater than ${b}` : `${a} is less than ${b}` ;
// console.log(c);

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = prompt('Enter a number : ');
if (num % 2 == 0){
    console.log(`${num} is an even number`);
}else{
    console.log(`${num} is an odd number`);

}