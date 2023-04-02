"use strict";
/*----intro to variables ----*/
//variables can store some information
//we can use that information later
//we can change that information later

/*----Rule for naming variables----*/
//you cannot start with a number:
//1value = 10; (invalid)
//value! = 10; (valid)
var value1 = 10;
console.log(Math.pow(value1, 2));
console.log(Math.sqrt(value1));
//you can use only underscore_ or dollar symbol:
//first_name (valid)
//_firstName (valid)

//$firstName (valid)
//first$name (Valid)

//you cannot use spaces
//first Name

//convention
//start with small letter and use camelCase
// var firstName; camelCase
// var first_name; snakecase

//declare a variable
var firstName = "Sujan"; // var: keyword, string: collection of characters
//use a variable
console.log(firstName); //variable names are case sensitive
// change value
firstName = "Harshit";
console.log(firstName);

/**let Keyword */
let firstName = "Sujan";

/**Const keyword */
//value that doesn't change uses const
const PI = 3.14;
// PI = 3.15; //this will cause an error cause constant values cannot be changed.
let r = 5;
// r = 4; //value can be changed
console.log(PI * r * r);
