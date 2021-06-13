// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 0; i <= 10; i++) {
    // console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//  console.log(i);
//  i++;   
// }


// do{
//     console.log(i);
//     i++;
// }while (i <= 10)


// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// let i = 10;
// while (i >= 0) {
//  console.log(i);
//  i--;   
// }


// do{
//     console.log(i);
//     i--;
// }while (i >= 0)

// 3. Iterate 0 to n using for loop
// let value = prompt('enter value : ');
// for(let i = 0 ; i <= value ; i++){
//     console.log(i);
// }

// 4. Write a loop that makes the following pattern using console.log():

// let n = 5; 
// let string = "";
// for (let i = 1; i <= n; i++) { 
//   for (let j = 0; j < i; j++) { 
//     string += "#";
//   }
//   string += "\n";
// }
// console.log(string);

// 5.  Use loop to print the following pattern:

// for(let i = 0; i <= 10; i++){
//     console.log(`${i} x ${i} = ${i * i}`);
// }

// 6. Using loop print the following pattern
// for(let i = 0; i <= 10; i++){
// console.log(`${i}   ${i * i}  ${i * i * i}`);
// }


// 7. Use for loop to iterate from 0 to 100 and print only odd numbers
// console.log ('Even Numbers ');
// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log (i);
//     }
// }


// 8. Use for loop to iterate from 0 to 100 and print only even numbers
// console.log ('Odd Numbers ');
// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 1){
//         // console.log (i);
//     }
// }

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

// for (var i = 2 ; i <= 100  ; i++) {
//     if((i%2===0) || (i%3===0))
//         continue;
//     console.log(i);
// }

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0;
// let i;
// for (i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(`The sum of all numbers 0 to 100 is ${sum}`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let sum1 = 0;
// let sum2 = 0;

// for (let i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//         sum1 += i;
//     }
//     else{
//         sum2 += i;        
//     }
// }
// console.log(`The sum of all even from 0 to 100 is ${sum1}. And the sum of all odds from 0 to 100 is ${sum2}`);



// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let sum1 = 0;
// let sum2 = 0;
// let newArr = [];

// for (let i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//         sum1 += i;
//     }
//     else{
//         sum2 += i;        
//     }
// }
// newArr.push(sum1);
// newArr.push(sum2);
// console.log(newArr);

// 13. Develop a small script which generate array of 5 random numbers
// var arr = [];
// for (var i=0; i < 5; i++) {
//     arr.push(Math.round(Math.random()))
// }
// console.log(arr);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
// var arr = [];
// while(arr.length < 8){
//     var r = Math.floor(Math.random() * 100) + 1;
//     arr.push(r);
// }
// console.log(arr);

// 15. Develop a small script which generate a six characters random id:

// let r = Math.random().toString(36).substring(7);
// console.log("random strings : ", r);

