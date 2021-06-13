// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

// let txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

// let matchTxt = txt.match(/(\d+)/g);
// if(matchTxt){
//     let sum = 0;
//     for(let total of matchTxt){
//         let int = parseInt(total);
//         console.log(int);
//         sum += int;
//     }
//     console.log(sum);
// }


// // 2. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

// let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
// console.log(tenMostFrequentWords(paragraph))
// console.log(tenMostFrequentWords(paragraph, 10))
//  // Result: "do"

// function tenMostFrequentWords(paragraph) {
//   let words = paragraph.match(/\w+/g);
//   console.log(words); 

//   let occurances = {};

//   for (let word of words) {
//     if (occurances[word]) {
//       occurances[word]++;
//     } else {
//       occurances[word] = 1;
//     }
//   }

//   console.log(occurances); // { How: 1, do: 2, you: 1 }
// }

// 3. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.


sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

console.log(cleanText(sentence))
// 
function cleanText(sentence) {
    matches = sentence.replace(/[!@#$%^&*;?]/g, "")
    console.log(matches)  ;

    let words = matches.match(/\w+/g);
  console.log(words); 
    let occurances = {};

  for (let word of words) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }

  console.log(occurances); // { How: 1, 
}