const countries = ['Finland','Denmark', 'Sweden','Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Use forEach to console.log each country in the countries array.

countries.forEach(element => {
    console.log(element);
});

// 2. Use forEach to console.log each name in the names array.

names.forEach(name => console.log(name));

// 3.Use forEach to console.log each number in the numbers array.
numbers.forEach(num => console.log(num));

// 4. Use map to create a new array by changing each country to uppercase in the countries array.
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

// 5. Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength);

// 6. Use map to create a new array by changing each number to square in the numbers array
const squareOfNumbers = numbers.map((num) => num * num)
console.log(squareOfNumbers);

// 7. Use map to change to each name to uppercase in the names array
const namesInUpper = names.map((name) => name.toUpperCase())
console.log(namesInUpper);

// 8. Use map to map the products array to its corresponding prices.
const price = products.map((price) => price.price)
console.log(price)

// 9. Use filter to filter out countries containing land.
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

// 10. Use filter to filter out countries having six character.
const countriesHaveSixChar = countries.filter(country => country.length == 6)
console.log(countriesHaveSixChar)

// 11. Use filter to filter out countries containing six letters and more in the country array.
const MoreThenSixChar = countries.filter(country => country.length > 6)
console.log(MoreThenSixChar)

// 12. Use filter to filter out country start with 'E';
const countryStartWithE = countries.filter((country) => country.startsWith('I'))
console.log(countryStartWithE);

// 13. Use filter to filter out only prices with values.
const pricesWithValues = products.filter((product) => product['price'])
console.log(pricesWithValues);

// 14. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

let stringArr = ['facebook','twitter','linkedin','youtube'];

const getStringLists = arr => {
  let elem = ' ';
  let space = " ";
  stringArr.forEach(function (element) {
    elem = element + space + elem ;
  })
  return elem;
};
console.log(getStringLists(stringArr));

// 15. Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

// 16. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// const countriesSentence = countries.reduce((acc, cur) => 
// acc +  cur )
// console.log(countriesSentence);

// 17. Use some to check if some names' length greater than seven in names array
const someNamesGreaterSeven = names.some((name) => name.length > 7)
console.log(someNamesGreaterSeven); // true

// 18. Use every to check if all the countries contain the word land
const everyCountryHaslandWord = countries.every((country) => country.includes('land'))
console.log(everyCountryHaslandWord);

// 19. Use find to find the first country containing only six letters in the countries array
const findCountry = countries.find(country => country.length == 6)
console.log(findCountry);

// 20. Use findIndex to find the position of the first country containing only six letters in the countries array
const findIndexOfCountry = countries.findIndex(country => country.length == 6)
console.log(findIndexOfCountry);

// 21. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findIndexOfNorway = countries.findIndex((country) => country.includes('Norway'))
console.log(findIndexOfNorway);

// 22. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findIndexOfRussia = countries.findIndex(country => country.includes('Russia'))
console.log(findIndexOfRussia);