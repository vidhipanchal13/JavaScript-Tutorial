// 2. First remove all the punctuations and change the string to array and count the number of words in the array.

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text)
console.log(text.length);
const words = text.split(' ');
console.log(words); 
console.log(words.length);

// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added

shoppingCart.push('Sugar');
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack)
