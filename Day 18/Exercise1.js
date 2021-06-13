const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.


fetch(countriesAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    console.log(data)
  })
  .catch(error => console.log(error)) // handling error if something wrong happens


// 2. Print out all the cat names in to catNames variable.
fetch(catsAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    console.log(data)
  })
  .catch(error => console.log(error)) // handling error if something wrong happens