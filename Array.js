/**Array: fixed sized blocks that can hold fix number of values or ordered collection of items
 * represented as [];
 * let array_name = [value1, value2.....];
 * any data types can be stored in array
 * typeof array is object
 * array is mutable
 */

let cars = ["Volvo", "Saab", "Ford"];
let obj = {}; //object literals
console.log(cars[0]); //array indexing

/**ARRAY METHODS-> push(), pop(), shift(), length, unshift(), slice(), splice(), join()*/

cars.push("Mercedes"); //push an element into the array at the end.
console.log(cars); // ["Volvo", "Saab", "Ford", "Mercedes"];
cars.pop(); //removes an last element from the array
console.log(cars); //["Volvo", "Saab", "Ford"];
console.log(cars.length); //3 // gives the length of the array
cars.shift(); //removes the first array element and shifts other elements to lower index
console.log(cars); //["Saab", "Ford"];
cars.unshift("Mercedes"); //adds the new element to array at the beginning and unshifts older elements
console.log(cars); //["Mercedes", "Saab", "Ford"];
cars[0] = "Lamborghini"; //replaces 0th index of array with new element; ["Lamborgini", "Saab". "Ford"];
console.log(cars);
cars.splice(2, 0, "Pagauet", "Mahindra"); //splice can be used to add new items to an array.
/* first parameter(2) defines the position where new elements should be added (spliced in).
 * second parameter(0) defines how many elements should be removed.
 * rest parameters ("Pagauet", "Mahindra") defines the new elements to be added.
 * splice() method returns an array with the deleted items.
 */
console.log(cars);
cars.splice(0, 1);
/**
 * First parameter defines how many elements should be added.
 * second parameter defines how many elements should be removed.
 */
console.log(cars);
const fruits = ["Banana", "Grapes", "Lemon", "Apple", "Mango"];
const citrius = fruits.slice(2); //slice method slice out part of an array starting from array element (2).
console.log(citrius);
/**STORING OBJECTS IN ARRAY */
// let bikes = [
//   {
//     cc: 150,
//     name: "Honda",
//     mileage: 50,
//   },
// ];
// /**ACCESSING VALUES */
// console.log(bikes[0].cc); //150
// console.log(bikes[0].name); //Honda
// console.log(bikes[0].mileage); //50

/**SORTING ARRAY */

let alphabets = ["f", "b", "d", "a", "l", "m", "n", "o"];
alphabets.sort();
/**sort method sorts the array in alphabetical order.
 * By default, the sort() function sorts values as strings.
 * if numbers are sorted as strings "25" is bigger than "100" because 2 is bigger than 1.
 * sort() will produce incorrect result when sorting numbers.
 */
console.log(alphabets);
alphabets.reverse(); //reverse method reverse the array. can be used to sort an array in descending order
console.log(alphabets);

/**NUMERIC SORTING */
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);
//same trick to sort numbers in descending order
points.sort(function (a, b) {
  return b - a;
});
console.log(points);

/**PRIMITVE VS REFERENCE DATA TYPES */
//primitive types are stored in stack
let num1 = 6;
let num2 = num1;
console.log("num1:", num1); //6
console.log("num2:", num2); //6
num1++;
console.log("num1:", num1); //7
console.log("num2:", num2); //6
/** VS */
//reference type: array. reference types are stored in heap.
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1:", array1); // ["item1", "item2"];
console.log("array2:", array2); // ["item1", "item2"];
array1.push("item3");
console.log("array1:", array1); // ["item1", "item2", "item3"];
console.log("array2:", array2); // ["item1", "item2", "item3"];

/**CLONING AN ARRAY */
let array3 = ["item1", "item2"];
let array4 = array3.slice(0).concat(["item3", "item4", "item5"]);
array3.push("item3");
console.log(array3 === array4);
console.log(array3);
console.log(array4);

//another method

let array5 = ["item1", "item2"];
let array6 = [].concat(array5, ["item4", "item5"]);
array5.push("item3");
console.log(array5 === array6);
console.log(array5);
console.log(array6);

//new method:spread operator
/*The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.*/
let array7 = ["item1", "item2"];
let oneMoreArray = ["item3", "item4"];
let array8 = [...array7, ...oneMoreArray, "item5", "item6"];
array7.push("item3");
console.log(array7 === array8);
console.log(array7);
console.log(array8);

/**ARRAY CONCATE */
console.log(array7.concat(array8));

/**FOR LOOP IN ARRAY */
const games = ["PUBG", "Freefire", "Clash of Clans", "Beach Buggy"];
let games1 = [];
for (let i = 0; i < games.length; i++) {
  games1.push(games[i].toUpperCase());
}
console.log(games1);

/**WHILE LOOP IN ARRAY */

const language = ["HTML", "CSS", "JS"];
const language2 = [];
let i = 0;
while (i < language.length) {
  language2.push(language[i].toUpperCase());
  i++;
}
console.log(language2);

/**For of loop
 * for(variable of iterable){
 * //code block to be executed
 * }
 * loops through values of an iterable object
 *
 */

for (let languages of language) {
  //gives values
  console.log(languages);
}

/**For in loop
 * for (key in object){
 * //Code block to be executed
 * }
 * loops through properties of an object
 */
for (let index in language) {
  //gives index
  language2.push(language[index].toUpperCase());
}
console.log(language2);

/**ARRAY DESTRUCTURING */

const myArray = ["value1", "value2", "value3", "value4", "value5"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
let [myVar1, myVar2, ...rest] = myArray; //this is equivalent to upper two lines of code.
console.log(myVar1, myVar2, rest);
// let [myVar1, ,myVar2, ...rest]= myArray; // , ,is used to skip the index
/**it was introduced in ES6
 * it will automatically store the value in [0] in myVar1, [1] in myVar2
 * ... is a spread operator {rest} in which leftover value in indexes are stored in array.
 * output : myVar1 = value1; myVar2 = value2; rest = ['value3', 'value4', 'value5'];
 */
//alternatively we can also use
// let [myVar1, myVar2] = myArray;
// let myNewArray = myArray.slice(2); //slices the elements of array from [2] index and stores in myNewArray.
// console.log(myNewArray);
