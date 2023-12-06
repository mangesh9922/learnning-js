//arrays
const myArray = [0,1,2,3,4,5,true,"mangesh"]
const myHeros= ["ironman","spiderman"]
const myArray2 = new Array(1,2,3,4,5)

// console.log(myArray2);
// console.log(myArray);

// Array methods 

// myArray2.push(6) // adds new value to end of an array
// myArray2.pop()   // removes last value from end of an array

// myArray2.unshift(0) //The unshift(k1,k2....kn) method inserts the given values to the beginning of an array-like object.
// myArray2.shift()

const newArray = myArray.join()// binds and converts to string 

// console.log(myArray2.includes(1111)) // returns whether the 1111 is present in the array on not , gives boolean values
// console.log(myArray2.indexOf(5));
// console.log(newArray);
// console.log(typeof(newArray));

// slice : The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// splice :  It lets you change the content of your array by removing or replacing existing elements with new ones. This method modifies the original array and returns the removed elements as a new array.

const nya=[1,2,3,4,5,6]
console.log(nya);

const nya1= nya.slice(1,4) // doen't modify array but , doen't consider last element (start,last) parameter of slice.
console.log("A",nya1);

const nya2= nya.splice(1,4) // splice modifies original arrays ,removes elements and copy to newer array
console.log("B",nya2)
console.log(nya);