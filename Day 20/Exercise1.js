// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

let firstTitle = document.querySelector('p');
console.log(firstTitle);

// 2. Get each of the paragraph using document.querySelector('#id') and by their id
let getById = document.querySelector('#title3');
console.log(getById);

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allTitles = document.querySelectorAll('p');
console.log(allTitles);

// 4. Loop through the nodeList and get the text content of each paragraph
 

const allTitlesUsingLoop = document.querySelectorAll('p');

console.log(allTitlesUsingLoop.length) // 4
for (let i = 0; i < allTitlesUsingLoop.length; i++) {
  console.log(allTitlesUsingLoop[i].innerText)
}

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const titles = document.querySelectorAll('p')
titles[3].textContent = 'Fourth Title'
console.log(titles[3]);


// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
titles[0].setAttribute('class','title1');
titles[0].setAttribute('id','first_title');
console.log(titles[0]);

//another way to setting an attribute
titles[1].className = 'title2'
titles[1].id = 'second-title'
console.log(titles[1]);


titles[2].className = 'title3'
titles[2].id = 'third-title'
console.log(titles[2]);

titles[3].classList.add('title4');
titles[3].id = 'forth-title'



