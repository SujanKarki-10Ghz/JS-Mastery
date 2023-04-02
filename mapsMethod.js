/**Maps method
 * A Map holds key-value pairs where the keys can be any datatype.
 * A Map remembers the original insertion order of the keys.
 * A Map has a property that represents the size of the map.
 * map is iterable
 * stores data in ordered fashion
 * duplicate keys are not allowed as objects
 */

/**Difference between maps and object
 * objects can only have string or symbol as keys
 * in maps, you can use anything as key like array, number, string
 */

/** Method      | Description */
//new Map()       Creates a new Map object
//set()           Sets the value for a key in a Map
//get()           Gets the value for a key in a Map
//clear()         Removes all the elements from the map.
//delete()        Removes a Map element specified by a key
//has()           Returns true if key exists in a Map
//forEach()       Invokes callback for each key/value pair in a Map
//entries()       Returns an iterator object with the [key, value] pairs in a Map
//keys()          Returns an iterator object with the keys in a Map
//values()        Returns an iterator object of the values in a Map

const person = new Map();
//set()
person.set("firstName", "Harshit"); //key, value pair
person.set("age", 7);
//A Map holds key-value pairs where the keys can be any datatype.
person.set(1, "one"); //1 here is number unlike object in which it is treated as string.
person.set([1, 2, 3], "array");
console.log(person); //{size: 4, firstName => Harshit, age => 7, 1 => one, (3) [1, 2, 3] => array}

//get()
let name = person.get("firstName");
console.log(name); //Harshit

//has()
let ans = person.has("firstName");
console.log(ans); //true

//keys
console.log(person.keys()); //MapIterator {firstName, age, 1, (3) [1, 2, 3]}

//values
console.log(person.values()); //MapIterator {Harshit, 7, one, array}

//iterator
for (let key of person.keys()) {
  console.log(key, typeof key);
  // firstName string
  // age string
  //1 number
  //[1, 2, 3] object
}

for (let [keys, value] of person) {
  //   console.log(Array.isArray(keys)); //true
  console.log(keys, value);
  //firstName Harshit
  //age 7
  //1 one
  //[1, 2, 3] array
}
const persons = new Map([
  ["firstName", "Harshit"],
  ["age", 7],
]);
console.log(persons); //Map(2) {size: 2, firstName => Harshit, age => 7}
const person1 = {
  id: 1,
  firstName: "harshit",
};
const userInfo = new Map();
userInfo.set(person1, { age: 7, gender: "male" });
// console.log(userInfo);
console.log(person1.id); //1
console.log(userInfo.get(person1).age); //7

//confusion of for of loop and for each loop in maps
for (let [keys, value] of persons) {
  console.log(`keys is : ${keys} and value is: ${value}`);
  //keys is : firstName and value is: Harshit
  //keys is : age and value is: 7
}

// persons.forEach((keys) => {
//   console.log(` Key is: ${keys}`);

//   // Key is: Harshit
//   //  Key is: 7
// });

persons.forEach((values, keys) => {
  console.log(`key is: ${keys} and value is: ${values}`);
  //keys is : firstName and value is: Harshit
  //keys is : age and value is: 7
});
