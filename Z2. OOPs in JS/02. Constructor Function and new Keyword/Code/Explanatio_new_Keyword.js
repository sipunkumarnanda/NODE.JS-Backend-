function hello(name){
    // this.name = name
    console.log(this);
}

const object1 = {name : "Sipun"}

// Object.setPrototypeOf(object1 , hello.prototype)

const obj = {};
console.log(Object.getPrototypeOf(hello)); // Logs: {}
