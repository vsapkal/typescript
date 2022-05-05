"use strict";
// Type inference means check variable type automatically in TS.
let a = "Hello";
a = "Hi"; // a=10; when you reassign the value it takes same type of value
// above technique called "Type inference."
// ***********************************************
let b; //This case variable b can take any type of value.
b = "Hi";
b = 10;
//********************************************** */
// Store particular value in variable
let data;
// data=43  you can't assign.
data = 45;
let str;
// str="hello"
str = "Vinod"; // It is case sensitive.
//************************************************* */
// let & const
let x = 10; // typeof is "number" because you can reassign the value.
const val = 10; // here type of is not mention here mention or directly assign value to const variable.
