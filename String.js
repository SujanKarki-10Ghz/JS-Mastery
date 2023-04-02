/**String indexing */
let firstName = "nepid";

// n e p i d
// 0 1 2 3 4
console.log(firstName[0]); //gives n
//length of String
console.log(firstName.length);

//last index
console.log(firstName[firstName.length - 1]);

/**String methods */
//trim: Trim spaces in the string
let Name = "   Sujan    ";
console.log(Name.length);
Name = Name.trim(); //"sujan";
console.log(Name.length);
//toUpperCase();
Name = Name.toUpperCase();
//toLowerCase();
Name = Name.toLowerCase();
console.log(Name);
//slice(startIndex, endIndex);
let newString = firstName.slice(0, 3); // nepi
console.log(newString);
//splice();

/**String Concatenation */ // + sign is used to concatenate the string
let myFirstName = "Sujan";
let myLastName = "Karki";
let fullName = myFirstName + " " + myLastName; //added some space
console.log(fullName);

let string1 = "10";
let string2 = "12";
let string3 = Number(string1 + string2);

/**Template Literals or String */
let myName = "Sujan";
let myAge = 24;
let aboutMe = `My name is ${myName} and my age is ${myAge}`;
console.log(aboutMe);
