/**Map */
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.
// map() method is a copying method. It does not alter this.
// map() method is generic. It only expects the this value to have a length property and integer-keyed properties.
// Since map builds a new array, calling it without using the returned array is an anti-pattern; use forEach or for...of instead.
// array.map(function(currentValue, index, arr), thisValue);

/** SYNTAX
 * //Arrow fxn
 * map((element) => {});
 * map((element, index) =>{});
 * map((element, index, array) =>{});
 *
 * //Callback fxn
 * map(callbackFn)
 * map(callbackFn, thisArg)
 *
 * //Inline callback fxn
 * map(function (element){});
 * map(function (element, index){});
 * map(function (element, index, array {});
 * map(function (element, index, array) {}, thisArg);
 * */
const users = [
  { firstName: "harshit", age: 23, roll: 1 },
  { firstName: "mohit", age: 24, roll: 12 },
  { firstName: "nepid", age: 25, roll: 15 },
  { firstName: "saksham", age: 26, roll: 16 },
];
let userNames = users.map((index) => index.firstName);
console.log(userNames); //['harshit', 'mohit', 'nepid', 'saksham']

const values = [3, 4, 5, 6, 8];
//let's create a fxn that returns square of these values
const square = (number) => {
  return number * number;
};
let squaredNum = values.map(square); //here, map creates new array of squared numbers
console.log(squaredNum); //output: [9, 16, 25, 36, 64];

//or
const squareNumber = values.map((number) => number * number);
console.log(squareNumber); //output: [9, 16, 25, 36, 64]; // here the array is not altered rather new array is created as per task assigned in fxn.
