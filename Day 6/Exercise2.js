// 1. Develop a small script which generate any number of characters random id:

// let n = 36;
// let r;
// for (let i = 0; i <= n; i++){
//  r = Math.random().toString(36).substring(2,n);
// }
// console.log("random strings : ", r);

// 2. Write a script which generates a random hexadecimal number.
// let letters = "0123456789ABCDEF";
//     let color = '#';
  
//     for (let i = 0; i < 6; i++)
//        color += letters[(Math.floor(Math.random() * 16))];
  
//  console.log(color);


// 3. Write a script which generates a random rgb color number.
// var r = () => Math.random() * 256 >> 0;
// var color = `rgb(${r()}, ${r()}, ${r()})`;
// console.log(color);


// 4. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let fruit = ['banana', 'orange', 'mango', 'lemon'] ;
for (let i = fruit.length; i >= 0; i--) {
    // console.log(fruit[i]);
} 

// 5. Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  let string = '';
  for(let index of fullStack){
      for (const index of fullStack) {
          string += index; 
        }
        break;
    }
    console.log(`${string}`);