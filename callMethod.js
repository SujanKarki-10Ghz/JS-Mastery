/**Call Method
 * The call() method calls the function with a given this value and arguments provided individually.
 * With the call() method, you can write a method that can be used on different objects.
 * Methods like call(), apply(), and bind() can refer this to any object.
 * It can be used to invoke (call) a method with an owner object as an argument (parameter).
 */

//you can use method belonging to different object: for example:
const user1 = {
  firstName: "harshit",
  age: 8,
  //passing an arg to fxn
  about: function (hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician); //mohit 9
  },
};
const user2 = {
  firstName: "mohit",
  age: 9,
};
// user1.about.call();// undefined undefined
user1.about.call(user2); // mohit 9 => about method belongs to user1 object but is used by user2 object.
user1.about.call(user1, "guitar", "mozart"); //harshit 8 guitar mozart => we can also pass the value to the arguement.
//I can also do this
//With the call() method, you can write a method that can be used on different objects.

//method
function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}
//diff objects
const user3 = {
  firstName: "nitish",
  age: 12,
};
const user4 = {
  firstName: "mohini",
  age: 13,
};

about.call(user3, "guitar", "arjit singh"); //nitish 12 guitar arjit singh
