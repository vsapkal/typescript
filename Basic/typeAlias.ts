
/* Define type like variable and reuse it. 
    1. Type Alias with variable 
    2. Type Alias with function params.
*/

type varType = string | number | undefined | boolean;

let a:varType = "Alex";
let b:varType = 30;
let c:varType;
let d:varType = undefined;
let e:varType = true;

// How to use it in function

function combine(a:varType,b:varType){
    return (+a) + (+b);
}

console.log(combine(12,16));
console.log(combine("Alex", "Disale"));
console.log(combine(true, false));
console.log(combine(true, undefined));