
class App{
    constructor(){
        console.warn("Constructor calling");
    }
    name="Rocy"
    getName(){
        console.log("Hello There", this.name);
    }
}

let a1 = new App;

// a1.getName();