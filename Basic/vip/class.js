"use strict";
class App {
    constructor() {
        this.name = "Rocy";
        console.warn("Constructor calling");
    }
    getName() {
        console.log("Hello There", this.name);
    }
}
let a1 = new App;
// a1.getName();
