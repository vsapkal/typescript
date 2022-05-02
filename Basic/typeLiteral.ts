
/* NOTE : Apply values rather than apply types to a variable or parameters */


let data:"Alex"|23="Alex";
// data=54;   you can't assign other value to variable.
data=23;

// And also u can use below technique;

function combine(a,b,type: "as-number" | "as-string"){
    if(type === "as-number"){
        return (+a) + (+b);
    } else{
        return a.toString() + b.toString(); 
    }
}

console.log(combine(12,13, "as-number"));
console.log(combine("Alex","Jones", "as-string"));

