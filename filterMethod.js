/** Filter method
 * The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
 * The filter() method creates a new array filled with elements that pass a test provided by a function.
 * The filter() method does not execute the function for empty elements.
 * The filter() method does not change the original array.
 * array.filter(function(currentValue, index, arr), thisValue);
 *  function (req): A function to run for each array element.
 *  currentValue (req): The value of the current element.
 *  index(opt) : The index of the current element.
 *  arr (opt) : The array of the current element.
 *  thisVlaue (opt), Default:undefined : A value passed to the function as its this value.
 */

/** SYNTAX
 * //Arrow fxn
 * filter((element) => {});
 * filter((element, index) =>{});
 * filter((element, index, array) =>{});
 *
 * //Callback fxn
 * filter(callbackFn)
 * filter(callbackFn, thisArg)
 *
 * //Inline callback fxn
 * filter(function (element){});
 * filter(function (element, index){});
 * filter(function (element, index, array {});
 * filter(function (element, index, array) {}, thisArg);
 * */

//let's create an array
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//I want to filter the array to get even numbers.
//let's create a callback fxn
// const isEven = (number) => {
//   return number % 2 === 0;
// };

// let result = numberArr.filter(isEven);
// console.log(result);

let result = numberArr.filter((number) => number % 2 === 0);
console.log(result); //[2, 4, 6, 8, 10];
//A new array is created [2, 4, 6, 8, 10], that is stored in result variable that passes the test implemented by provided fxn(isEven).

const stringArr = ["Bakhtiyar", "Leopold", " Xshayarsha", "Liupold"];
let filteredString = stringArr.filter((name) => name.length < 9);
console.log(filteredString); //['Leopold', 'Liupold']; // new array
console.log(stringArr); //['Bakhtiyar', 'Leopold', ' Xshayarsha', 'Liupold'], the filter method doesn't change original array.
