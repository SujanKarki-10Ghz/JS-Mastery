/**Arrays are good but not sufficient for real-world data
 * All JavaScript values, except primitives, are objects.
 * boolean, number, strings can be objects if defined with new keyword because they are primitive data types
 * objects store key value pairs.
 * objects don't have index.
 * objects are mutable.
 */

/**How to create objects */
const key = "email";
const student1 = {
  //we also call it object literals
  name: "Nepid", //key => name, value = >"Nepid"; keys are also called properties
  roll: 12,
  faculty: "bca",
  "person Hobbies": "listening music",
  //we can store arrays also in object
  subjects: ["dotNet", "infoSec", "multiMedia", "e-Governance"],
};

/**How to access the data from objects */
//dot operator -> objectName.property
// [] -> objectName ["property"]
// objectName[expression] // x = "age"; person[x]
console.log(student1);
console.log(student1["name"]); //keys are strings by default
console.log(
  `${student1.name} has roll of ${student1.roll} and faculty is ${student1.faculty} and his subjects are ${student1.subjects}`
);
//we can also access individual elements of array
console.log(`subjects are ${student1.subjects[0]}`);

//adding new key-value pair to object
student1.gender = "male"; //key -> gender ,value -> "male";
student1["nationality"] = "Nepalese";
console.log(student1);

//one key difference between accessing by dot and bracket is:
//we defined person hobbies with a space which is possible only when we put it iniside: " ".
//Now, we cannot access that value using dot operator.
// student1.person Hobbies; // error
// the right way to do it is by using bracket

console.log(student1["person Hobbies"]); //listening music

//Another use of bracket notation
//suppose we want to push another key inside the object

//key should be email: value;
//How to do it?
// student1.key = "nepidkhadka@gmail.com"; //this will push key: "nepidkhadka@gmail.com";
// console.log(student1);

//the correct way is

student1[key] = "nepidkhadka@gmail.com";
console.log(student1);

//Iterate an object || Loop an object

const person = {
  FirstName: "Sujan",
  LastName: "Karki",
  age: 23,
  "person hobbies": ["programming", "listening music", "football"],
};

/**For in loops */
for (let key in person) {
  //for (key in object){ block of code to be executed}
  console.log(person[key]); //if we use dot operator here, output will be undefined three times. why?
  //because it will look for key named key in the object.

  /** Working
   * 1st iteration: FirstName will come in variable key
   * 2nd iteration: LastName will come in variable key
   * 3rd iteration: age will come in variable key
   * 4th iteration: person hobbies will come in variable key.
   */

  //To print the result in key value pair, we can use template literals
  console.log(`${key} : ${person[key]}`);
  //or
  // console.log(key, ":", person[key]);
}

/**object.keys */
console.log(Object.keys(person)); //This will give keys as an output

//using For of loop

for (let key of Object.keys(person)) {
  // console.log(key); // this will also give keys as an output // FirstName, LastName, age, person hobbies
  console.log(person[key]); //this will give values as an output // sujan, karki, 23, [].
}

/**object Constructor */
// function Father(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }
// const myFather = new Human("John", "Doe", 22, "blue");
// console.log(myFather.age);

//Computed Properties

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1";
const value2 = "myValue2";

//what we wanna do is create an obj using above declared variables

const obj = {
  //we want to show
  // objKey1 : myValue1,
  // objKey2 : myValue2,
  // key1: value1,
  // key2: value2,

  //instead
  [key1]: value1,
  [key2]: value2,
};
console.log(obj); //{objKey1: 'myValue1', objKey2: 'myValue2'}

let newobj = {};

newobj[key1] = value1;
newobj[key2] = value2;

console.log(newobj); //{objKey1: 'myValue1', objKey2: 'myValue2'}

/**object Destructuring */
const band = {
  bandName: "Led Zeppelin",
  famousSong: "Stairway to Heaven",
  year: 1968,
  anotherSong: "Kashmir",
};
// const var1 = band.bandName;
// const var2 = band.famousSong;
//INSTEAD

// let { bandName, famousSong } = band; //by default
let { bandName, famousSong, ...restProps } = band; //restProps stores remaining of the key:value pair as obj
//if you want to store in another variable name
let { bandName: var1, famousSong: var2 } = band;
console.log(bandName, famousSong); //Led Zeppelin Stairway to Heaven
console.log(var1, var2); //Led Zeppelin Stairway to Heaven
console.log(restProps); //{year: 1968, anotherSong: 'Kashmir'}

/**object inside array */
const users = [
  {
    userId: 1,
    FirstName: "Harshit",
    Gender: "male",
  },
  {
    userId: 2,
    FirstName: "Mohit",
    Gender: "male",
  },
  {
    userId: 3,
    FirstName: "Nitesh",
    Gender: "male",
  },
];
for (let user of users) {
  console.log(user);
  /** {userId: 1, FirstName: 'Harshit', Gender: 'male'} //1st iteration
      {userId: 2, FirstName: 'Mohit', Gender: 'male'} //second iteration
      {userId: 3, FirstName: 'Nitesh', Gender: 'male'} //third iteration
   */
}
//We can use map method too
// users.map((index) => {
//   console.log(index);
//   console.log(index.userId); // 1 2 3;
//   console.log(index.FirstName); // "Harshit", "Mohit", "Nitesh";
//   console.log(index.Gender); // "nmale", "male", "male";
//   /**
//    * {userId: 1, FirstName: 'Harshit', Gender: 'male'}
//     {userId: 2, FirstName: 'Mohit', Gender: 'male'}
//     {userId: 3, FirstName: 'Nitesh', Gender: 'male'}
//    */
// });

/**Nested Destructuring */
// const [user1, user2, user3] = users; //create a variable name user1 where entire obj is stored of firstIndex
// console.log(user1); //{userId: 1, FirstName: 'Harshit', Gender: 'male'}
const [{ FirstName }, , { Gender }] = users;
/**
 * if we want only the firstName of object of firstIndex then we can use {FirstName} and access it.
 * if we want to skip object at secondIndex, we can use , , to skip it.
 * if we want Gender of the object at ThirdIndex, we can use {Gender} and access it.
 */
console.log(FirstName, Gender); //Harshit male

//We want to show FirstName with different variable name, then we can
// const [{ FirstName: user1FirstName }, , { Gender: user3Gender }] = users;
// console.log(user1FirstName, user3Gender);

//we want FirstName and userId then,
// const [
//   { FirstName: user1FirstName, userId: user1Id },
//   ,
//   { Gender: user3Gender, userId: user3Id },
// ] = users;

/**PARAMETER DESTRUCTURING */
// const person1 = {
//   FirstName: "Harshit",
//   gender: "male",
// };
// function printDetails(obj) {
//   console.log(obj.FirstName); //Harshit
//   console.log(obj.gender); // male
// }
// printDetails(person1);

const person1 = {
  firstName: "HARSHIT",
  gender: "MALE",
};
function printDetails({ firstName, gender }) {
  console.log(firstName); //HARSHIT
  console.log(gender); //MALE
}
printDetails(person1);
