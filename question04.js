(function(){
   var x = y = 5;
//    console.log(x); // 5
//    console.log(y); // 5
})();

console.log(y);
console.log(x);

/**
 * output
 * 5
 * ReferenceError: x is not defined
 * var variables are function scope we cannot access them outside the function
 * var x is inside anonymous function we cannot access it. it will throw error.
 * result of assignment expression is the value of the right hand side expression 
 * y = 5 and x = 5 
 * here y is not been created with any let var and const keywords so in this case it is not in strict mode
 * so y variable becomes global variable since we can access this in global scope.
 */