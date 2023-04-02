/** Apply method
 * With the apply() method, you can write a method that can be used on different objects.
 * The apply() method is similar to the call() method.
 * The difference is: The call() method takes arguments separately.
                     The apply() method takes arguments as an array.
 */
function about(hobby, favMusician) {
  console.log(
    `${this.firstName} is ${this.age}-years-old. His hobby is to play ${hobby} and his favorite musician is ${favMusician}`
  );
}

const user1 = {
  firstName: "harshit",
  age: 12,
};
const user2 = {
  firstName: "saksham",
  age: 23,
};

// about.call(user2, "guitar", "arjitsingh");
//let's use apply method to do same as call but give argument in array
about.apply(user2, ["guitar", "arjitsingh"]);
//same output
//saksham is 23-years-old. His hobby is to play guitar and his favorite musician is arjitsingh
