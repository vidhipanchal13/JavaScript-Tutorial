// 1. Find the person who has many skills in the users object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// 1. Find the person who has many skills in the users object.

// 2. Count logged in users,count users having greater than equal to 50 points from the following object.

// 3. Find people who are MERN stack developer from the users object

  let values = Object.values(users);
  for(const val of values) {
    let skill = val.skills;
    console.log(skill);
  }

// 4.Set your name in the users object without modifying the original users object
users.vidhi = 'vidhi';
console.log(users)

// 5. Get all keys or properties of users object
let keys = Object.keys(users);
console.log(keys);

// 6. Get all the values of users object
let val = Object.values(users);
console.log(val);

// 7. Use the countries object to print a country name, capital, populations and languages.

 let countries = {
   name: 'india',
   capital: 'New Delhi',
   populations: '136.64 crores',
   languages: ['Hindi','English','Gujrati','Marathi','Panjabi','Tamil']
 }
 console.log(countries);


 