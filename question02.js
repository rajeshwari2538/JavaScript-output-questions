const x = function(){};
const y = class{};
console.log(typeof x);
console.log(typeof y);

/* output => 
function 
function
*/
// x => functions are special type of objects in js and typeof will return function
// y => it holds the class defination when we do typeof y it also prints function bcz in modern js classes are basically just syntactic sugar over the older prototype based inheritance feature it uses constructor functions under the hood.