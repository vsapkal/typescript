/* Union type is describes a value that can be one of several types */

//Union type is mentioned below. Union denote via '|'  vertical line. 

let data: string | number = 30;

// When use union

function combine(a:number | string, b:number | string){
    if(typeof a==="number" && typeof b==="number"){
        return a+b;
    } else{
        return a.toString() + b.toString();
    }
}

console.log(combine(10,39));
console.log(combine("Alex", "Bajaj"));

// Also you can use any for here.

/* NOTE : When you don't have any option that time you can use "any" otherwise you have to use "Union" */