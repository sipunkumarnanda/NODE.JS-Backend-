function sum(...nums){
    return nums.reduce((curr , acc)=> curr + acc)   // ...nums is Here num Variable / num = [val1,val2]
}

function product(...nums){
    return nums.reduce((curr , acc)=> curr * acc)
}




// let send = module.exports ; 
// Like this exports is also written SO 
// let exports = module.exports 

// send.sum = sum ;
// send.product = product ; 


// let exports = 2  // Error : SyntaxError: Identifier 'exports' has already been declared . 

// exports.sum = sum ;
// exports.product = product ; 

// module.exports = {
//     sum ,
//     product
// }    // Here in app.js file while importing its give correct result but in case of 


exports = {
    sum ,
    product
}   // while importing giving { } Empty object . Why ?? ANswer => Because its an different Object 

console.log(module.exports);   // { }
/*
Ans = > The issue occurs because exports is being reassigned in your code. When you do exports = { sum, product },
 you're creating a new object and assigning it to exports, but Node.js still references the original module.
 exports. As a result, your new object is not exported. 

 So This is Not Valid For Exporting , This is Not Valid Syntax 
 exports = {
    sum ,
    product
} 

In JS we can do like this 
exports.sum = sum 
exports.product = product    // This is Correct Syntax 
*/


// Difference 

// module.exports = {
//     sum ,
//     product
// }

exports.sum = sum 
exports.product = product

console.log(module);


// Explanation
/*
const obj = {
    name : "Ankita"
}

let newObj = obj

console.log(newObj);
console.log(newObj === obj);  // True   // Here newObj Refer to the same memory location which is  obj's memory location

newObj = {
    age : 20
}
console.log(newObj);
console.log(newObj === obj );   // False  // Because here we assign a new Object to the variable 
*/