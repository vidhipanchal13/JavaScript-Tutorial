// 1. Using console.log() print out the following statement.
console.log("The quate 'There is no Exercise better for the heart then reaching down and lifting people up.' by john Holmes teaches us to help one another" );

// 2. Using console.log() print out the following quote by mother teresa.
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead "' );

// 3. Check if typeof '10' is exactly equal to 10.if not make it exactly equal 
let num = Number('10');
let num2 =  10;
console.log(typeof num === typeof num2);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it equal with 10.
// let num3 = parseFloat('9.8');
// let num4 = parseInt(num3);
// console.log(num3 == num2); 

// 5. Check if 'on' is found in both python and jargon.
let str1 = "python";
let str2 = "jargon";
if (str1.includes('on') && str2.includes('on')){
console.log('yes we have this string');
}else{
    console.log('oopppss..!!')
}

// 6. i hope this course is not full of jargon. check if jargon is in the sentence.
let str = 'I hope this course not full of jargon';
console.log(str.includes('jargon'));

 
// 7. Generate a random number between 0 and 100 inclusively.
let randomNum = 100*Math.random();
console.log('random value between 0 to 100 : ', randomNum);

// 8. Generate a random number between 50 and 100 inclusively.
randomNum = 50 + (100 - 50) * Math.random();
console.log('random value between 50 to 100 : ', randomNum);

// 9. Generate a random number between 0 and 255 inclusively.
randomNum = 255 * Math.random();
console.log('random value between 0 to 255 : ', randomNum);

//10. Access the 'javascript' string characters using random number.
let string = 'javascript';
console.log('string initialized');
let randomString = string.length * Math.random();
console.log(randomString);

// 11 use console.log() and escape character to print the pattern.
 console.log('1\t1\t1\t1\t1\t');
 console.log('2\t1\t2\t4\t8\t');
 console.log('3\t1\t3\t9\t27\t');
 console.log('4\t1\t4\t16\t64\t');
 console.log('5\t1\t5\t25\t125\t');

 //

