// Exercises Level 1

// Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem('first name', "Nikita")
localStorage.setItem('last name', "Radonov")
localStorage.setItem('age', 22)
localStorage.setItem('country', "Russia")
localStorage.setItem('city', "voskresens")


// Exercises: Level 2

// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: "Nikita",
    lastName: "Radonov",
    age: 22,
    skills: ["HTML", "CSS", "JavaScript", "C#"],
    country: "Voskresensk"
}

localStorage.setItem('student', JSON.stringify(student, undefined, 4))
