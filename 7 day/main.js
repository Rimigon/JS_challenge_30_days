// Exercises: Level 1

// 1

function fullName(){
    console.log("Nikita Radonov")
}

fullName()

// 2

function fullName(firstName, lastName){
    return `${firstName} ${lastName}`
}

console.log(fullName("Nikita", "Radonov"))

// 3

function addNumbers(firstNum, secondNum){
    return firstNum + secondNum
}

console.log(addNumbers(6, 3))

// 4

function areaOfRectangle(length, width){
    return length * width
}

console.log("Area " + areaOfRectangle(2, 5))

// 5

function perimeterOfRectangle(length, width){
    return 2 * (length + width)
}

console.log("Perimeter " + perimeterOfRectangle(2, 5))

// 6

function volumeOfRectPrism(length, width, height){
    return length * width * height
}

console.log("Volume " + volumeOfRectPrism(6, 4, 2))

// 7


function areaOfCircle(r){
    return 3.14 * r * r
}

console.log("Area " + areaOfCircle(4))

// 8

function circumOfCircle(r){
    return 2 * 3.14 * r
}

console.log("Circumference " + circumOfCircle(4))

// 9

function density(mass, volume){
    return mass / volume
}

console.log("Density " + density(4, 6))

// 10

function speed(distance, time){
    return distance / time
}

console.log("Speed " + speed(4, 6))

// 11

function weight(mass, gravity){
    return mass * gravity
}

console.log("Weight " + weight(4, 6))

// 12

function convertCelsiusToFahrenheit(oC){
    return (oC * 9/5) + 32 
}

console.log("oF " + convertCelsiusToFahrenheit(25))

// 13

function bmi(weight, height){
    let bmiIndex = weight / (height * height)   

    switch(true){
        case bmiIndex < 18.5:
            console.log("Underweight")
            break;
        case bmiIndex >= 18.5 && bmiIndex <= 24.9:
            console.log("Normal weight")
            break;
        case bmiIndex >= 25 && bmiIndex <= 29.9:
            console.log("Overweight")
            break;
        case bmiIndex >= 30:
            console.log("Obese")
            break;
    }
    return bmiIndex 
}

console.log(bmi(80, 1.8))

// 14 

function checkSeason(month = "January"){ 
    switch(true){
        case month.toLowerCase() == "january":
        case month.toLowerCase() == "december":
        case month.toLowerCase() == "february":
            console.log("Winter")
            break;
        case month.toLowerCase() == "september":
        case month.toLowerCase() == "october":
        case month.toLowerCase() == "november":
            console.log("Autumn")
            break;
        case month.toLowerCase() == "march":
        case month.toLowerCase() == "april":
        case month.toLowerCase() == "may":
            console.log("Spring")
            break;
        case month.toLowerCase() == "june":
        case month.toLowerCase() == "july":
        case month.toLowerCase() == "august":
            console.log("Summer")
            break;   
    }
}

checkSeason("May")

// 15

function findMax (firstNum, secondNum, thirdNum){
    let max = firstNum
    if(secondNum > max && thirdNum < secondNum){
        max = secondNum
    }
    else if(thirdNum > max){
        max = thirdNum
    }
    return max
}

console.log("Max " + findMax(4, 10, 3))


// Exercises: Level 2

// 1

function solveLinEquation (a, b, c){
    let max = firstNum
    if(secondNum > max && thirdNum < secondNum){
        max = secondNum
    }
    else if(thirdNum > max){
        max = thirdNum
    }
    return max
}

console.log("Max " + solveLinEquation(4, 10, 3))