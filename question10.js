let x = new Number("1");
let y = Number("1");
console.log(typeof x);         // object
console.log(typeof y);         // number

/**
 * when we call the constructor function which is when we use the keyword new,
 * so if we do new Number and pass it to the string 1 it will convert the string into
 * a number which will be 1 and it will return a wrapper object that's why if we
 * try to print the typeof x it prints object.
 * when we call Number as a normal function it simply just converts the type of its argument into a number
 * it returns the primitive value 1 and when we try to check typeof y it prints number
 */