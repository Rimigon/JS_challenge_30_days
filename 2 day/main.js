// Exercise: Level 1
let challenge = '30 Days Of JavaScript'

console.log(challenge)
console.log(challenge.length)

console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())

console.log(challenge.substring(8));
console.log(challenge.substr(0, 2));

console.log(`Contains "Script": ${challenge.includes('Script')}`)

console.log(challenge.split())

console.log(challenge.split(' '))

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(", "))

console.log(challenge.replace("JavaScript", "Python"))

console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))

console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))

let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.indexOf("because"))
console.log(because.lastIndexOf("because"))

let spaceChallenge = ' 30 Days Of JavaScript '
console.log(spaceChallenge.trim())

console.log(challenge.startsWith("30"))
console.log(challenge.endsWith("JavaScript"))

console.log(challenge.match(/a/gi))

let days = '30 Days of'
let js = ' JavaScript'
console.log(days.concat(js))

console.log(challenge.repeat(2))

// Exercise: Level 2

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')


let num = '10'
if(typeof num === typeof 10){
    console.log("!!!!!")
}
else{
    num = +num
    console.log(num)
}


let floatNum = parseFloat('9.8')
if( floatNum === 10){
    console.log("!!!!!")
}
else{
    floatNum = Math.round(floatNum)
    console.log(floatNum)
}


let python = 'python'
let jargon = 'jargon'
if(python.includes('on') && jargon.includes('on')){
    console.log("python and jargon has 'on'")
}
else{
    console.log("python and jargon has't 'on'")
}

let jargonText = "I hope this course is not full of jargon"
console.log("'jargon' in sentences: " + jargonText.includes("jargon"))

console.log(Math.round(Math.random() * 101))
console.log(Math.round(Math.random() * (100 - 50) ) + 50)
console.log(Math.round(Math.random() * 256))

let jsString = 'JavaScript'
console.log(jsString.charAt(Math.round(Math.random() * 10)))

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")

console.log(because.substr(31, 23))

// Exercise: Level 3
let loveString = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(loveString.match(/love/gi).length)

console.log(because.match(/because/gi).length)


let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. \
The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. \
;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? \
%Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let pattern = /([$@%&#;.!,?])/mg
console.log(sentence.replace(pattern, ""))
const arr = sentence.replace(pattern, "").split(" ")
console.log(arr)

let indexFreq = 0
let maxRepeat = 0
for(let i = 0; i < arr.length; i++){
    if(sentence.replace(pattern, "").match(/a/gi) > maxRepeat){
        maxRepeat = sentence.replace(pattern, "").match(/a/gi)
        indexFreq = i
    }
}
console.log(arr[indexFreq])

let salaryText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salaryArr = salaryText.match(/\d+/g)
console.log(`Total annual income: ${+salaryArr[0] * 12 + +salaryArr[1] + +salaryArr[2] * 12} euro`)

