function x(){
    for(var i = 1; i <= 5; i++){
        setTimeout(() =>{
            console.log(i);
        }, i*1000);
    }
    console.log("hello");
}

x();

/**
 * first hello is printed immediately after the loop starts because it's outside
 * the 'setTimeout()' function.
 * 'setTimeout()' creates functions that log the current value of i after a certain delay, 
 * However,by the time these functions execute, the loop has already finished and i has reached the value of 6.
 * so,each function logs 6 when it executes.
 * hello
 * 6
 * 6
 * 6
 * 6
 * 6
 */