// 1. Destructure the countries object print name, capital, population and languages of all countries

const countries = [{
    name: 'India',
    capital: 'new Delhi',
    population: 1350000,
    language: 'Gujrati'
    },
    {
    name: 'Canada',
    capital: 'new Delhi',
    population: 1350000,
    language: 'Gujrati'
    },
    {
    name: 'USA',
    capital: 'new Delhi',
    population: 1350000,
    language: 'Gujrati'
    },
    {
    name: 'U.K',
    capital: 'new Delhi',
    population: 1350000,
    language: 'Gujrati'
    },
    {
    name: 'Dubai',
    capital: 'new Delhi',
    population: 1350000,
    language: 'Gujrati'
    },
    {
    name: 'Russia',
    capital: 'new Delhi',
    population: 1350000,
    language: 'Gujrati'
    },
    {
    name: 'Finland',
    capital: 'new Delhi',
    population: 1350000,
    language: 'Gujrati'
    }   
]
for (const {name, capital, population, language} of countries){
    console.log(name, capital, population, language);
  }



// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// console.log(name, skills, jsScore, reactScore)

let [name1,[...skills], [, ,jsScore,reactScore]] = student; 
console.log(name1,skills,jsScore,reactScore);



// 3. Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ];

for (let [name,[...skills],[...scores]] of students){
    let name1 = name;
    let skills1 = skills;
    let score1 = scores;
var obj = [{
  name: name1,
  skills: skills1,
  scores: score1
},
{
     name: name,
    skills: [skills],
    scores: [scores]
}]
console.log(obj);
}