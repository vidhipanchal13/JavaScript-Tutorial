// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const titles = document.querySelectorAll('p')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'blue'
  } else {
    title.style.color = 'red'
  }
  
})
const titles1 = document.querySelectorAll('h1')
titles1.forEach((title, i) => {
  title.style.fontFamily = 'italic' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.backgroundColor = 'red'
  }
})


// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
const title = document.querySelectorAll('p')
title.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
  
})


// 3. Set text content, id and class to each paragraph

const alltitle = document.querySelectorAll('p');
alltitle[0].textContent = 'I am First'
alltitle[1].textContent = 'I am Second'
alltitle[2].textContent = 'I am Third'
//another way to setting an attribute
titles[0].className = 'title1'
titles[0].id = 'first-title'
//another way to setting an attribute
titles[1].className = 'title2'
titles[1].id = 'second-title'
//another way to setting an attribute
titles[2].className = 'title3'
titles[2].id = 'fourth-title'




