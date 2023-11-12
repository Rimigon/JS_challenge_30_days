const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']



// Exercises: Level 1

// 1

for(let i = 0; i <= 10; i++){
    console.log(i)
}

let i = 0

while(i <= 10){
    console.log(i)
    i++
}

i = 0

do{
    console.log(i)
    i++
}while(i <= 10)

// 2

for(let i = 10; i >= 0; i--){
    console.log("for: "+i)
}

i = 10

while(i >= 0){
    console.log("while: "+i)
    i--
}

i = 10

do{
    console.log("do while: "+i)
    i--
}while(i >= 0)

// 3

let n = 15
for(let i = 0; i <= n; i++){
    console.log("n: "+i)
}

// 4

let sharp = "#"
for(let i = 0; i < 7; i++){
    console.log(sharp)
    sharp += "#"
}

// 5

for(let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

// 6

console.log("i     i^2     i^3")
for(let i = 0; i <= 10; i++){
    console.log(`${i}     ${i**2}     ${i**3}`)
}

// 7

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

// 8

for(let i = 0; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}

// 9

for(let i = 1; i <= 100; i++){
    let diveders = 0;
    for(let j = 1; j <= 100; j++){
        if(i % j == 0){
            diveders += 1
        }
    }
    if(diveders == 2){
        console.log("Prime: "+ i)
    }
}

// 10
 
let sum = 0
for(let i = 0; i <= 100; i++){
    console.log(i)
    sum += i
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

// 11

let evensSum = 0
let oddsSum = 0
for(let i = 0; i <= 100; i++){
    console.log(i)
    i % 2 == 0 ? evensSum += i: oddsSum += i
}

console.log(`The sum of all evens from 0 to 100 is ${evensSum}. And the sum of all odds from 0 to 100 is ${oddsSum}.`)

// 12

const evensAndOddsArr = [evensSum, oddsSum]
console.log(evensAndOddsArr)

// 13

const fiveNumArr = Array(5)
for(let i = 0; i <= 5; i++){
    fiveNumArr[i] = Math.floor(Math.random() * 11)
}

console.log(fiveNumArr)

// 14

const fiveUniqNumArr = []
for(let i = 0; i <= 5; i++){
    let random = Math.floor(Math.random() * 11)
    for(let j = 0; j < fiveUniqNumArr.length; j++){
        if(random == fiveUniqNumArr[j] && i != j){
            random = Math.floor(Math.random() * 11)
            j = 0
        }
    }
    fiveUniqNumArr.push(random)
}

console.log(fiveUniqNumArr)

// 15

let strAlphabet = "qwertyuiopasdfghjklzxcvbnm0123456789"
const alphabet = strAlphabet.split("")
let id = ""

for(let i = 0; i < 6; i++){
    id += alphabet[Math.floor(Math.random() * 36)]
}
console.log(id)

// Exercises: Level 2

// 1

id = ""
let numOfId = 13

for(let i = 0; i < numOfId; i++){
    id += alphabet[Math.floor(Math.random() * 36)]
}
console.log(id)

// 2

const hexDecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
let hexNum = "#"

for(let i = 0; i < 6; i++){
    hexNum += hexDecimal[Math.floor(Math.random() * 16)]
}

console.log(hexNum)

// 3

let rgbNum = "rgb("

for(let i = 0; i < 3; i++){
    rgbNum += Math.floor(Math.random() * 255)
    if(i != 2){
        rgbNum += ','
    }
    else{
        rgbNum += ')'
    }
}
console.log(rgbNum)

// 4

const upperCountries = []

for(let i = 0; i < countries.length; i++){
    upperCountries.push(countries[i].toUpperCase())
}
console.log(upperCountries)

// 5

const lengthCountries = []

for(let i = 0; i < countries.length; i++){
    lengthCountries.push(countries[i].length)
}
console.log(lengthCountries)

// 6

const expandedCountriesArr = [[],[],[],[],[],[],[],[],[],[],[]]

for(let i = 0; i < countries.length; i++){
    expandedCountriesArr[i].push(countries[i])
    expandedCountriesArr[i].push(countries[i].slice(0,3).toUpperCase())
    expandedCountriesArr[i].push(countries[i].length)
}
console.log(expandedCountriesArr)

// 7

const countriesLand = []
for(let i = 0; i< countries.length; i++){
    if(countries[i].includes('land')){
        countriesLand.push(countries[i])
    }
}

if(countriesLand.length == 0){
    console.log('All these countries are without land')
}
else{
    console.log(countriesLand)
}

// 8

const countriesIa = []
for(let i = 0; i< countries.length; i++){
    if(countries[i].endsWith('ia')){
        countriesIa.push(countries[i])
    }
}

if(countriesIa.length == 0){
    console.log('These are countries ends without ia')
}
else{
    console.log(countriesIa)
}

// 9

let numOfCharacters = countries[0].length
let biggestCharactersCountry = countries[0]

for(let i = 1; i < countries.length; i++){
    if(countries[i].length > numOfCharacters){
        numOfCharacters = countries[i].length
        biggestCharactersCountry = countries[i]
    }
}

console.log(biggestCharactersCountry)

// 10

const fiveNumCountry = []
for(let i = 1; i < countries.length; i++){
    if(countries[i].length == 5){
        fiveNumCountry.push(countries[i])
    }
}

console.log(fiveNumCountry)

// 11

let longestWeb = webTechs[0].length
let webTechsLongest = webTechs[0]

for(let i = 1; i < webTechs.length; i++){
    if(webTechs[i].length > longestWeb){
        longestWeb = webTechs[i].length
        webTechsLongest = webTechs[i]
    }
}

console.log(webTechsLongest)

// 12

const expandedWebTechArr = [[],[],[],[],[],[],[]]

for(let i = 0; i < webTechs.length; i++){
    expandedWebTechArr[i].push(webTechs[i])
    expandedWebTechArr[i].push(webTechs[i].length)
}
console.log(expandedWebTechArr)

// 13

let abbrMern = ""
for(const mern of mernStack){
    abbrMern += mern[0]
}

console.log(abbrMern)

// 14

for(const tech of webTechs){
    console.log(tech)
}

// 15

const fruits = ['banana', 'orange', 'mango', 'lemon']
const revFruits = []

for(let i = fruits.length - 1; i >= 0; i--){
    revFruits.push(fruits[i])
}
console.log(revFruits)

// 16

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for(let i = 0; i < fullStack.length; i++){
    for(let j = 0; j < fullStack[i].length; j++){
        console.log(fullStack[i][j])
    }
}

