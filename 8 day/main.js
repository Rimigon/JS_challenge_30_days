// Exercises: Level 1

// 1 - 5

const dog = {    
    name: "Bars",
    legs: 4,
    color: "grey",
    age: 4,
    bark: function(){
        return "woof woof"
    }
}

console.log(dog)

dog.breed = "Afador"
dog.getDogInfo = `Name: ${dog.name}, age: ${dog.age}, color: ${dog.color}` 

console.log(dog)

// Exercises: Level 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// 1

function getUserManySkills(){
    let keys = Object.keys(users)
    let maxSkills = users[keys[0]].skills.length
    let userNameMaxSkills = keys[0]
    for(let i = 1; i < keys.length; i++){
        if(users[keys[i]].skills.length > maxSkills){
            maxSkills = users[keys[i]].skills.length
            userNameMaxSkills = keys[i]
        }
    }
    return userNameMaxSkills
}

console.log(getUserManySkills())

// 2

function getLogged(){
    let keys = Object.keys(users)
    let numOfLogged = 0
    for(let i = 0; i < keys.length; i++){
        if(users[keys[i]].isLoggedIn == true){
            numOfLogged += 1
        }
    }
    return numOfLogged
}

console.log("Logged in users: "+ getLogged())

function getNumPoints(){
    let keys = Object.keys(users)
    let numOfPointsGE50= 0
    for(let i = 0; i < keys.length; i++){
        if(users[keys[i]].points >= 50){
            numOfPointsGE50 += 1
        }
    }
    return numOfPointsGE50
}

console.log("Users having greater than equal to 50 points: "+ getNumPoints())

// 3

function getMern(){
    let keys = Object.keys(users)
    let nameMern = ""
    for(let i = 0; i < keys.length; i++){
        let arr = Object.values(users[keys[i]].skills)
        if(arr.includes("Express") && arr.includes("React") && arr.includes("React") && arr.includes("Node") && arr.includes("MongoDB")){
            nameMern += keys[i] + " "
        }
    }
    return nameMern
}

console.log(getMern())


