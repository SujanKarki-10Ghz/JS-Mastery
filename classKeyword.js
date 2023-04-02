/** Class
 * Classes are a template for creating objects.
 * They encapsulate data with code to work on that data.
 * Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
 */

class createUser {
  constructor(firstName, lastName, age, email, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
  }
  about() {
    return `${this.firstName} is ${this.age}-years-old`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "la la la";
  }
}
//class constructor cannot be invoked without 'new'
const user = new createUser("sujan", "karki", 18, "sujan@gmail.com", "kapan");
console.log(user.about());
console.log(Object.getPrototypeOf(user));

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}
class Dog extends Animal {
  super(breed) {
    this.breed = breed;
  }
  walk() {
    return `${this.name} is ${this.breed} and walking`;
  }
}
// const animal1 = new Animal("tom", 2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isCute());
// console.log(animal1.isSuperCute());
const d = new Dog("rocky", 9, "labrodor");
console.log(d.walk());
