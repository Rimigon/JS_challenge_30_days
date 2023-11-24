const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises: Level 1

// Read the countries API using fetch and print the name of country, capital, languages, population and area.

fetch(countriesAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    for(const elem of data)
    {
        console.log(elem.name, elem.capital, elem.languages, elem.population, elem.area)
    }  
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

// Print out all the cat names in to catNames variable.

fetch(catsAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    for(const elem of data)
    {
        console.log(elem.name)
    }  
   })
  .catch(error => console.error(error)) // handling error if something wrong happens

