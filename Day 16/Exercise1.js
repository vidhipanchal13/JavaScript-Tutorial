// 1. Change skills array to JSON using JSON.stringify()

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];

const skill = JSON.stringify(skills, undefined, 4)
console.log(skill);

// 2. Stringify the age variable
let age = 250;
const a = JSON.stringify(age,undefined,4)
console.log(a);

// 3. Stringify the isMarried Variable
let isMarried = true;
const m = JSON.stringify(isMarried,undefined,4)
console.log(m);

// 4. Stringify the student object
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const s = JSON.stringify(student,undefined,4);
console.log(s);

// 5. Stringify the students object with only firstName, lastName and skills properties
const s1 = JSON.stringify(student,['firstName','lastName','skills'],4)
console.log(s1);


// 4. Parse the txt JSON to object.
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
const user = JSON.parse(txt, undefined, 4)
console.log(user)

// 6. Find the the user who has many skills from the variable stored in txt.
let value = 0;
let key = '';
let skil = [];

for(const user of txt){
    const element = txt['user'];
    if(element.skills.length > value){
        value = element.skills.length
        key = user;
        skil = element.skills;
    }
}
console.log(skil);