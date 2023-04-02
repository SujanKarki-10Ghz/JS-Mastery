/** Fill Method
 * The fill() method fills specified elements in an array with a value.
 * The fill() method overwrites the original array.
 * Start and end position can be specified. If not, all elements will be filled.
 */
/**Syntax
 * array.fill(value, start, end);
 */

// const myArray = new Array(10).fill(0);
// console.log(myArray); //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
//i want to replace 3, 4, 5 with 0 then,
myArray.fill(0, 2, 5); // value, start, end
console.log(myArray);
