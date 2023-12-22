"use strict"

//OOP -----> Object Oriented Programming

// Constructor Function
// function Person(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.calcAge = function () {
//         return new Date().getFullYear - this.birthYear;
//     }
// };
// // instances
// const person1 = new Person("Mimi", 2000);
// console.log(person1.name);
// console.log(person1.calcAge);

// Classes

// Example-1
// class Person {
//     constructor(name, birthYear) {
//         this.name = name;
//         this.birthYear = birthYear;
//     }

//     calcAge() {
//         return new Date().getFullYear() - this.birthYear;
//     }
// }

// const person1 = new Person("Mimi", 2005);
// console.log(person1.calcAge());

// const person2 = new Person("Mahi", 2007);
// console.log(person2.calcAge());

// Example-2
class Person {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }

    calcAge() {
        return new Date().getFullYear() - this.birthYear;
    }
};
class Subject extends Person {
    constructor(name, birthYear, subjectName) {
        super(name, birthYear);
        this.subjectName = subjectName
    }
    get Subject() {
        return this.subjectName;
    }
}

const person1 = new Person("Mimi", 2005);
console.log(person1);
console.log(person1.calcAge());

const person2 = new Subject("Mahi", 2007, "Physics");
console.log(person2);
console.log(person2.calcAge());