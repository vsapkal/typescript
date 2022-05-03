// Type Unknown in TS.
/* Difference between any & unknown */
/* NOTE:
    1. Unknown : unknown is more safe and suitable for the code.
    2. Any: As per the last session don't use any too much in the code.
*/
/* First we check "ANY" */
var data;
data = 10;
data = "Alex";
var item;
item = data; // Here another variable assign to item there is error found because "any" type switch of the power of typeScript. but in unknown case it is not happened. let's see...
var info;
info = 23;
info = true;
info = "John";
var res;
// res=info;        /* Uncomment this and see info is not assign to res because of it's type "unknown"   */
