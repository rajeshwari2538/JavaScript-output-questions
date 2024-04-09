const str = "hello";
str.length = 8;
console.log(str);         //hello
console.log(str.length);  //5

/**
 * after creating string str if we try to manipulate the value of the length property,
 * which by the way is possible in js, it doesn't throw any error unless we use 'use strict'
 * if we use 'use strict' the error message we get Cannot assign to read only property length of string hello.
 * strings are immutable so setting the length to 8 does not really increase or add any white spaces towards
 * the end of the string. if you try to manipulate or create any new properties on the string,
 * it will not update that property's value to the assigned value
 * const str = "hello";
 * str.day = "Monday";
 * console.log(str.day); //undefined
 * 
 */