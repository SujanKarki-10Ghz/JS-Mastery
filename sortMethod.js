/**Sort Method
 * The sort() sorts the elements of an array.
 * The sort() overwrites the original array.
 * The sort() sorts the elements as strings in alphabetical and ascending order.
 * array.sort(compareFunction) => optional; A function that defines a sort order.
 * The function should return a negative, zero, or positive value, depending on the arguments:
    function(a, b){return a-b}
 */
/**Sorting a String using sort method in ascending*/
const stringArr = ["Banana", "Apple", "Mango", "Grape"];
let result = stringArr.sort();
// result.reverse(); ['Mango', 'Grape', 'Banana', 'Apple']; => Descending order
console.log(result); //['Apple', 'Banana', 'Grape', 'Mango'];

/**Sorting a number using sort method in ascending order */
const numbers = [10, 11, 9, 8, 5, 6, 4, 7];
let results = numbers.sort((a, b) => a - b);
// 10, 11 => a - b -----> negative (less than 0)=> 10, 11 (if negative a is kept first)
// 9, 8 => a -b --------> positive(greater than 0) => 8, 9 (if positive b is kept first)
// let results = numbers.sort((a, b) => b - a); // [11, 10, 9, 8, 7, 6, 5, 4]; => Descending order
console.log(results); //[4, 5, 6, 7, 8, 9, 10, 11]

const products = [
  { productId: 1, productName: "p1", price: 400 },
  { productId: 2, productName: "p2", price: 800 },
  { productId: 1, productName: "p3", price: 100 },
  { productId: 1, productName: "p4", price: 300 },
  { productId: 1, productName: "p5", price: 600 },
];
let lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
console.log(lowToHigh);
