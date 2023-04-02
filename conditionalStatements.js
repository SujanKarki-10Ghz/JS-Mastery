/**if else
 * if(condition){
 * block of code to be executed if the condition is true
 * }else{
 * block of code to be executed if the condition is false
 * }
 *
 *
 */

let age = 18;
if (age > 18) {
  //we can use comparison operators, logical operators
  //returns true or false
  console.log("You can play the game!"); //gets executed if true
} else {
  console.log("Sorry! you are not eligible"); //gets executed if false
}

/** else if */
let temperatureInDegree = 50;
if (temperatureInDegree < 0) {
  //false
  console.log("extremely cold outside"); // block of code to be executed if the condition1 is true
} else if (temperatureInDegree < 16) {
  //false
  console.log("It is cold outside"); //block of code to be executed if the condition2 is true
} else if (temperatureInDegree < 25) {
  //false
  console.log("Weather is okay"); //block of code to be executed if the condition3 is true
} else if (temperatureInDegree < 35) {
  //false
  console.log("It is hot outside"); //block of code to be executed if the condition4 is true
} else if (temperatureInDegree < 45) {
  //false
  console.log("Turn on AC"); //block of code to be executed if the condition5 is true
} else {
  //true
  console.log("Too hot!"); //block of code to be executed if the conditions are false
}

let num = 14;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("odd");
}

/**Nested if */
if (condition1) {
  //if bhitra arko if
  if (condition2) {
    //block of code to be executed if the condition2 is true
  }
  //block of code to be executed if the condition1 is true
} else {
  //block of code to be executed if the condition is false
}
/**Nested if else */
/**wining number = 19
 * 19: your guess is right.
 * 17: too low
 * 20: too high
 */
let winingNumber = 19;
let userGuess = prompt("Guess a number"); //takes input from user
if (userGuess === winingNumber) {
  console.log("Your guess is right");
} else {
  if (userGuess > winingNumber) {
    console.log("Too low");
  } else {
    console.log("Too high");
  }
}
