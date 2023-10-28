const accountId= 4432
let  accountEmail="mangesh@gmail.com"
var  accountName= "mangesh"
accountPassword= "1234" // wrong practice but possible (uses let keyword)

// accountId= 2547 // assigning new value to const variable is not allowed in js

let accountState; // if value is not iniatized it will show undefined

/*
        nowadays we dont use var keyword because of scope issues(functional scope and block scope)
*/

console.log(accountId);

console.table([accountId ,accountEmail,accountName ,accountPassword ,accountState])