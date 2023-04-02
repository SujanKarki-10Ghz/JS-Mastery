/**Getters and Setters
 * Getters and setters allow you to define Object Accessors (Computed Properties).
 * JavaScript Function or Getter?
 * What is the differences between these two examples?
 * example 1:
 * const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.firstName);

example 2:
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.firstName);

Example 1 access fullName as a function: person.fullName().

Example 2 access fullName as a property: person.fullName.

The second example provides a simpler syntax.
 */

/**Why Using Getters and Setters? */

// It gives simpler syntax
// It allows equal syntax for properties and methods
// It can secure better data quality
// It is useful for doing things behind-the-scenes

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  //method
  //   fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //method
  //   setName(firstName, lastName) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" "); //=> will identify gaps and split
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const p = new Person("harshit", "sharma", 19);
console.log(p); //Person {firstName: 'harshit', lastName: 'sharma', age: 19}
// console.log(p.fullName()); //harshit sharma => accessed as function
console.log(p.fullName); // harshit sharma => accessed as a property: p.fullName
// p.setName("mohit", "vashishta");
// console.log(p.firstName); //mohit
// console.log(p.lastName); // vashishta
p.fullName = "mohit vashistha";
console.log(p); // Person {firstName: 'mohit', lastName: 'vashistha', age: 19}
