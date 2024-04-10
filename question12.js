function y(){
    for(let i = 1; i <= 5; i++){
        setTimeout(() =>{
            console.log(i);
        }, i*1000);
    }
    console.log("hello");
}

y();

/**
 * hello is printed immediately fter the loop starts because it's outside the setTimeout() function
 * setTimeout schedules the execution of its callback function after certain delays.
 * since each iteration of the loop has its own i due to using let, the value of i captured by the 
 * cloures is the value at the time the closure was created.
 * as a result each function inside setTimeout prints the value of i specific to its iteration
 * hello
 * 1
 * 2
 * 3
 * 4
 * 5
 */