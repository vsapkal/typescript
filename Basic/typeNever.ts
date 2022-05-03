/* NOTE: never type called when our function is break.
example is below. */

function apiError(msg,code):never{        // Here function type is "void"  but you can set type "never"
    throw {message:msg, apiCode:code};
}

console.log(apiError("Server side error", 500));