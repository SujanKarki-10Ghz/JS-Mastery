/**Example 1 */

// function myApp() {
//   const myVar = "value1";
//   const myFunc = () => {
//     console.log("Inside myFunc", myVar); //Inside myFunc value1
//   };
//   console.log(myVar); // value1
//   myFunc();
// }
// myApp();

/**Example 2 */
// function myApp() {
//   const myVar = "value1";
//   const myFunc = () => {
//     const myVar = "value2";
//     console.log("Inside myFunc", myVar); //Inside myFunc value2
//   };
//   console.log(myVar); //value1
//   myFunc();
// }
// myApp();

/**Example 3 */
const myVar = "value1";
function myApp() {
  const myFunc = () => {
    console.log("inside myFunc", myVar); //inside myFunc value1
  };
  console.log(myVar); //value1
  myFunc();
}
myApp();

/**JS will search the value in lexical environment if not found inside its scope
 * In example 1, JS will search the value of myVar inside myFunc().
 * if not found, JS will look for the value of myVar inside myApp() function; parent
 * In example 2, JS searches for the value of myVar inside myFunc(), and gets the value so logs it.
 * In example 3, JS searches for the value of myVar inside myFunc() and doesn't get it, it looks for the value inside myApp() and doesn't get it.
 * JS goes out of the parent function to look for the value, then gets the value in global scope.
 */
