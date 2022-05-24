function demo(a:string,b:number){
    let result = a + b;
    console.log(result);
}

demo("Vinod", 78);

function circle(r:number):number{
    let pi = 3.14;
    let Circumference = 2 * pi * r;
    return Circumference;
}

console.log(circle(5));


// Function result must be string.

function str():string{
    // return 3495              /* Here gives the error Type 'string' is not assignable to type 'number' */
    return "Hello World";
}

function num():number{
    let a = 23;
    let b = 20;
    let res = a + b;
    return res;
}

function demo1(a:number):string{
    return a.toString();        /* Here number convert into string */
}
console.log(demo1(23));