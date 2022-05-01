let arr = [3,4,5,"Hello",7,8,9, true, {name:"Alex"}];
console.log(arr);

// Above this is the mixed array I Write.

//***************************************************************************** */

// below you can write particular type of array.

/* Number type Array */
let num:number[]=[3,45,6,7,78,1];   // You can't assign other type of variable in it.
num.push(5);   // You can't push other type of variable in Array
console.log("Number Array", num);

/* String type Array */
const str:string[]=["C","C++","Java","JavaScript","Python","PHP"];   // You can't assign other type of variable in it.
console.log("String Array", str);

/* Object type Array */
type obj={name:string, age:number};
let obj:obj[]=[{name:"Alex",age:23},{name:"Ram",age:29},{name:"John",age:31}];   // You can't assign other type of variable in it.
console.log("Object Array", obj);

/* Any type of variable Array */

let any:any[]=[2,4,"Hello",true,{name:"Johnny", age:41}];
console.log("Any type of variable Array", any);

// *************************************************************************

// Your value is limited but different type of var present in array then you can do like below
type object1={sal:number,position:string}
let mixed:[string,number,boolean,object1]=["Vinod Sapkal",30,true,{sal:50000,position:"Software Engg"}];
console.log("Limited value array", mixed);
