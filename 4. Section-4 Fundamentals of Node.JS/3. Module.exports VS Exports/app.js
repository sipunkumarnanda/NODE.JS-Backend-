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

// address.pincode = 757050
// address.country = "India"

// console.log(user);  

// --------------------------------------------------------------------------

// const math = require("./math")

// const sum = math.sum
// const product = math.product

// console.log(sum(1,2,3));
// console.log(product(10,20));


// -------------------------------------------------------------------------------

const math = require("./math")

console.log(math);