// write article on ' method of strings in js' and study it. 

const name = "mangesh"
const repoCount= 50

//console.log(name + repoCount + " value"); // it old fashion now so dont use it .

//  instead we make use of string interpolation => `${}`

console.log(`MY name is ${name} and my score is ${repoCount}`);

const gameName= new String('Rupesh') // again way to declare a string as object 

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(2))

const newString = gameName.substring(0,4);// substring does't accept negative values , if provided treat them as 0
console.log(newString);

const anotherString = gameName.slice(-3,6);// slice accepts negative values
// if first value is provided as negative, it counts from back and second positive value form start.
console.log(anotherString);