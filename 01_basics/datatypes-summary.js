//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ******************************************** memory in js ******************************

// Variables in js are stored at two places (stack and heap)

// Stack (Primitive)- copy  , Heap  (non-Primitive)-references

let myName = "mangesh"

let newName = myName

newName = "rupesh"

console.log(myName);
console.log(newName);

let userOne ={
    email: "mangeshgajakosh@gmail.com",
    upi: "okaxis"
}



let userTwo = userOne

userTwo.email = "abc@gmail.com"

console.log(userOne.email);