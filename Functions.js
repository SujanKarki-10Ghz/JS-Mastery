/** Introduction:
 * A JS Function is block of code design to perform a particular task.
 * A JS Function is executed when "something" invokes it (calls it).
 */

/* JS function Syntax
A JS Function is defined with function keyword , followed by name, followed by a parenthesis().
 * Function name can contain letters, digits, underscore and dollar sign (same rule as variables).
 * The parenthesises my include parameter names seperated by commas: (param1, param2);
 * Code to be executed by the function is placed inside curly brackets. {}
 * function name (params){
 * //code to be executed.
 * }
 */
function add(num1, num2) {
  //function with parameters
  return num1 + num2; //function return
}
console.log(add(2, 4)); //invoking the function with arguments

/**Function Invocation
 *The code inside the function will execute when "something" invokes the function:
 * When the event occurs (when user click the button);
 * When it is invoked from JS code
 * Automatically (self-invoked);
 */

//  Function Declaration
function isEven(number) {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return number % 2 === 0;
}
console.log(isEven(5)); //false

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
const myArray = [1, 4, 5, 6, 7, 8];
let ans = findTarget(myArray, 6);
console.log(ans); //3

// Function Expression
// const findTarget = function (array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };
// let answer = findTarget([1, 2, 3, 4, 5, 6, 7], 6);
// console.log(answer);

//Function inside Function

function app() {
  const myFunc = () => {
    console.log("Hello from myFunc");
  };

  const addTwo = (num1, num2) => {
    return num1 + num2;
  };
  const mul = (num1, num2) => num1 * num2;
  console.log("inside app");

  myFunc();
  console.log(addTwo(2, 4));
  console.log(mul(4, 2));
}
app();

/**Function returning a function */

function myFunc1() {
  function hello() {
    console.log("Hello World");
  }
  return hello;
}
let answer = myFunc1();
// console.log(answer); // hello() {
//   console.log("Hello World");
// }
answer(); //Hello World
