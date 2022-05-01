// Type inference means check variable type automatically in TS.
var a = "Hello";
a = "Hi"; // a=10; when you reassign the value it takes same type of value
// above technique called "Type inference."
// ***********************************************
var b; //This case variable b can take any type of value.
b = "Hi";
b = 10;
//********************************************** */
// Store particular value in variable
var data;
// data=43  you can't assign.
data = 45;
var str;
// str="hello"
str = "Vinod"; // It is case sensitive.
//************************************************* */
// let & const
var x = 10; // typeof is "number" because you can reassign the value.
var val = 10; // here type of is not mention here mention or directly assign value to const variable.
