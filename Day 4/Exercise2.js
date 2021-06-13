
// 1. Write a code which can give grades to students according to theirs scores:

// let userMarks = prompt('Enter marks :');
// if(userMarks > 80 && userMarks < 100){
//     console.log("A Grade");
// }else if(userMarks > 70 && userMarks < 89){
//     console.log("B Grade");

// }else if(userMarks > 60 && userMarks < 69){
//     console.log("C Grade");
    
// }else if(userMarks > 50 && userMarks < 59){
//     console.log("D Grade");
// }else {
//     console.log("fail");
// }

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

// let season = prompt('enter season is : ');

// if (season === 'September' || season === 'October' || season === 'November') {
//     console.log('season is Autumn');
// }else if (season === 'December' || season === 'january' || season === 'February') {
//     console.log('season is Winter');
// }else if (season === 'March' || season === 'April' || season === 'May') {
//     console.log('season is Spring');
// }else if (season === 'June' || season === 'July' || season === 'August') {
//     console.log('season is Summer');
// }else{
//     console.log('NonOFthe above');
// }

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

let Day = prompt('What is the day Today ? ');

switch (Day) {
    case 'Monday','Tuesday','wednesday','Thursday','Friday' :
        console.log(`${Day} is a Working Day`);
        break;

    case 'Sunday' , 'Saturday':
        console.log(`${Day} is a Weekend`);
        break;

    default:
        console.log('half Workind day');
        break;
}


