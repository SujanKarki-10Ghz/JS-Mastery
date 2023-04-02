/* A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished */

function myFunc(callback) {
  console.log("Hello there, I am func and I can....");
  callback("Sujan Karki");
}

function myFunc2(name) {
  console.log("inside myFunc2");
  console.log(`Your name is ${name}`);
}
myFunc(myFunc2);

/**Output */
// Hello there, I am func and I can....
// inside myFunc2
// Your name is Sujan Karki
