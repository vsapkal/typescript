
interface userType {
    name:string,
    age:number,
    email:string
    getName:()=>string
}

let users:userType={
    name: "John",
    age: 23,
    email: "john@gmail.com",
    getName:function(){
        return `My name is ${this.name}`;
        // console.log(`My name is ${this.name}`);
    }
}

console.log(users.getName());