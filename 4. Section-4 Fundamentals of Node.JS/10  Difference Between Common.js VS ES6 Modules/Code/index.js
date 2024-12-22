console.log("Running INDEX.JS ..............");
// console.log(this);  // { } Empty Object ->> Because it gives the value of Module.exports which is primarily set . Also we attach / add new value to this object using . operator . 


// module.exports.a = 5 
// module.exports.name = "Akankshya"
// console.log(this);    // { a: 5, name: 'Akankshya' }

// module.exports = {
//     name : "Akankshya" ,
//     age : 20 
// } // Its wont work Because now we assign a new Object to it . 

// console.log(this);   // Its gives the value of Module.exports 

// Common js Module 
// const timer = require('./timer.js')


// ES 6 Module 
// console.log("Running Index.js .............");    // Here we check which will run fast this file or imported file 
// import timer from './timer.js'
// import timer3 from './timer3.js'
// // 


// ---------------------------------------------------------------------
// In Common JS 

// async function hii() {
//     const response = await fetch("https://jsonplaceholder.typicode.com")
//     console.log(response);
// }
// hii()

// (async ()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com")
//     console.log(response);
// })()

// ---------------------------
// const response = await fetch("https://jsonplaceholder.typicode.com")
//     console.log(response);


// -------------------------------------------------------------------------------

import myValue , {obj1 , obj2 , num , str} from './timer.js'  // { } Here we dont do Object Destructing , It is the Syntax of Import 

console.log(obj1 , obj2 , num , str);  // { name: 'Ankita', age: 20 } { name1: 'Akku', age: 21 } 5 String
console.log(myValue);