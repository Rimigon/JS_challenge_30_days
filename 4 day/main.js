// Exercises: Level 1

// 1

let age = prompt("Enter your age: ")
if(age >= 18){
    console.log("You are old enough to drive.")
}
else if(age < 18){
    console.log(`You are left with ${18 - age} years to drive.`)
}
else{
    console.log(`Entered value was not a age`)
}

// 2

let yourAge = prompt("Enter your age: ")
let myAge = 22
if(yourAge > myAge){
    console.log(`You are ${+yourAge - myAge} years older than me.`)
}
else if(myAge > yourAge){
    console.log(`You are ${myAge - +yourAge} years younger than me.`)
}

else if(myAge == yourAge){
    console.log(`We have the same age`)
}
else{
    console.log(`Entered value was not a age`)
}

// 3

let a = 4
let b = 3

if(a > b){
    console.log('a is greater than b')
}
else{
    console.log('a is less than b')
}

a > b ? console.log('a is greater than b'): console.log('a is less than b')

// 4

let num = prompt("Enter a number: ")
if(+num % 2 == 0){
    console.log(`${num} is an even number`)
}
else{
    console.log(`${num} is an odd number`)
}


// Exercises: Level 2

// 1

let score = 74
switch(true){
    case score >= 80 && score <= 100:
        console.log("A")
        break;
    case score >= 70 && score <= 79:
        console.log("B")
        break;
    case score >= 60 && score <= 69:
        console.log("C")
        break;
    case score >= 50 && score <= 59:
        console.log("D")
        break;
    case score >= 0 && score <= 49:
        console.log("F")
        break;
    default:
        console.log("Incorrect input")
}


// 2

let month = prompt("Enter a month:").toLocaleLowerCase()
switch(true){
    case month == 'september' || month == 'october' || month == 'november':
        console.log('The season is Autumn')
        break;
    case month == 'december' || month == 'january' || month == 'february':
        console.log('The season is Winter')
        break;
    case month == 'march' || month == 'april' || month == 'may':
        console.log('The season is Spring')
        break;
    case month == 'june' || month == 'july' || month == 'august':
        console.log('The season is Summer')
        break;
    default:
        console.log("Incorrect input")
}

// 3

let dayWeek = prompt("What is the day today?").toLocaleLowerCase()
let result = dayWeek.charAt(0).toUpperCase() + dayWeek.slice(1)
switch(true){
    case result == "Saturday" || result == "Sunday":
        console.log(`${result} is a weekend.`)
        break;
    case result == "Monday" || result == "Tuesday" || result == "Wednesday" || result == "Thursday" || result == "Friday":
        console.log(`${result} is a working day.`)
        break;
    default: 
        console.log("Incorrect input")
}

// Exercises: Level 3

// 1

let monthOfYear = prompt("Enter a month:").toLocaleLowerCase()
let firtsLetterMount = monthOfYear.charAt(0).toUpperCase() + monthOfYear.slice(1)

switch(true){
    case firtsLetterMount == 'January':
    case firtsLetterMount == 'March':
    case firtsLetterMount == 'May':
    case firtsLetterMount == 'July':
    case firtsLetterMount == 'August':
    case firtsLetterMount == 'October':
    case firtsLetterMount == 'December':
        console.log(firtsLetterMount + " has 31 days")
        break;
    case firtsLetterMount == 'April':
    case firtsLetterMount == 'June':
    case firtsLetterMount == 'September':
    case firtsLetterMount == 'November':
        console.log(firtsLetterMount + " has 30 days")
        break;
    case firtsLetterMount == 'February':
        console.log(firtsLetterMount + " has 28 days")
        break;
    default:
        console.log("Incorrect input")
}

// 2

let monthYear = prompt("Enter a month:").toLocaleLowerCase()
let normalMounth = monthYear.charAt(0).toUpperCase() + monthYear.slice(1)
let year = new Date().getFullYear()

switch(true){
    case firtsLetterMount == 'January':
    case firtsLetterMount == 'March':
    case firtsLetterMount == 'May':
    case firtsLetterMount == 'July':
    case firtsLetterMount == 'August':
    case firtsLetterMount == 'October':
    case firtsLetterMount == 'December':
        console.log(firtsLetterMount + " has 31 days")
        break;
    case firtsLetterMount == 'April':
    case firtsLetterMount == 'June':
    case firtsLetterMount == 'September':
    case firtsLetterMount == 'November':
        console.log(firtsLetterMount + " has 30 days")
        break;
    case firtsLetterMount == 'February' && year % 4 == 0 && year % 100 != 0 && year % 400 == 0:
        console.log(firtsLetterMount + " has 29 days")
        break;
    case firtsLetterMount == 'February':
        console.log(firtsLetterMount + " has 28 days")
        break;
    default:
        console.log("Incorrect input")
}