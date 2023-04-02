/**while loop 

while (condition) {
  //block of code to be executed if condition is true
}
*/
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log(`Current value of i is ${i}`);

// let num = 10;
// let total = 0;
// let i = 0;
// while (i <= num) {
//   total += i;
//   i++;
//   console.log(total);
// }

/**Do WHILE LooP: block of code inside do gets executed atleast once */
let a = 0;
let total = 0;
let num = 10;
do {
  total += a;
  a++;
  console.log(total);
  //blocks of code to be executed
} while (a <= num);

// /**for loop
//  for(initialization; condition; increment or decrement){
//   //block of codes
//  }
// */
for (let i = 0; i <= 10; i++) {
  total += i;
}
console.log(total);

/*break and continue keyword
break statement "jumps out" of a loop
continue statement "jumps over" one iteration in the loop
*/
for (let i = 0; i <= 10; i++) {
  if (i === 4) {
    break; //jumps out of the loop
  }
  console.log(i); //0, 1, 2, 3
}

for (let i = 0; i <= 10; i++) {
  if (i === 4) {
    continue; //jumps over 1 iteration in the loop
  }
  console.log(i); //0, 1, 2, 3, 5, 6, 7, 8, 9, 10
}

/**For of loop
 * for(variable of iterable){
 * //code block to be executed
 * }
 * loops through values of an iterable object
 *
 */
const language = ["HTML", "CSS", "JS"];
const language2 = [];

for (let languages of language) {
  //gives values
  console.log(languages);
}

/**For in loop
 * for (key in object){
 * //Code block to be executed
 * }
 * loops through properties of an object
 */
for (let index in language) {
  //gives index
  language2.push(language[index].toUpperCase());
}
console.log(language2);
