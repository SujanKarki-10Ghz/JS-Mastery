/**For each */
// The forEach() method executes a provided function once for each array element.
// The forEach() method is not executed for empty elements.
// array.forEach(function(currentValue, index, arr), thisValue)

/** SYNTAX
 * //Arrow fxn
 * forEach((element) => {});
 * forEach((element, index) =>{});
 * forEach((element, index, array) =>{});
 *
 * //Callback fxn
 * forEach(callbackFn)
 * forEach(callbackFn, thisArg)
 *
 * //Inline callback fxn
 * forEach(function (element){};
 * forEach(function (element, index){};
 * forEach(function (element, index, array {};
 * forEach(function (element, index, array) {}, thisArg);
 * */
const numbers = [4, 2, 5, 8];
// const multiplyBy2 = (number, index) => {
//   console.log("Index is:", index);
//   console.log(`${number}*2 = ${number * 2}`);
// };
// multiplyBy2(numbers[0], 0);
// multiplyBy2(numbers[1], 1);
// multiplyBy2(numbers[2], 2);
// multiplyBy2(numbers[3], 3);

//or
// for (let i = 0; i < numbers.length; i++) {
//   multiplyBy2(numbers[i], i);
// }

// numbers.forEach(multiplyBy2);

//or
numbers.forEach((number, index) => {
  console.log(`Index is: ${index}\n ${number} *2 = ${number * 2}`);
});

//Another example
const users = [
  { firstName: "harshit", age: 23, roll: 1 },
  { firstName: "mohit", age: 24, roll: 12 },
  { firstName: "nepid", age: 25, roll: 15 },
  { firstName: "saksham", age: 26, roll: 16 },
];

users.forEach(function (user) {
  console.log(user.firstName);
});

users.forEach((user, index) => {
  console.log(`User age is ${user.age} and index is ${index}`);
});
// for (let user of users) {
//   console.log(user.age);
// }

const myFavProg = ["javaScript", "PHP", "Java", "c", "Python"];
// for (let i = 0; i < myFavProg.length; i++) {
//   console.log(myFavProg[i].slice(0, 10)); //// javaScript, PHP, Java, c, Python
// }
myFavProg.forEach((program, index) =>
  console.log(`Program is: ${program} and index is: ${index}`)
);
// myFavProg.splice(2, 1, "dart");
// console.log(myFavProg); //['javaScript', 'PHP', 'dart', 'c', 'Python']

const nums = [1, 2, 3, 4, 5];
nums.forEach((number) => {
  number += 100;
  console.log(number); //101, 102, 103, 104, 105
});

const country = ["nepal", "bangladesh", "india"];
country.forEach((desh) => {
  console.log(desh.slice(1, 4));
});
