"use strict"

//OOP -----> Object Oriented Programming

// Constructor Function
function Person(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
    this.calcAge = function () {
        return new Date().getFullYear - this.birthYear;
    }
};
// instances
const person1 = new Person("Mimi", 2000);
console.log(person1.name);
console.log(person1.calcAge);