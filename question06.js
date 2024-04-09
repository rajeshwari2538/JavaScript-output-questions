const obj = {
    "1" : "a",
    1 : "b",
    [1] : "c"
};

console.log(obj["1"]);   //c

/**
 * object  keys are always stored as strings even keys that are numbers,
 * they are also stored as strings
 * so if we do "1" : "a" and 1 : "b" both are creating same keys "1"
 * however we do that within same object the key that appears later on will override the value of the previous key
 * simpilary [1] bracket notation does not denote array here it is actually a syntax that is used to create dynamic keys
 * so we can use the value of variables [one] : "c" here to create dynamic keys 
 */