/**Every Method
 * The every() method executes a function for each array element.
 * The every() method returns true if the function returns true for all elements.
 * The every() method returns false if the function returns false for one element.
 * The every() method does not execute the function for empty elements.
 * The every() method does not change the original array
 */
/**Syntax
 * array.every(function(currentValue, index, arr), thisValue)
 */

const numbers = [2, 4, 6, 8, 10];
//I want to check if every element in array is even. For this, I will use every method.

const result = numbers.every((numbers) => numbers % 2 === 0);
//callback fxn() ---->true / false (boolean)
console.log(result); //true ---> every method also return boolean.

const numbers1 = [2, 4, 6, 8, 9, 10];
const ans = numbers1.every((num) => num % 2 === 0);
console.log(ans); //false ----> every method returns false if one element is return false by test .

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

const answer = userCart.every((cartItem) => cartItem.price < 20000);
console.log(answer); //false
