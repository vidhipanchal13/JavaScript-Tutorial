// 1. Display the countries array as a table

let countries = ['India', 'Dubai', 'Finland', 'Skotland', 'U.K', 'USA'];
console.table(countries);

// 2. Display the countries object as a table
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(user)
  

// 3. Use console.group() to group logs

const names = ['Asabeneh', 'Brook', 'David', 'John']

console.group('Names')
console.log(names)
console.groupEnd()

