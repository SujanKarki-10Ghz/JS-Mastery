/**splice Method
 * The splice() method adds and/or removes array elements.
 * The splice() method overwrites the original array.
 */
/**Syntax
 * array.splice(index, howmany, item1, ....., itemX)
 * start, delete, insert
 */

const myArray = ["item1", "item2", "item3"];
//delete
// myArray.splice(1, 1); // => ['item1', 'item3']; index, howmany ----> kunchai index ma kati ota item delete garne ho.

//insert
// myArray.splice(1, 0, "insertedItem"); //=>['item1', 'insertedItem', 'item2', 'item3'] ----->kunchai index ma kati ota item delete garne ani k insert garne.

//insert and delete
const deletedItem = myArray.splice(1, 2, "insertedItem1", "insertedItem2"); //['item1', 'insertedItem1', 'insertedItem2']
console.log(deletedItem); //['item2', 'item3']
console.log(myArray);
