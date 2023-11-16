// Exercises:Level 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']

// 1 create an empty set

const emptySet = new Set()

// 2 Create a set containing 0 to 10 using loop

const tenSet = new Set()

for(let i = 0; i <= 10;i++){
  tenSet.add(i)
}
console.log(tenSet)

// 3 Remove an element from a set

tenSet.delete(0)
console.log(tenSet)

// 4 Clear a set

tenSet.delete()

// 5 Create a set of 5 string elements from array

const arrOfString = ["qwe", "asd", "zxc", "rty", "fgh"]
const setOfString = new Set(arrOfString)
console.log(setOfString)

// 6 Create a map of countries and number of characters of a country

const countriesAndNums = [
  [1, 'Finland'],
  [2, 'Sweden'],
  [3, 'Norway'],
]
const mapOfCountriesAndNums = new Map(countriesAndNums)
console.log(mapOfCountriesAndNums)

// Exercises:Level 2

// 1 Find a union b

let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// 2 Find a intersection b

A = new Set(a)
B = new Set(b)

c = a.filter((num) => B.has(num))
C = new Set(c)

console.log(C)

// 3 Find a with b

A = new Set(a)
B = new Set(b)

c = a.filter((num) => !B.has(num))
C = new Set(c)

console.log(C)
