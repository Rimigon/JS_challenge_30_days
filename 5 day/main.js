// Exercises: Level 1

// 1

const emptyArr = []

// 2

const sixPosArr = [1, 2, 3, 4, 5, 6]

// 3

console.log(sixPosArr.length)

// 4

console.log(sixPosArr[0])
console.log(sixPosArr[2])
console.log(sixPosArr[5])

// 5

const mixedDataTypes = [1, "a", true, 5, "name", 7, "b"]
console.log(mixedDataTypes.length)

// 6

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// 7

console.log(itCompanies)

// 8

console.log("Number of companies: " + itCompanies.length)

// 9

console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[itCompanies.length-1])

// 10

console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

// 11

console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

// 12

const amazon = itCompanies.pop()
console.log(`${itCompanies.slice(', ')} and ${amazon} are big IT companies`)
itCompanies.push("Amazon")

// 13

if(itCompanies.includes("Amazon")){
    console.log("Company exist in the itCompanies array")
}
else{
    console.log("A company not found")
}

// 14

// 15

console.log(itCompanies.sort())

// 16

console.log(itCompanies.reverse())

// 17

console.log(itCompanies.slice(2))

// 18

console.log(itCompanies.slice(0, 4))

// 19

console.log(itCompanies.splice(3, 1))

// 20

console.log(itCompanies.shift())

// 21

// 22

console.log(itCompanies.pop())

// 23

itCompanies.shift()
itCompanies.shift()
itCompanies.shift()
itCompanies.shift()
itCompanies.shift()
itCompanies.shift()
itCompanies.shift()
itCompanies.shift()

console.log(itCompanies)



// Exercise: Level 2

// 2

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(text.replace(",",'').replace(".",'').split(' '))
console.log(text.replace(",",'').replace(".",'').split(' ').length)

// 3

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.pop()
shoppingCart.push('Sugar')
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)


// 6

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

// Exercise: Level 3

// 1

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages.sort())

console.log(Math.min(...ages))

console.log(Math.max(...ages))
let sum = 0

for(let i = 0;i < ages.length;i++){
    sum += ages[i]
}

console.log(sum / ages.length)

console.log(Math.max(...ages) - Math.min(...ages))

console.log(Math.abs(Math.min(...ages) - sum / ages.length))
console.log(Math.abs(Math.max(...ages) - sum / ages.length))