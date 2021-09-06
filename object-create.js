// 1. using object literal
const student = { name: 'Khan', job: 'Farmer', age: 34 }

// 2. constructor
const person = new Object();
console.log(person)

// 3.
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.age)

// 4. class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Karim', 34);
console.log(peop)

// 5. function
function Manus(name) {
    this.name = name;
}
const man = new Manus('Emam')
console.log(man)