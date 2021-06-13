// 1 Declare a function fullName and it print out your full name.

// function fullName() {
//     let fName = 'Vidhi';
//     let lName = 'Panchal';
//     let name = fName + " " + lName;
//     console.log(name);
//  }
//  fullName();

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// function fullName(firstName , lastName) {
//     let name = firstName + " " + lastName;
//     console.log(name);
// }
// fullName('vidhi','panchal');

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(a, b) {
  let sum = a + b;
  return sum;
}
console.log(addNumbers(10, 20));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle() {
  let length = 20;
  let width = 5;
  let area = length * width;
  console.log(`area of a rectangle is : ${area}`);
}
areaOfRectangle();

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle() {
  let length = 20;
  let width = 5;
  let area = 2 * (length + width);
  console.log(`perimeter of a rectangle is : ${area}`);
}
perimeterOfRectangle();

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  console.log(`A volume of a rectangular prism is : ${volume}`);
}
volumeOfRectPrism(4, 3, 2);

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(radius) {
  let pi = 3.14;
  let area = pi * radius * radius;
  console.log(`Area of circle is : ${area}`);
}
areaOfCircle(3);

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(radius) {
  let pi = 3.14;
  let area = 2 * pi * radius;
  console.log(`Circumference of a circle is  : ${area}`);
}
circumOfCircle(3);

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function Density(mass, volume) {
  let density = mass / volume;
  console.log(`Density of a substance is : ${density}`);
}
Density(10, 2);

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// Function to calculate speed
function cal_speed(dist, time) {
  let speed = dist / time;
  console.log(`Speed of a moving object : ${speed}`);
}

cal_speed(20, 2);

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon


// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

function cToF(celsius) {
  let cTemp = celsius;
  let cToFahr = (cTemp * 9) / 5 + 32;
  let message = cTemp + "\xB0C is " + cToFahr + " \xB0F.";
  console.log(`Temperature in oC to oF is : ${message} `);
}
cToF(20);

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function calculateBMI(weight, height) {
  let bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (bmi < 20) {
    console.log(`Under Weight : <span>${bmi}</span>`);
  } else if (bmi >= 18.6 && bmi < 24.9) {
    console.log(`Normal : <span>${bmi}</span>`);
  } else {
    console.log(`Over Weight : <span>${bmi}</span>`);
  }
}
calculateBMI(19, 5.4);

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
    if (month === 'September' || month === 'October' || month === 'November') {
            console.log('season is Autumn');
        }else if (month === 'December' || month === 'january' || month === 'February') {
            console.log('season is Winter');
        }else if (month === 'March' || month === 'April' || month === 'May') {
            console.log('season is Spring');
        }else if (month === 'June' || month === 'July' || month === 'August') {
            console.log('season is Summer');
        }else{
            console.log('NonOFthe above');
        }
}
checkSeason('June');

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(a , b , c) {
    let max = Math.max(a , b , c);
    console.log(`Maximum number : ${max}`);
}
findMax(20,45,90)
