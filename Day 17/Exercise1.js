// 1. Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Vidhi') ;
localStorage.setItem('lastName', 'Panchal') ;
localStorage.setItem('age', 22) ;
localStorage.setItem('country', 'India') ;
localStorage.setItem('city', 'Ahmedabad') ;
console.log(localStorage)

// 2. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: 'Reha',
    lastName: 'Sinha',
    age: 25,
    skills: ['Java','C++','Python','Nodejs'],
    country: 'India',
}
let j = JSON.stringify(student,undefined,4);
localStorage.setItem(student,j);
console.log(localStorage);