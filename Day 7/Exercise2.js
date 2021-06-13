// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c, x, y) {
  let value = a * x + b * y + c;
  console.log(`Linear equation is : ${value}`);
}
solveLinEquation(2, 3, 4, 5, 4);

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
  var result = (-1 * b + Math.sqrt(Math.pow(b, 2)) - 4 * a * c) / (2 * a);
  var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2)) - 4 * a * c) / (2 * a);

  return result + " " + result2;
}

console.log(solveQuadEquation()); // {0}
console.log(solveQuadEquation(1, 4, 4)); // {-2}
console.log(solveQuadEquation(1, -1, -2)); // {2, -1}
console.log(solveQuadEquation(1, 7, 12)); // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)); //{2, -2}
console.log(solveQuadEquation(1, -1, 0)); //{1, 0}

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr) {
  for (let index of arr) {
    console.log(index);
  }
}
const array = ["vidhi", 13, "computer engineer", 1020];
printArray(array);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  console.log(`0${day}/0${month}/${year}  ${hour}:${minutes}`);
}
showDate();

// 5. Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

function swapValus(a, b) {
  let temp;
  temp = a;
  a = b;
  b = temp;
  console.log(`value after swaping : ${a}`);
  console.log(`value after swaping : ${b}`);
}
swapValus(10, 20);
swapValus(45, 30);

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
reverseArray(["vidhi", "rucha", "kavya", "rinkal"]);
reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let upperCase = arr[i].toUpperCase();
    console.log(upperCase);
  }
}
capitalizeArray(["vidhi", "rucha", "kavya", "rinkal"]);

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(arr) {
  arr.push("kartik");
  for (let i = 0; i < arr.length; i++) {}
  console.log(arr);
}
addItem(["vidhi", "rucha", "kavya", "rinkal"]);

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr) {
    arr.pop();
    console.log(arr);
}
removeItem(["vidhi", "rucha", "kavya", 'kartik', "rinkal"]);


// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
    let sum = 0
    for (let i = 0; i <=number; i++) {
      sum += i;
    }
    console.log(`Sum Of All Numbers: ${sum}`);
  }
  sumOfNumbers(10);

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(number) {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        if(i % 2 === 1){
            sum += i;
        }
    }
    console.log(`Sum Of All odd Numbers: ${sum}`);
  }
  sumOfOdds(30);  

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven(number) {
    let sum = 0
    for (let i = 0; i <= number; i++) {
        if(i % 2 == 0){
            sum += i;
        }
    }
    console.log(`Sum Of All even Numbers: ${sum}`);
  }
  sumOfEven(30);  

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(number) {
    let even = [];
    let odd = [];
    for (let i = 0; i <= number; i++) {
        if(i % 2 == 0){
            even.push(i);
        }
        else{
            odd.push(i);
        }
    }
    console.log(`even Numbers: ${even.length}`);
    console.log(`odd Numbers: ${odd.length}`);
  }
  evensAndOdds(100);  

// 14. Write a function which takes any number of arguments and return the sum of the arguments

function sum()  { 
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];   
    }
    console.log(`Sum  : ${sum}`);
 }
 sum(3,9,7,8,5,6,3,12,3,4,5,10);

// 15. Writ a function which generates a randomUserIp.

function Ip() {
    let ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    console.log(`Random Ip address is : ${ip}`);
}
Ip();

// 16. Write a function which generates a randomMacAddress

function randomMac() {
    const mac = 
      (0x52).toString(16) + ":" +
      (0x54).toString(16) + ":" +
      (0x00).toString(16) + ":" +
      Math.floor((Math.random() * 0xff)).toString(16) + ":" +
      Math.floor((Math.random() * 0xff)).toString(16) + ":" +
      Math.floor((Math.random() * 0xff)).toString(16);
    
    console.log(`Random MAC address is : ${mac}`);
  }
  randomMac();


// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator() {
    let letters = "0123456789ABCDEF";
    let color = '#';
  
    for (let i = 0; i < 6; i++){
    color += letters[(Math.floor(Math.random() * 16))];
}
return color
}
randomHexaNumberGenerator();

function randomColourGenerator(type, length){
  let colours = []
  switch (type) {
    case 'hexa':
      for (let index = 0; index < length; index++) {
        let colour = randomHexaNumberGenerator()
        colours.push(colour);
      }
      setTimeout(() => {
        console.log(colours)
      }, 3000);
      break;
    case 'rgb':
      for (let index = 0; index < length; index++) {
    
      }
      break;
  
    default:
      break;
  }
}
console.log("Random Colours")
console.log(randomColourGenerator('hexa', 4))


// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
let {nanoid} = require('nanoid')
function generateUserId(num, count){
  let ids = []
  for (let index = 0; index < count; index++) {
    let id = nanoid(num)
    ids.push(id)
  }
  setTimeout(() => {
    console.log(ids)
  }, 3000);
}

generateUserId(7, 10)


