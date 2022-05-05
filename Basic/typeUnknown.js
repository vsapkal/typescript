"use strict";
// Type Unknown in TS.
/* Difference between any & unknown */
/* NOTE:
    1. Unknown : unknown is more safe and suitable for the code.
    2. Any: As per the last session don't use any too much in the code.
*/
/* First we check "ANY" */
let data;
data = 10;
data = "Alex";
data = true;
let item;
item = data; // Here another variable assign to item there is error found because "any" type switch of the power of typeScript. but in unknown case it is not happened. let's see...
console.log("item", item); // here item value is "true". because of type is "any".
let info;
info = 23;
info = true;
info = "John";
let res;
// res=info;        /* Uncomment this and see info is not assign to res because of it's type "unknown"   */
