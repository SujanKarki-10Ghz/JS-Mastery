//spreadoperator in array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = [...array1, ...array2, 7, 8, 9];
//spreads the element of array1 and array2
const newArray1 = [..."abc"]; //spreads the string in array
// const newArray1 = [...12345667]; //Error: Not iterable
console.log(newArray); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(newArray1); // ['a', 'b', 'c']

//Spreadoperator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
  //   key1:"value59" // overwrites value of key1
};
const obj2 = {
  key3: "value3",
  key4: "value4",
};

const obj3 = {
  ...obj1, //spreads the key:value pair of obj1
  ...obj2, // spreads the key"value pair of obj2
  key5: "value5", //adding new key:value pair
  key6: "value6",
};
console.log(obj3); //{key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4', key5:'value5', key6:'value6'};

const newobj = {
  ...["item1", "item2"], //item1 will be given key 0 and item2 will be given key 1
};
console.log(newobj); //{0: 'item1', 1: 'item2'}
