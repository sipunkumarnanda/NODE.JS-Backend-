function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(10));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);  // {}
// Here we know in js everything is object 



// Prototype in js 
function createUser(username , score){
    this.username = username
    this.score = score

    console.log(this);
    return this
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Score is  ${this.score}`);
}

const chai = createUser("Chai" , 25)
const tea = createUser("Tea" , 250)

// console.log(chai , "I am Chai");
chai.printMe()  // The error occurs because chai is not an instance of the createUser constructor. Therefore, 
// the printMe method, which is added to createUser.prototype, is not available on chai.




/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/