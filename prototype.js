/**All JavaScript objects inherit properties and methods from a prototype.
 * Date objects inherit from Date.prototype
 * Array objects inherit from Array.prototype
 * Person objects inherit from Person.prototype
 * The Object.prototype is on the top of the prototype inheritance chain:
 * Date objects, Array objects, and Person objects inherit from Object.prototype.
 * The JavaScript prototype property also allows you to add new methods to objects constructors:
 */
// const userMethod = {
//   about: function () {
//     return `${this.firstName} ${this.lastName} is ${this.age}-years-old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function () {
//     return "tunak tunak tu tunak tunak tu tunak tunak tu tada da da";
//   },
// };
function createUser(firstName, lastName, email, age, address) {
  const users = Object.create(createUser.prototype); // {}
  users.firstName = firstName;
  users.lastName = lastName;
  users.email = email;
  users.age = age;
  users.address = address;
  return users;
}
createUser.prototype.about = function () {
  return `${this.firstName} ${this.lastName} is ${this.age}-years-old`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};

createUser.prototype.sing = function () {
  return "tunak tunak tu tunak tunak tu tunak tunak tu tada da da";
};
const user1 = createUser("sujan", "karki", "sujan@gmail.com", 9, "kapan");
console.log(createUser.prototype); //{constructor: ƒ}
// console.log(userMethod.prototype); //undefined
console.log(user1);
console.log(user1.sing());
console.log(user1.is18());
console.log(user1.about());
