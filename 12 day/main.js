// Exercises: Level 1

// 1 Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const salary = txt.match(/\d+/g)
console.log(salary)

console.log(+salary[0] * 12 + +salary[1] + +salary[2] * 12)

// 2 Write a pattern which identify if a string is a valid JavaScript variable

let pattern = '^[a-z]'


