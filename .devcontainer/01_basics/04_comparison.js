// let p = 10;
// let q = 5;

// console.log(p == q);   // false
// console.log(p === q);  // false
// console.log(p != q);   // true
// console.log(p !== q);  // true
// console.log(p > q);    // true
// console.log(p < q);    // false

// console.log( null < 0);//  =>fasle
// console.log( null == 0);// =>false
// console.log( null >= 0);// =>true

// this is because equality check(==) and comparison(<,>) works differently , in equality check null(0) is considered as zero .

// === strict equality check , comparares datatypes also

console.log("2" == 2); //  in JavaScript compares the string "2" to the number 2 using the equality operator (==). In JavaScript, 
// the equality operator performs type coercion, which means it tries to convert the operands to the same type before making 
// the comparison.
console.log("2" === 2);
//With strict equality, the types are not coerced, and both the value and the type must match for the expression to be true. 