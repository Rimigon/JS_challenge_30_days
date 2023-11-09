// Exercises: Level 1

// 1
let firstName = 'Nikita'
let lastName = 'Radonov'
let country = 'Russia'
let city = 'Voskresensk'
let age = 22
let isMarried = false

let year = new Date().getFullYear()

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// 2

console.log(typeof '10' == typeof 10)

// 3

console.log(parseInt('9.8') == 10)

// 4

// true
console.log(3 >= 2)
console.log(3 != 2)
console.log(0 == false)
// false

console.log(0 === false)
console.log(3 == 2)
console.log(3 < 2)

// 5

function five(){
    let i = 4 > 3
    let ii = 4 >= 3
    let iii = 4 < 3
    let iv = 4 <= 3
    let v = 4 == 4
    let vi = 4 === 4
    let vii = 4 != 4
    let viii = 4 !== 4
    let ix = 4 != '4'
    let x = 4 == '4'
    let xi = 4 === '4'
    let xii = 'python'.length != 'jargon'.length

    console.log(i)
    console.log(ii)
    console.log(iii)
    console.log(iv)
    console.log(v)
    console.log(vi)
    console.log(vii)
    console.log(viii)
    console.log(ix)
    console.log(x)
    console.log(xi)
    console.log(xii)
}



// 6

function six(){
    let i = 4 > 3 && 10 < 12
    let ii = 4 > 3 && 10 > 12
    let iii = 4 > 3 || 10 < 12
    let iv = 4 > 3 || 10 > 12
    let v = !(4 > 3)
    let vi = !(4 < 3)
    let vii = !(false)
    let viii = !(4 > 3 && 10 < 12)
    let ix = !(4 > 3 && 10 > 12)
    let x = !(4 === '4')
    let xi = 'python'.includes('on') && 'dragon'.includes('on')

    console.log(i)
    console.log(ii)
    console.log(iii)
    console.log(iv)
    console.log(v)
    console.log(vi)
    console.log(vii)
    console.log(viii)
    console.log(ix)
    console.log(x)
    console.log(xi)
}

// 7

let date = new Date()

let i = date.getFullYear()
let ii = date.getMonth()
let iii = date.getDate()
let iv = date.getDay()
let v = date.getHours()
let vi = date.getMinutes()
let vii = date.getTime()

console.log(i)
console.log(ii)
console.log(iii)
console.log(iv)
console.log(v)
console.log(vi)
console.log(vii)

// Exercises: Level 2

// 1

function triangleArea(){
    let base = prompt('Enter base:')
    let height = prompt('Enter height:')
    console.log(`The area of the triangle is ${0.5 * base * height}`)
}

// 2

function trianglePerimeter(){
    let a = prompt('Enter a:')
    let b = prompt('Enter b:')
    let c = prompt('Enter c:')
    console.log(`The perimeter of the triangle is ${+a + +b + +c}`)
}

// 3

function rectangle(){
    let length = prompt('Enter length:')
    let width = prompt('Enter width:')
    console.log(`The area of rectangle is ${+length * +width}`)
    console.log(`The perimeter of rectangle is ${2 * (+length + +width)}`)
}

// 4

function circle(){
    const pi = 3.14
    let radius = prompt('Enter radius:')
    console.log(`The area of a circle is ${pi * + radius * radius}`)
    console.log(`The circumference of a circle is ${2 * pi * radius}`)
}

// 5
let x = 1
let b = 2
let y = 2 * x - 2

// 6

let x1 = 2
let x2 = 6
let y1 = 2
let y2 = 10
let m = (y2-y1)/(x2-x1)
console.log(m)

// 7

console.log(b == m)

// 8

// 9

function earning(){
    let hours = prompt('Enter hours:')
    let rate = prompt('Enter rate per hour:')
    console.log(`Your weekly earning is ${+hours * +rate}`)
}

// I'm too lazy to do the rest, everything is simple there