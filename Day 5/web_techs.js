// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file.

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  // 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.


  let exist = webTechs.includes('Sass');
  let check = exist ? console.log('Sass is a CSS preprocess') : console.log(webTechs.push('Sass'));
  console.log(check);
  console.log(webTechs);

