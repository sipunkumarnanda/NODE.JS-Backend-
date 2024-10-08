
function sum(...nums) {
    return nums.reduce((curr , acc) => curr + acc)
}

function product(...nums) {
    return nums.reduce((curr , acc) => curr * acc)
}

// module.exports = {sum , product } ; // Using Object

// module.exports = [sum , product ] ; // Using Array 

// module.exports = "SIPUN" // What will be the output of this while require (Importing)

// console.log(module.exports);  // Output = > { } Empty Object 

// module.exports = {sum , product}  

// console.log(module.exports);  // Output =>  { sum: [Function: sum], product: [Function: product] }

// Using Object 
// console.log(module.exports);  // { } Empty Object
// module.exports.sum = sum 
// module.exports.product = product

// Another Way 
// module.exports = {
//     sum ,
//     product
// }



// Another way 

exports.sum = sum 
exports.product = product
