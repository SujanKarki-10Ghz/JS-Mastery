/**bind Method
 * With the bind() method, an object can borrow a method from another object.
 * Sometimes the bind() method has to be used to prevent losing this.
 */

//Sometimes the bind() method has to be used to prevent losing this.
//In the following example, the person object has a display method. In the display method, this refers to the person object:

const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    console.log(`${this.firstName} ${this.lastName}`); //John Doe
  },
};
person.display();

//When a function is used as a callback, this is lost.
// This example will try to display the person name after 3 seconds, but it will display undefined instead:

const person1 = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    console.log(`${this.firstName} ${this.lastName}`); //undefined undefined
  },
};
setTimeout(person1.display(), 3000);

//The bind() method solves this problem.
//In the following example, the bind() method is used to bind person.display to person.

// This example will display the person name after 3 seconds:

const person2 = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    console.log(`${this.firstName} ${this.lastName}`); //undefined undefined
  },
};
setTimeout(person2.display.bind(person2), 3000); //John Doe
