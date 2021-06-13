// 1. Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// 2. Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {   
  console.log('rgb('+ 
  Math.floor(Math.random() * 255)  + ',' + Math.floor(Math.random() * 255) 
  +',' + Math.floor(Math.random() * 255) +')');
}

 rgbColorGenerator()
// rgb(125,244,255)


// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.





// 4.Write a function arrayOfRgbColors which return any number of RGB colors in an array.


// 5.Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(){
var aRgbHex = '1502BE'.match(/.{1,2}/g);
var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16)
];
console.log(aRgb); //[21, 2, 190]
}
convertHexaToRgb();

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(`RGB to HEX : ${rgbToHex(0, 51, 255)}`); // #0033ff

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// function shuffleArray(arr) {
//     let Arr = [1,2,3,4,5,6,7];
//     return Arr;
// }
// console.log(Arr);


// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    console.log("The factorial of " + n + " is " + answer);

  }  
}
factorial(5);


// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}
console.log(isEmpty());

// 11. Call your function sum, it takes any number of arguments and it returns the sum.

function sum()  { 
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];   
    }
    return sum;
 }
 console.log(`Returns sum of given arguments : ${sum(3,9,7,8,5,6,3,12,3,4,5,10)}`);

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(arr) {
    let sum = 0;
    
    for (let i = 0; i <= arr.length; i ++){
      let type  = typeof arr[i];
        if( type == 'number'){
         sum += arr[i]; 
         return sum;  
        }else{
          return `type is not a number`
        }
    }
}

let array  = [1,2,3,4,5,6];
console.log(sumOfArrayItems(array));

//13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(array){
  let result = true
  let false_elem;
  let false_em_index;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(typeof element !== 'number'){
      result = false
      false_elem = element
      false_em_index = index
      break;
    }
  }
  console.log("Average")
  console.log(result,false_elem,false_em_index)
}

average([1,2,3,"r", 5,6])

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'

// function modifyArray(arr) {
  
//   for (let i = 0; i < arr.length; i++) {
//   if(arr[i] == 4){
//     arr[i].toUpperCase();
//   } 
//   return arr;   
//   } 
// }
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));

// 15.Write a function called isPrime, which checks if a number is prime number.

function isPrime(num) {

  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {

      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

}

console.log(isPrime(121));

// 16. Write a functions which checks if all items are unique in the array.

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter(onlyUnique);

console.log(unique); // ['a', 1, 2, '1']

// 17. Write a function which checks if all the items of the array are the same data type.
function sameTypes(arr, type) {
  arr.forEach((item) => {
      if (typeof item == type) {
          console.log('TRUE');
      } else {
          console.log('FALSE');
      }
  });
}
let stringArr = ['vidhi','panchal'];
sameTypes(stringArr,'number');
sameTypes(stringArr,'string');


// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function randomNumber() {  
  let arr = [];
  while(arr.length < 7){
    var r = Math.floor(Math.random() * 9) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);
}
randomNumber();
  
// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

function reverseCountries(arr) {
  let newArr = [];
  let latest;
  for (let i = 0; i < arr.length; i++) {
   newArr.push(arr[i]);
  }
  console.log(`copy of original array : ${newArr}`);
   return arr.reverse();
}
console.log(reverseCountries(['vidhi','rucha','harsh','vivek','monilbhai','kartik']));

