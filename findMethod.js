/**Find Method
 * The find() method returns the value of the first element that passes a test.
 * The find() method executes a function for each array element.
 * The find() method returns undefined if no elements are found.
 * The find() method does not execute the function for empty elements.
 * The find() method does not change the original array.
 */
/**Syntax
 * array.find(function(currentValue, index, arr),thisValue);
 */

const myArray = ["hello", "cat", "dog", "lion"];
// function isLength3(string) {
//   return string.length === 3;
// }

// const ans = myArray.find(isLength3); //cat => dog is not returned as this method returns the value of the first element that passes the test
const ans = myArray.find((string) => string.length === 3);
console.log(ans);

const users = [
  { userId: 1, userName: "harshit" },
  { userId: 2, userName: "harsh" },
  { userId: 3, userName: "nitish" },
  { userId: 4, userName: "mohit" },
  { userId: 5, userName: "aaditya" },
];
const answer = users.find((user) => user.userId === 3);
const index = users.findIndex((user) => user.userId === 3);
console.log(answer, index); //{userId: 3, userName: 'nitish'} 2
