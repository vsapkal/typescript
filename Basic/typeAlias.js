"use strict";
/* Define type like variable and reuse it.
    1. Type Alias with variable
    2. Type Alias with function params.
*/
let a = "Alex";
let b = 30;
let c;
let d = undefined;
let e = true;
// How to use it in function
function combine(a, b) {
    return (+a) + (+b);
}
console.log(combine(12, 16));
console.log(combine("Alex", "Disale"));
console.log(combine(true, false));
console.log(combine(true, undefined));
