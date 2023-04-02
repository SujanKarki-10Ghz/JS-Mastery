//store method in different objects

const userMethod = {
  about: function () {
    return `${this.firstName} is ${this.age}-years-old`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "tunak tunak tu tunak tunak tu tunak tunak tu tada da da";
  },
};

/*Create an function to create multiple ojects */
function createUser(firstName, lastName, email, age, address) {
  // const user = {};
  const user = Object.create(userMethod); //{} => now the __proto is set to userMethod.
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  //   user.about = function () {
  //     return `${this.firstName} is ${this.age}-years-old`;
  //   };
  //   user.is18 = function () {
  //     return this.age >= 18;
  //   };

  //calling the reference rather than consuming memory by creating function every time.
  // user.about = userMethod.about; //goes to the address and calls it
  // user.is18 = userMethod.is18;
  // user.sing = userMethod.sing;

  return user;
}

const user1 = createUser(
  "harshit",
  "vashisth",
  "harshit@gmail.com",
  18,
  "my_address"
);

console.log(user1);
//{firstName: 'harshit', lastName: 'vashisth', email: 'harshit@gmail.com', age: 18, address: 'my_address',}
const is18 = user1.is18(); //goes to __proto__ and call it.
const about = user1.about();
const sing = user1.sing();
console.log(is18); //true
console.log(about); //harshit is 18-years-old
console.log(sing); //tunak tunak tu tunak tunak tu tunak tunak tu tada da da

/** In JavaScript, almost "everything" is an object.
 * The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
 *
 */
/**Syntax
 * Object.create(proto) //proto : The object which should be the prototype of the newly-created object
 * Object.create(proto, propertiesObject)
 */

const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.create(obj1); //here is where __proto__ got set which is obj1.
//what this object.create will do is,
// if it doesn't get the accessed data within its object it will search the data in another object written inside ();
//in this case, (obj1);

console.log(obj2); //{}

//adding key:value to empty object
obj2.key3 = "value3";
console.log(obj2); //{key3: 'value3'}

//Suppose I want to access the value of key2 of obj1, I can get it because of object.create(obj1);
console.log(obj2.key2); //value2

//what if I add key2 in obj2
// obj2.key2 = "unique";
// console.log(obj2.key2); //unique

//Here what JS does is, it will look for the key2 in obj2.
//if it gets key2 in obj2, it will simply access it, else it will search the key2 in obj1.

console.log(obj2); //{key3: 'value3', __proto__: Object};

//__proto__
//official ecmascript documentation: [[prototype]]
// __proto, [[prototype]]

//prototype => this is different in JS from above.

console.log(obj2.__proto__); //{key1: 'value1', key2: 'value2'}
//here we get obj1 as __proto__
