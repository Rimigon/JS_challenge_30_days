// Exercises Level 1

// 1 Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal{
  constructor(name, age, color, legs){
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }
  get getName(){
    return this.name
  }
  set setName(name){
    this.name = name
  }

  getFullInfo(){
    return `Name: ${this.name}, age: ${this.age}, color: ${this.color}, legs: ${this.legs}`
  }
}

const animal1 = new Animal("Bor", 7, "Black", 4)
console.log(animal1.getFullInfo())


// 2 Create a Dog and Cat child class from the Animal Class. Override the method you create in Animal class

class Dog extends Animal{
  constructor(name, age, color, legs, breed){
    super(name, age, color, legs)
    this.breed = breed
  } 
  getFullInfo(){
    return `Name: ${this.name}, age: ${this.age}, color: ${this.color}, legs: ${this.legs}, breed: ${this.breed}`
  }
}

const myDod = new Dog("Bor", 7, "Black", 4, "chihuahua")
console.log(myDod.getFullInfo())


class Cat extends Animal{

}
