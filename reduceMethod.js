/** Reduce Method
 * The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
 * The final result of running the reducer across all elements of the array is a single value.
 * The first time that the callback is run there is no "return value of the previous calculation".
 * If supplied, an initial value may be used in its place.
 * Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
 * The reduce() method executes a reducer function for array element.
 * The reduce() method returns a single value: the function's accumulated result.
 * The reduce() method does not execute the function for empty array elements.
 * The reduce() method does not change the original array.
 */

/**SYNTAX
 * //Arrow fxn
 * reduce((accumulator, currentValue) => {}, initialValue));
 * reduce((accumulator, currentValue, currentIndex) =>{});
 * reduce((accumulator, currentValue, currentIndex, array) =>{});
 * reduce((accumulator, currentValue) =>{}, intialValue);
 * reduce((accumulator, currentValue, currentIndex) =>{}, intialValue);
 * reduce((accumulator, currentValue, currentIndex, array) =>{}, intialValue);
 *
 * //Callback fxn
 * reduce(callbackFn)
 * reduce(callbackFn, initialValue)
 *
 * //inline callback fxn
 * reduce(function (accumulator, currentValue){};
 * reduce(function (accumulator, currentValue, cuurentIndex){};
 * reduce(function (accumulator, currentValue, array){};
 *
 * reduce(function (accumulator, currentValue){}, initialValue);
 * reduce(function (accumulator, currentValue, currentIndex){}, initialValue);
 * reduce(function (accumulator, currentValue, array){}, initialValue);
 */

/**Parameters
 * callbackFn: A function to execute for each element in the array.
    Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn
    For the last invocation, the return value becomes the return value of reduce().

* accumulator: The value resulting from the previous call to callbackFn.
    On first call, initialValue if specified, otherwise the value of array[0].
* currentValue: The value of the current element.
    On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
* currentIndex: The index position of currentValue in the array.
     On first call, 0 if initialValue was specified, otherwise 1.
* array : the array reduce() was called upon. 
*/

const numbers = [1, 2, 3, 4, 5];
// aim: sum of all numbers in array.
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 100); // here initialValue is 100, so accumulator value becomes 100 at first and cuurent value becomes 1.
// console.log(sum); //115

//accumulator, currentValue, return
// 1            2            1 + 2 = 3
// 3            3               6
// 6            4               10
// 10           5               15

const userCart = [
  {
    productId: 1,
    productName: "mobile",
    price: 12000,
  },
  {
    productId: 2,
    productName: "laptop",
    price: 120000,
  },
  {
    productId: 3,
    productName: "T.V",
    price: 15000,
  },
];

const totalAmt = userCart.reduce((totalPrice, currentProduct) => {
  console.log(currentProduct);
  /**
   * {productId: 1, productName: 'mobile', price: 12000}
   * {productId: 2, productName: 'laptop', price: 120000}
   * {productId: 3, productName: 'T.V', price: 15000}
   */
  return totalPrice + currentProduct.price;
}, 0);
console.log(totalAmt); //147000

// totalPrice,      CurrentProduct,     return
//    0             {entire array}      0+12000;
// 12000              120000            12000+120000=132000;
// 132000             15000             132000+15000= 147000;

// let totalPrices = 0;
// userCart.forEach((item) => {
//   totalPrices += item.price; // totalPrices = totalPrices + item.price;
// });
// console.log(totalPrices); //147000

const items = [
  { name: "Rice", price: 5 },
  { name: "Book", price: 20 },
  { name: "Chicken", price: 10 },
  { name: "Monitor", price: 100 },
];

const totalMoney = items.reduce((total, item) => {
  console.log(`Total: ${total}`);
  console.log(`Item:${item.price}`);
  return total + item.price;
}, 0);
console.log(totalMoney); //135

const people = [
  { name: "Kyle", age: 26 },
  { name: "John", age: 31 },
  { name: "Sally", age: 42 },
  { name: "Jill", age: 42 },
];

const result = people.reduce((groupedPeople, person) => {
  //   console.log(groupedPeople);
  //   console.log(person);
  const age = person.age;
  if (groupedPeople[age] == null) {
    groupedPeople[age] = [];
    groupedPeople[age].push(person);
  }
  return groupedPeople;
}, {});
console.log(result);
