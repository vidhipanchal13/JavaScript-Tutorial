// 1. Declare an empty array;

// const arr1 = Array();
// console.log(arr1);

//using square brackets
// const arr2 = [];
// console.log(arr2);

// 2. Declare an array with more than 5 number of elements

// let arr3 = [1,2,3,4,5];
// let arr4 = ['vidhi', 'rucha', 'rinkal', 'krishna', 'twinkal', 'kartik'];

// 3. Find the length of your array

// console.log(`length of the array : ${arr3.length}`);
// console.log(`length of the string array : ${arr4.length}`);

// 4. Get the first item, the middle item and the last item of the array
// console.log(`first item of the numaric array : ${arr3[0]} `);
// console.log(`first item of the numaric array : ${arr4[3]} `);
// console.log(`first item of the numaric array : ${arr4[5]} `);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

// let mixedDataTypes = [13, 'Vidhi', true, null, undefined];
// console.log(`length of the array : ${mixedDataTypes.length}`);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
// console.log(itCompanies);

// 8. Print the number of companies in the array
// console.log(`number of comapnies : ${itCompanies.length}`);

// 9. Print the first company, middle and last company
// console.log(itCompanies[0]);
// console.log(itCompanies[3]);
// console.log(itCompanies[6]);

// 10. Print out each company 
// console.log(itCompanies[0]);
// console.log(itCompanies[1]);
// console.log(itCompanies[2]);
// console.log(itCompanies[3]);
// console.log(itCompanies[4]);
// console.log(itCompanies[5]);
// console.log(itCompanies[6]);

// 11. Change each company name to uppercase one by one and print them out
// console.log(itCompanies[0].toUpperCase());
// console.log(itCompanies[1].toUpperCase());
// console.log(itCompanies[2].toUpperCase());
// console.log(itCompanies[3].toUpperCase());
// console.log(itCompanies[4].toUpperCase());
// console.log(itCompanies[5].toUpperCase());
// console.log(itCompanies[6].toUpperCase());

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// let a = itCompanies.slice(0,5).join(', ') + " and " +itCompanies[6] + " are big IT companies . ";
// console.log(a);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// let index = itCompanies.indexOf('Apple')  // 0

// if(index != -1){
//    console.log('This company does exist in the array')  
// } else {
//     console.log('This company does not exist in the array')
// }

// 15. Sort the array using sort() method
// console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
// console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0,3));

// 18. Slice out the last 3 companies from the array
// console.log(itCompanies.reverse().slice(0, 3));

// 19. Slice out the middle IT company or companies from the array
// console.log(itCompanies.slice(2,3));

// 20. Remove the first IT company from the array
itCompanies.shift();
// console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
// itCompanies.splice(2,1);
// console.log(itCompanies);

// 22. Remove the last IT company from the array
// itCompanies.pop();
// console.log(itCompanies);

// 23. Remove all IT companies
// itCompanies = [];
// console.log(itCompanies);

// 14. Filter out companies which have more than one 'o' without the filter method
let arr = [];
for(let index of itCompanies){
    let split = index.split('');
    console.log(split);
    for(split of itCompanies){
        for(let i = 0; i < split.length; i++)
        {
            for(let counter = i; counter <= i; counter++)
                
            if(counter == 'o'){
                console.log(arr.push(counter));
            }      
        }
    }
}
