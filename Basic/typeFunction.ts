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