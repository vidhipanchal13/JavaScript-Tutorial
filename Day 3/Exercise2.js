// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// const baseValue = prompt('Enter the base of a triangle: ');
// const heightValue = prompt('Enter the height of a triangle: ');

// const areaValue = 0.5 * baseValue * heightValue;

// // console.log(
//   `The area of the triangle is ${areaValue}`
// );


// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

// const sideA = parseInt(prompt('Enter Side a: '));
// const sideB = parseInt(prompt('Enter Side b: '));
// const sideC = parseInt(prompt('Enter Side c: '));

// let total  = sideA + sideB + sideC;

// console.log(`calculate the perimeter of triangle : ${total}`);


// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// const width = parseInt(prompt('Enter the width of Rectangle: '));
// const length = parseInt(prompt('Enter the height of Reactangle: '));

// const area = length * width;
// console.log(
//   `The area of the Rectangle is ${area}`
//  );

//  const parimeter = 2 * (length + width);
//  console.log(
//     `The parimeter of the Rectangle is ${parimeter}`
//    );


// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

//  let pi = 3.14;
//  let radius = prompt("Enter Radius : ");
//  let areaOfCircle = pi * radius * radius;
//  console.log(`area of circle  : ${areaOfCircle}`);
//  let circumferenceOfCircle = 2 * pi * radius;
//  console.log(` circumference of circle : ${circumferenceOfCircle}`);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let x = prompt("enter the x: ");
// let y = 2 * x - 2;
// console.log( y);


// 6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)

// let x1 = prompt("enter x1 :");
// let y1 = prompt("enter y1 :");
// let x2 = prompt("enter x2 :");
// let y2 = prompt("enter y2 :");

// let m = y2 - y1 / x2 - x1 ;
// console.log('slope is :', m);

// 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// let x = prompt('enter x is : ');
// let y = 0;
// y = x ^ 2 + 6 * x + 9;
// console.log(y);

 // 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//    Enter hours: 40
//    Enter rate per hour: 28
//    Your weekly earning is 1120
   
// const hours = prompt('Enter hours : ');
// const length = prompt('Enter rate per hour : ');

// const payOfPerson = hours * length;
// console.log(
//   `Your weekly earning is  ${payOfPerson}`
//  );

 
// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
// let nameLen = 'vidhi panchal'.length
// let check = nameLen > 7 ? console.log('Your name is long') : console.log('Your name is long') ;


// 11. Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

// let firstName = 'Nividita';
// let lastName = 'panchal';
// let compare = firstName.length > lastName.length ? console.log(`your first name, Nividita is longer than your family name, panchal`) : console.log("short name");


// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250;
// let yourAge = 25;
// let age = myAge - yourAge;
// console.log(`I am ${age} years older than you`);


// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let now = new Date();
// let bornYear = prompt('Enter your born year : ');
// console.log(`Enter birth year : ${bornYear}`);
// let year = now.getFullYear() - bornYear;
// let check = year > 18 ? console.log(`you are ${year}. You are old enough to drive`) : console.log(`You are ${year}. You will be allowed to drive after 3 years.`);

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of yours you live: 100
// You lived 3153600000 seconds.

// let date = new Date();
// console.log(date.getTime(prompt('enter a number of year : ')));

// 15.Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

let today = new Date();
// console.log(today);
let nextDay = new Date('2021-04-13 11:05');
let nextDay2 = new Date('12-08-2000 02:60');
let nextDay3 = new Date('12/01/2003 06:56');



