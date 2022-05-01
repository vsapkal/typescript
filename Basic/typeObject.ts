
// How object works in TS;

let user:object={
    name:"Alex",
    age:34,
}        // You can assign like that  'let user:object={}'  OR

let user1:{}={
    name:"John",
    age:23
}        // Also like that  'let user1:{}={}'   but here you can't get values of that object.

//************************************ */

let emp:{name:string;age:number;sal:number}={
    name:"Alex",
    age:34,
    sal:50000
}      // that time you can get value from object  AND

let emp1:{name:string;age:number;sal:number}={
    name:"John",
    age:32,
    sal:30000
}       // You don't have to assign value again & again to object.

// *******************************************

//below you can see how to assign value only one time

type obj = {name:string;age:number;sal:number}

const per:obj={
    name:"Ram",
    age:32,
    sal:30000
}

const per2:obj={
    name:"Lakhan",
    age:32,
    sal:30000
} 

// Like above you can assign value to the object.