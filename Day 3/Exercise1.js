// 1. Declare firstName, lastName, Country, age, isMarried, year variable and assign value to it and use typeof operator to check different data Types.

let firstName = 'vidhi';
let lastName = 'Panchal';
let country = 'India';
let age = 22;
let isMarried = false;
let year = 2021;

console.log(firstName, typeof firstName);
console.log(lastName, typeof lastName);
console.log(country, typeof country);
console.log(age, typeof age);
console.log(isMarried, typeof isMarried);
console.log(year, typeof year);

// 2. Check if type of '10' is equal to 10

let a = '10';
let b = 10;
console.log(typeof a === typeof b);

// 3. Check if parseInt('9.8') is equal to 10

let c = parseInt('9.8');
let d = 10;
console.log(typeof c === typeof d);

// 4. Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
false == 0;
0 == '';
null == undefined;
[] == false;

// Write three JavaScript statement which provide falsy value.
false == null;
NaN == NaN;
Infinity == true;
[] == true;


// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Find the length of python and jargon and make a falsy comparison statement.
console.log(`comaprison`);
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python'.length > 'jargon'.length);


// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python
console.log(`comaprison using logical operator`);
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('dragon'.endsWith('on') === 'python'.endsWith('on')));

// 7. Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now = new Date();
console.log(now);
console.log('Current Year : ', now.getFullYear());
console.log('Current Month : ', now.getMonth());
console.log('Current Date : ', now.getDate());
console.log('Current Day : ', now.getDay());
console.log('Current Hours : ', now.getHours());
console.log('Current Minutes : ', now.getMinutes());
console.log('Current seconds : ', now.getMilliseconds());
console.log('Seconds From January 1, 1970 to now: ', now.getTime());










































