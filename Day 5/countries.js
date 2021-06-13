//  Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file.


let countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  // 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
  let index = countries.includes('Ethiopia');
  let exist = index ?  console.log(countries[4].toUpperCase()): console.log(countries.push('Ethiopia'));
  console.log(exist);
  console.log(countries);

  // 1.Slice the first ten countries from the countries array
  console.log(countries.slice());

  // 2. Find the middle country(ies) in the countries array
console.log(countries.slice(4,5));

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
let arr1 = [];
let arr2 = [];
for (index in countries){
if(index % 2 === 0 ){

  arr1.push(countries[index]);
 
}else{
  arr2.push(countries[index]);
}
}
console.log(arr1);
console.log(arr2);


