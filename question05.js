let x = 15;
let y = 20;
let z = 10;

x = y;
x = y = z;
console.log(x, y, z);   // 10 10 10

/**
 * assignments are right associative that means
 *  x = (y = z);
 * where the expression y = z is evalutated first, and then x
 * y = z = 35
 * x = 35
 */