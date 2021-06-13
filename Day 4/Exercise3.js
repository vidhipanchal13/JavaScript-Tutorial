// 1. Write a program which tells the number of days in a month.

// let month = prompt('Enter month : ');
// console.log(`enter month : ${month}`);

// switch (month) {
//     case 'january':
//         console.log('January has 31 days')
//         break;

//         case 'february':
//         console.log('february has 28 days')
//         break;

//         case 'march':
//         console.log('march has 31 days')
//         break;

//         case 'april':
//         console.log('april has 30 days')
//         break;

//         case 'may':
//         console.log('may has 31 days')
//         break;

//         case 'june':
//         console.log('June has 30 days')
//         break;

//         case 'july':
//         console.log('July has 31 days')
//         break;

//         case 'august':
//         console.log('august has 31 days')
//         break;

//         case 'september':
//         console.log('september has 30 days')
//         break;

//         case 'october':
//         console.log('october has 31 days')
//         break;

//         case 'november':
//         console.log('november has 30 days')
//         break;

//         case 'december':
//         console.log('december has 31 days')
//         break;

//     default:
//         console.log('invalid input');
//         break;
// }

// 
let month = prompt('enter month : ');

if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
			console.log("Number of days is 31");
		else if((month == 2) && ((year%400==0) || (year%4==0 && year%100!=0)))
		{
			console.log("Number of days is 29");
		}
		else if(month == 2)
		{
			console.log("Number of days is 28");
		}
		else
			console.log("Number of days is 30");
	

