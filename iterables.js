/*iterables*/
//in which we can apply for of loop
// string, array, sets are iterable
const firstName = "Sujan";
for (let char of firstName) {
  console.log(char);
}

const items = ["item1", "item2", "item3"];
for (let item of items) {
  console.log(item);
}

// const users = { key1: "value1", key2: "value2" };
// for (let user of users) {
//   console.log(user); //users is not iterable. (object are not iterables).
// }

/*Array like object */
// which have length property
// which we can access from its index.
//String
const Name = "harshit";
console.log(Name.length); //7
console.log(Name[2]); //r
