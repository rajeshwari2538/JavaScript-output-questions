//closures 
function counter(){
    let count = 0;
    return () => count++;
}

let c = counter();
console.log(c()); //0
console.log(c()); //1
console.log(c()); //2

/**
 * the function counter returns another function that closes over the count variable
 * this forms a closure. initially the value of the count variable is 0. when we call c the first time it returns count++
 * postfix increment operator increases the value of the variable by 1 but it returns the original value and increment by 1. so for first log 
 * it will return 0. when we call c again it doesn't create a new count vaiable we're still accessing same count variable whose value is 1 now and increment to 2.
 * similarly for 3rd log it will return 2 and increment to 3.
 * 
 * 
 */