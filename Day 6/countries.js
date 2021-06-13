

// 4. Using the above countries array, create the following new array.

const countries = [
  'Ireland',
  'Bolivia',
  'Finland',
  'Canada',
  'Japan',
  'Kenya',
  'Denmark',
  'Ethiopia',
  'Hungary',
  'Germany',
  'Albania',
  ];
  // const newArr = [[]];
//   for(let i = 0; i < countries.length; i++){
//       newArr.push(countries[i].toUpperCase());
//   }
//   console.log(newArr);


// 5. Using the above countries array, create an array for countries length'.
// for(let i = 0; i < countries.length; i++){
//     newArr.push(countries[i].length);
// }
// console.log(newArr);

// 6. Use the countries array to create the following array of arrays:
//   for (let i = 0; i < countries.length; i++) {
//       newArr.push(countries[[i]]);
//       newArr.push(countries[[i]].toUpperCase().substring(0 , 3));
//       newArr.push(countries[[i]].length);
//   }
//   console.log(newArr)


// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// let arr1 = [];
// let arr2 = [];

// for(let i = 0; i < countries.length; i++){
//  let exist = countries[i].includes('land');
//  if (exist){
//      arr1.push(countries[i]);
//  }else{
//      arr2.push(countries[i])
//  }
// }
// console.log(arr1);
// console.log(arr2);

// 8.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// let arr1 = [];
// let arr2 = [];

// for(let i = 0; i < countries.length; i++){
//  let exist = countries[i].includes('ia');
//  if (exist){
//      arr1.push(countries[i]);
//  }else{
//      arr2.push(countries[i])
//  }
// }
// console.log(arr1);
// console.log(arr2);


// 9. Using the above countries array, find the country containing the biggest number of characters.

// var maxlen = 0;
// let i;
// let string = '';
// for (let i of countries) {
//   if (i.length > maxlen) {
//     maxlen = i.length; 
//     string = i;
// }
// }
// // console.log(maxlen);
// console.log(string);

// 10. Using the above countries array, find the country containing only 5 characters.

// let string = [];
// for (let i of countries) {
//   if (i.length <= 5) {
//     string.push(i);
// }
// }
// console.log(string);


// 11. Copy countries array(Avoid mutation)

// const newArr = [];
// for(let i of countries){
//   newArr.push(i);
// }
// console.log(countries);
// console.log(newArr);

// 12. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// const newArr = [];
// let sortedCountries = '';
// for(let i of countries){
//   newArr.push(i);
//   sortedCountries = newArr.sort();
// }
// console.log(countries);
// console.log(sortedCountries);


// 13. Extract all the countries contain the word 'land' from the countries array and print it as array
// let string = [];
// for(let index of countries){
//   if(index.includes('land')){
//     string.push(index);
//   }
// }
// console.log(string);

// 14. Find the country containing the hightest number of characters in the countries array

// var maxlen = 0;
// let i;
// let string = '';
// for (let i of countries) {
//   if (i.length > maxlen) {
//     maxlen = i.length; 
//     string = i;
// }
// }
// console.log(maxlen);
// console.log(string);

// 15. Extract all the countries containing only four characters from the countries array and print it as array

// let string = [];
// for (let i of countries) {
//   if (i.length <= 5) {
//     string.push(i);
// }
// }
// console.log(string);

// 16. Extract all the countries containing two or more words from the countries array and print it as array

let string = [];
// for (let i of countries) {
//   if (i.length >= 2) {
//     string.push(i);
// }
// }
// console.log(string);


// 17. Reverse the countries array and capitalize each country and stored it as an array
for(let i of countries){
  string.push(i.toUpperCase());

}
console.log(string.reverse());