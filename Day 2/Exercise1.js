// 1. Declare a variable named challange and assign it to an initial value '30 Days Of JavaScript'.
let challange = '30 Days Of JavaScript';

// 2. Print the string on the browser console using console.log()
console.log(challange);

// 3. print the length of the string on the browser using console.log()
console.log('length of the string : ', challange.length);

// 4. Change all the string characters to capital letters using toUppercase() method.
console.log('length of the string : ', challange.toUpperCase());

// 5. Change all the string characters to capital letters using toLowercase() method.
console.log('length of the string : ', challange.toLowerCase());

// 6. Cut(slice) out the first word of the string using substr() or substring() method.
console.log('length of the string : ', challange.slice(1,5));
console.log(challange.substr(4,8));
console.log('sub string of the string : ', challange.substring(2, 5));

// 7. Slice out the pharse Days of javascript from 30 Days Of JavaScript.
console.log('slice of the string : ', challange.slice(2,7));

// 8. Check if the string contains a word Script using includes() method.
console.log('Check the string: ', challange.includes('Script'));

// 9. Split the string into an array using split() method.
console.log('split of the string : ', challange.split());

// 10. Split the string 30 Days Of Javascript at the space using split() method.
console.log('split of the string : ', challange.split(" "));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log('split of the string : ', companies.split(", "));

// 12. Change 30 Days Of Javascript to 30 Days Of Python using replace().
console.log('replace the string : ', challange.replace('JavaScript','Python'));

// 13. What is Character at index 15 in '30 Days Of Javascript' string ? use charAt() method.
console.log('index of the string using charAt : ', challange.charAt(3));

// 14. What is the character code of J in '30 Days Of Javascript' string using charCodeAt()
console.log('index of the string using charCodeAt : ', challange.charCodeAt(17));

// 15. use indexOf to determine the position of the first occurence of a in 30 Days Of JavaScript.
console.log('first index of the string using indexOf : ', challange.indexOf('a'));

// 16. use lastIndexOf() to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log('last index of the string : ', challange.lastIndexOf("a"));

// 17. use indexOf to find the position of the first occurence of the word because in the following sentence.
let str1 = 'You cannot end a sentence with because because because is a conjuction';
console.log('first index of the string : ', str1.indexOf("because"));

// 18. use indexOf to determine the position of the last occurence of the word because in the following.
console.log('first index of the string : ', str1.lastIndexOf("because"));

// 19. use search() to find the position of the first occurence of the word because in the following sentence : 'You cannot end a sentence with because because because is a conjuction' 
console.log('first index of the string using search() : ', str1.search("because"));

// 20. Use trim() to remove any trailing whitespaces at the beginning and the end of a string eg. '30 Days Of JavaScript'.
console.log('trim whitespace in the string : ', challange.trim());

// 21. use startWith() method with the string 30 days Of JavaScript and make the result true.
console.log('check the start of the string : ', challange.startsWith("30"));

// 22. use endsWith() method with the string 30 days Of JavaScript and make the result true.
console.log('check the end of the string : ', challange.endsWith("Script"));

// 23. match() method to find all the a's in 30 Days Of JavaScript
console.log('match the string : ', challange.match("a"));

// 24. use concat() and merge 'hiiii.......' and 'I am A vidhi' to a single string, 'hiiii.......I am A vidhi'
let a = 'hiiii.......';
let b = 'I am A vidhi';

console.log('concat of the string using concat(): ', a.concat(b));
console.log('concat of the string + operator : ', a + " " + b);

// 25. use repeat() method to print 30 Days Of Java Script 2 times.
console.log('repeat the string 2 times: ', challange.repeat(2));












