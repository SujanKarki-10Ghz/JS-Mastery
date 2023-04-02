//Arrow function (Fat arrow function) allows us to write shorter function syntax:
let myFunction = (a, b) => a * b;

//Arrow Function
const isEven = (number) => {
  //We can remove parenthesis if there is single parameter
  return number % 2 === 0;
};
console.log(isEven(4));
//This can be also written as below using arrow function
// const isEven = number => number %2 === 0;

//Function declaration
function Even(number) {
  return number % 2 === 0;
}
console.log(Even(5));

//Function Expression
let isEvenNum = function (number) {
  return number % 2 === 0;
};
console.log(isEvenNum(6));

// Another example of Arrow Function is:
const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
let ans = findTarget([1, 2, 3, 4, 5, 6, 7, 8], 8);
console.log(ans);

/**
 * Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
 * Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
 * Arrow functions cannot use yield within their body and cannot be created as generator functions.
 */

/**SYNTAX */
/**
 () => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
 */

//Arrow functions don't have their own bindings to this:

//=> In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
// => With arrow functions the this keyword always represents the object that defined the arrow function.

class Person {
  constructor(name) {
    this.name = name;
  }
  //Arrow function
  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 100);
  }

  //Regular Function
  printNameFunction() {
    setTimeout(function () {
      console.log("Function:" + this.name);
    }, 100);
  }
}
let person = new Person("Nepid");
person.printNameArrow(); //Arrow: Nepid
person.printNameFunction(); // Function:undefined

//Another example
const x = {
  name: "Harry",
  role: "JS Developer",
  exp: 30,
  show: function () {
    // console.log(`The name is ${this.name}\n The role is ${this.role}`);
    /* this represents this(x) object*/
    // console.log(this); //{name: 'Harry', role: 'JS Developer', exp: 30, show: ƒ}
    // let that = this; //Here, that represents the object
    //     setTimeout(function () {
    //       console.log(this); // This here is window object: global window
    //       // console.log(`The name is ${this.name}\n The role is ${this.role}`);
    //       // //The name is undefined
    //       // // The role is undefined
    //       console.log(`The name is ${that.name}\n The role is ${that.role}`); //{name: 'Harry', role: 'JS Developer', exp: 30, show: ƒ}
    //     }, 2000);
    //   },
    // };
    setTimeout(() => {
      console.log(`The name is ${this.name}\n The role is ${this.role}`);
      //In arrow function, this here is not a window object. It takes this from parent.
      /**Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping". */
    }, 1000);
  },
};

//more practise of arrow function

function sum(a, b) {
  return a + b;
}

// =>const sum = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}
// => const isPositive = (number) => number >= 0;

function randomNumber() {
  return Math.random();
}

// => let randomNumber = () => Math.random();
// document.addEventListener("click", function () {
//   console.log("clicked");
// });

// => document.addEventListener('click', ()=> console.log('clicked'));
