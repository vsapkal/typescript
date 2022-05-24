function demo(a, b) {
    var result = a + b;
    console.log(result);
}
demo("Vinod", 78);
function circle(r) {
    var pi = 3.14;
    var Circumference = 2 * pi * r;
    return Circumference;
}
console.log(circle(5));
// Function result must be string.
function str() {
    // return 3495              /* Here gives the error Type 'string' is not assignable to type 'number' */
    return "Hello World";
}
function num() {
    var a = 23;
    var b = 20;
    var res = a + b;
    return res;
}
function demo1(a) {
    return a.toString();
}
console.log(demo1(23));
