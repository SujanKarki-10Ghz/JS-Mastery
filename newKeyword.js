/**New Keyword
 * New keyword in JavaScript is used to create an instance of an object that has a constructor function.
 * On calling the constructor function with ‘new’ operator, the following actions are taken:
 * => A new empty object is created.
 * => The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
 * => The ‘this’ variable is made to point to the newly created object. It binds the property which is declared with ‘this’ keyword to the new object.
 * About the returned value, there are three situations below.
 * =>If the constructor function returns a non-primitive value (Object, array, etc), the constructor function still returns that value. Which means the new operator won’t change the returned value.
 * =>If the constructor function returns nothing, ‘this’ is return;
 * => If the constructor function returns a primitive value,  it will be ignored, and ‘this’ is returned.
 */

function CreateUser(firstName, lastname, age, email, address) {
  this.firstName = firstName;
  this.lastname = lastname;
  this.age = age;
  this.email = email;
  this.address = address;
}
CreateUser.prototype.about = function () {
  console.log(`${this.firstName} is ${this.age}-years-old`);
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "la la la la";
};
const user = new CreateUser(
  "sujan",
  "karki",
  19,
  "sujan@gmail.com",
  "kapan-10"
);
//1. empty object => {}
//2. this => {};
//3/ function prototype  => new object internal prototype
user.about();
console.log(user.is18());
console.log(user.sing());

// for (let keys in user) {
//   console.log(keys);
// }

//if I dont want to print method in prototype I can use
for (let keys in user) {
  if (user.hasOwnProperty(keys)) {
    console.log(keys);
    //firstName, lastname, age, email, address
  }
}

//It won't print is18 sing about because they are not its own property
