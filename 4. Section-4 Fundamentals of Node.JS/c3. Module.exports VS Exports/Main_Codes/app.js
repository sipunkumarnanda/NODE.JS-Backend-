// console.log(module.exports === exports);  // True 
// Because exports is written like this =>  ( const exports = module.exports ; ) 

const user = {
    name : "Sipun Kumar Nanda" ,
    age : "23" ,
    address : {
        city : "NYC" ,
        state : "Odisha"
    } ,
    hobbies : ["Teaching" , "Coding" , "IT"]
}

let address = user.address  

console.log(user.address === address);   // True

address.pincode = 757050
address.country = "India"
address.city = "Delhi"

console.log(user);  

/*
// OUTPUT   address: { city: 'Delhi', state: 'Odisha', pincode: 757050, country: 'India' },

Because 

In JavaScript, objects are **reference types**. This means that when you assign an object to a variable, what is actually assigned is a **reference (or pointer)** to the memory location where the object is stored.

- The object itself (its properties and values) lives in memory, and the variable simply holds a reference (or pointer) to that object in memory.
*/

// Like The Above 
// let send = module.exports ;    // here module.export object assign to send variable , am i correct ?
// send.address = address




address = {
    pincode : 8628827 ,
    city : "TEXAS"
}     // Here we assign a new object to address Variable . 
console.log(address);
console.log(user.address);
console.log(address === user.address);   // False 
// --------------------------------------------------------------------------


console.log(module.exports  === exports);   // True 

exports = {
    address ,
    user
}   // while importing It will give { } Empty object . Why ?? ANswer => Because its an different Object 


/*

Because require () Function Return Module.export() 

`require()` is a function in Node.js which takes a path as an argument, finds the given path, executes the entire code in that path or file, and finally returns the value of `module.exports` (whatever is present there, whether it is a string, number, or any other value) from the file to the calling code.
*/





console.log(module);






// const math = require("./math")

// const sum = math.sum
// const product = math.product

// console.log(sum(1,2,3));
// console.log(product(10,20));


// -------------------------------------------------------------------------------

// const math = require("./math")

// console.log(math);