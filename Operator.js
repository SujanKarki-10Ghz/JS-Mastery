/**Types of operators */
//arithmetic operators: +, -, /, *, %, **, ++ , -- etc.
//Assignment operators: +=, -=, /=, %=, *=, **=, = etc.
//Bit-wise operators = ~, <<, >>, ^, &, | etc.
//data types (Prmitive data types)
// String : ""
// Number: 1, 2, 2.4
// Boolean: true, false
// undefined: let firstName; console.log(typeof firstName); //output: undefined
//null: means nothing or absence of value; var num1 = null;
console.log(typeof null); // object; it is bug and error in JS.
// BigInt
// let myNumber = BigInt(12);
//let sameNumber = 12n; // this is also BigInt
//You cannot mix BigInt with other data type
// Symbol

let age = 10;
let Name = "Sujan";

console.log(typeof age); //tells typeof datatypes
console.log(typeof Name);

//convert number to string: String();
//let age = 10 + "";
let Age = 10;
Age = String(Age);
console.log(typeof Age);
//console.log(typeof Name);

//convert string to number: Number();
//let name = +"sujan";
// console.log(typeof name);
let firstName = "sujan";
firstName = Number(firstName);
console.log(typeof firstName); // typeof operators; //instanceof operator

/**Booleans and comparison operators */

//booleans: true or false
//comparison operators : >, <, <=, >=, ==, ===, !=, !==,
let num1 = 6;
let num2 = 5;
console.log(num1 > num2); // true
// console.log(num1 < num2); // false
// console.log(num1 >= num2);// true

/**== vs === */
console.log(num1 == num2); //false; // == checks value but doesn't check datatypes // === strictly checks value and datatypes
//for example
let myFirstNumber = "10";
let myNumber = 10;
console.log(myFirstNumber == myNumber); // true
console.log(myFirstNumber === myNumber); //false

/**!= vs !=== */
console.log(num1 != num2); //true
console.log(myFirstNumber != myNumber); //false
console.log(myFirstNumber !== myNumber); //true

/**truthy or falsy values */
// falsy values = false, "", null, undefined, 0;
//truthy values = "abc", "1", "-1";

/**logical operators */
// &&, ||, !
let x = 5;
let y = 6;
console.log(x == 5 && y == 6); //logical And
console.log(x == 5 || y == 6); //logical or
console.log(!(x == 5)); //logical not

/**ternary operator */
/**
 * It takes three operands. (condition) ? truthy : falsy;
 */
let hisAge = 11;
let drink = hisAge >= 11 ? "coffee" : "milk";
console.log(drink);
