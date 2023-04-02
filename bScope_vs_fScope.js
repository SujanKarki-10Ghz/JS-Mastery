//block scope vs function scope

//let and const are block scope

//var is function scope
/**Global Block */
const myAge = 22;
console.log(myAge);

/**Block 1 */
{
  let firstName = "Sujan"; //let and const can only be accessed within this block.
  console.log(firstName); //Sujan
}
console.log(firstName); //Uncaught ReferenceError:firstName is not defined

/**Block 2: */
{
  var firstName = "Nepid";
  console.log(firstName); //Nepid
}
console.log(firstName); //Nepid
