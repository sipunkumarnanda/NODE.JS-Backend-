function hello(){
    console.log("Hello");
}

const obj1 = Object.create(hello)
console.log(obj1);
console.log(hello.obj1);

obj1.__proto__(); //  Calls the `hello` function via the prototype chain