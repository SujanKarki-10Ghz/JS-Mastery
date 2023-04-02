/**Sets
 * A JavaScript Set is a collection of unique values.
 * Use it when you have unique values and to extract unique values from array.
 * Each value can only occur once in a Set. (no duplicate).
 * A Set can hold any value of any data type.
 * No index based access.
 * order is not guaranteed.
 */

/**How to Create a Set
 * Passing an Array to new Set()
 * Create a new Set and use add() to add values
 * Create a new Set and use add() to add variables
 */

/** Method   |   Description */
//new Set()	    Creates a new Set.
//add()	        Adds a new element to the Set.
//delete()	    Removes an element from a Set.
//has()	        Returns true if a value exists.
//clear()	    Removes all elements from a Set.
//forEach()	    Invokes a callback for each element.
//values()	    Returns an Iterator with all the values in a Set.
//keys()	    Same as values().
//entries()	    Returns an Iterator with the [value,value] pairs from a Set

/**Properties   |   Description */
// size	            Returns the number elements in a Set

const numbers = new Set([1, 2, 3, 3]);
console.log(numbers); // Set(3) {size: 3, 1, 2, 3} =>  duplicates are not allowed in sets
console.log(numbers[2]); //undefined => index based access is not allowed

//lets create an empty set
const number = new Set();
//add method
number.add(1);
number.add(2);
number.add(3);
number.add(4);
// number.add(["item1", "item2"]);
// number.add(["item1", "item2"]); //=> different in memory ----> different in JS pov
console.log(number); //Set(4) {size: 4, 1, 2, 3, 4}

//delete method
number.delete(4);
// number.delete(["item1", "item2"]);
console.log(number); // Set(3) {size: 3, 1, 2, 3}

//has method
if (number.has(1)) {
  //returns true or false
  console.log("1 is present");
} else {
  console.log("1 is absent");
}
// 1 is present

//clear method

// number.clear(); => removes all element from set
// console.log(number); => Set(0) {size: 0}

//for each
let num = "";
number.forEach((value) => (num += value));
console.log(number); //Set(3) {size: 3, 1, 2, 3}

for (let numbers of number) {
  console.log(numbers);
}

//set lai taba use garne jaba hami sanga unique values haru cha
const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements); //Set(5) {size: 5, 1, 2, 4, 5, 6}

//find length of set
let length = 0;
for (let element of uniqueElements) {
  length++;
}
console.log(length); //5
