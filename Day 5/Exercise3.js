const age = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
// console.log(age.sort());

// Find the median age(one middle item or two middle items divided by two)


// Find the average age(all items divided by number of items)
var sum = 0;
var len = age.length;
for( index of age){
    sum += parseInt( index ); 
    avg = sum/len;
}
// console.log( "The sum of all the elements is: " + sum + " The average is: " + avg );

console.log(avg);

// Find the range of the ages(max minus min)
// let sort = age.sort();
// console.log(sort);
// console.log(sort.indexOf(26));
// let range = age[9] - age[0];
// console.log(range);

// console.log(Math.max(...age) - Math.min(...age));

// Compare the value of (min - average) and (max - average), use abs() method 


