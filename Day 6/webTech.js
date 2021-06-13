// 1. Find the longest word in the webTechs array

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];


// 1. Find the longest word in the webTechs array
// let maxlen = 0;
// let string = "";
// for (let i of webTechs) {
//   if (i.length > maxlen) {
//     maxlen = i.length;
//     string = i;
//   }
// }
// console.log(string);


// 2. Use the webTechs array to create the following array of arrays:
    // let newArr = [];
    //   for (let i = 0; i < webTechs.length; i++) {
    //       newArr.push(webTechs[i]);
    //       newArr.push(webTechs[i].length);
    //   }
    //   console.log([newArr]);


    // 3. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
    // let string = '';
    // for(let i = 0; i < webTechs.length; i++){
    //     string = webTechs;
    // }
    // console.log(string);

    
    // 4.Sort the webTechs array and mernStack array

   for (let i = 0; i < webTechs.length; i++) {
     webTechs.sort();
   }
   console.log(webTechs);
