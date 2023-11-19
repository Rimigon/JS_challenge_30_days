// Exercises:Level 1

// 1 Display the countries array as a table

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]

console.table(countries)

// 2 Display the countries object as a table

const countriesObj = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://restcountries.eu/data/afg.svg',
      currency: 'Afghan afghani'
    },
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      languages: ['Swedish'],
      population: 28875,
      flag: 'https://restcountries.eu/data/ala.svg',
      currency: 'Euro'
    }]

    console.table(countriesObj)

// 3 Use console.group() to group logs

console.group("Nums")
console.log("11111111")
console.log("222222222")
console.groupEnd()

console.group("Countries")
console.table(countries)
console.table(countriesObj)
console.groupEnd()

// Exercises:Level 2

// 1 10 > 2 * 10 use console.assert()

console.assert(10 > 2 * 10, "false")

// 2 Write a warning message using console.warn()

console.warn("Warning")

// 3 Write an error message using console.error()

console.error("error")

// Exercises:Level 3

// 1 Check the speed difference among the following loops: while, for, for of, forEach

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let i = 0
console.time('Regular while loop')
while(i < numbers.length){
    console.log(numbers[i])
    i++
}
console.timeEnd('Regular while loop')

console.time('Regular for loop')
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
console.timeEnd('Regular for loop')
  
console.time('for of loop')
for (const num of numbers) {
    console.log(num)
}
console.timeEnd('for of loop')
  
console.time('forEach loop')
numbers.forEach(num => {
    console.log(num)
})
console.timeEnd('forEach loop')
