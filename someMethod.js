/**Some Method
 * The some() method checks if any array elements pass a test (provided as a callback function).
 * The some() method executes the callback function once for each array element.
 * The some() method returns true (and stops) if the function returns true for one of the array elements.
 * The some() method returns false if the function returns false for all of the array elements.
 * The some() method does not execute the function for empty array elements.
 * The some() method does not change the original array.
 */
/**Syntax
 * array.some(function(value, index, arr), this)
 */
const numbers = [3, 5, 8, 9];
//i want to check if any element in array is even.
let ans = numbers.some((number) => number % 2 === 0);
//if above test is satisfied by any element in the array it returns true else false.
console.log(ans); //true ----> 8 is even

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

const result = userCart.some((userItem) => userItem.price >= 100000); //true----> product2 has price 120000.
